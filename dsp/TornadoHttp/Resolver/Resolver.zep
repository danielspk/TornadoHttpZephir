/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Resolver;

use Dsp\TornadoHttp\Exception\MiddlewareException;
use Interop\Container\ContainerInterface;

/**
 * Dsp\TornadoHttp\Resolver\Resolver
 *
 * Middleware Resolver
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
     * Resolve middleware
     *
     * @param callable|string|array|object middleware Middleware
     * @return callable Callable
     */
    public function solve(middleware) -> callable
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

        if (!is_callable(middleware)) {
            throw new MiddlewareException("Middleware is not callable");
        }

        if (this->container && this->requireContainer(middleware)) {
            middleware->setContainer(this->container);
        }

        return middleware;
    }

    /**
     * Check if the middleware implements InyectInterface
     *
     * @param callable middleware Middleware
     * @return bool Use InyectInterface
     */
    private function requireContainer(callable middleware) -> bool
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
