/*
 * Tornado Http Middleware Handler PSR-15
 */

namespace Dsp\TornadoHttp\Resolver;

use Dsp\TornadoHttp\Exception\MiddlewareException;
use Interop\Container\ContainerInterface;
use Psr\Http\Server\MiddlewareInterface;

/**
 * Dsp\TornadoHttp\Resolver\Resolver
 *
 * Middleware Resolver class
 */
class Resolver implements ResolverInterface
{
    /**
     * @var ContainerInterface Service Container
     */
    private container;

    /**
     * Constructor
     *
     * @param ContainerInterface container Service Container
     */
    public function __construct(<ContainerInterface> container = null)
    {
        let this->container = container;
    }

    /**
     * Solve and/or returns an MiddlewareInterface
     *
     * @param MiddlewareInterface|string|array|object middleware Middleware
     * @return MiddlewareInterface MiddlewareInterface
     */
    public function solve(middleware) -> <MiddlewareInterface>
    {
        if (is_string(middleware)) {
            if (this->container && this->container->has(middleware)) {
                let middleware = this->container->get(middleware);
            } else{
                let middleware = (new \ReflectionClass(middleware))->newInstanceArgs();
            }
        } elseif (is_array(middleware)) {
            let middleware = (new \ReflectionClass(middleware[0]))
                ->newInstanceArgs(middleware[1]);
        }

        //var_dump((new \ReflectionClass(middleware))->hasMethod("handle"));

        if !(middleware instanceOf MiddlewareInterface) {
            throw new MiddlewareException("Middleware is not a PSR 15 Middleware Interface");
        }

        if (this->container && this->requireContainer(middleware)) {
            middleware->setContainer(this->container);
        }

        return middleware;
    }

    /**
     * Check if the middleware implements InjectContainerInterface
     *
     * @param MiddlewareInterface middleware Middleware
     * @return bool Use InjectContainerInterface
     */
    private function requireContainer(<MiddlewareInterface> middleware) -> bool
    {
        var reflexClass, recursiveInterfaces;

        let reflexClass = new \ReflectionClass(middleware);

        let recursiveInterfaces = function(<\ReflectionClass> reflexClass) {
            if (
                //in_array("Dsp\TornadoHttp\Container\ContainerTrait", reflexClass->getTraitNames()) ||
                in_array("Dsp\\TornadoHttp\\Container\\InjectContainerInterface", reflexClass->getInterfaceNames())
            ) {
                return true;
            }

            if (reflexClass->getParentClass() !== false) {
                return {this}(reflexClass->getParentClass());
            }

            return false;
        };

        return {recursiveInterfaces}(reflexClass);
    }
}
