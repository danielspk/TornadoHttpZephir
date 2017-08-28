/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp;

use Dsp\TornadoHttp\Resolver\Resolver;
use Dsp\TornadoHttp\Resolver\ResolverInterface;
use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

/**
 * Dsp\TornadoHttp\TornadoHttp
 *
 * Middleware Queue
 */
final class TornadoHttp
{
    /**
     * Version
     */
    const VERSION = "0.1.0";

    /**
     * @var \SplQueue Middleware queue
     */
    private middlewares;

    /**
     * @var ContainerInterface Service Container
     */
    private container;

    /**
     * @var ResolverInterface Middleware Resolver
     */
    private resolver;

    /**
     * @var string Environment
     */
    private environment;

    /**
     * Constructor
     *
     * @param array middlewares Middlewares
     * @param ContainerInterface container Service Container
     * @param ResolverInterface resolver Middleware Resolver
     * @param string environment Environment
     */
    public function __construct(
        array middlewares = [],
        <ContainerInterface> container = null,
        <ResolverInterface> resolver = null,
        string environment = "dev"
    )
    {
        let this->middlewares = new \SplQueue();
        let this->container = container;
        let this->resolver = resolver;
        let this->environment = environment;

        this->addList(middlewares);
    }

    /**
     * Invocation
     *
     * @param RequestInterface request Request
     * @param ResponseInterface response Response
     * @return ResponseInterface Response
     */
    public function __invoke(
        <RequestInterface> request,
        <ResponseInterface> response
    ) -> <ResponseInterface>
    {
        var next;

        if (!this->middlewares->isEmpty()) {
            var mdw = this->middlewares->dequeue();

            if (
                (
                    isset(mdw["methods"]) &&
                    !in_array(request->getMethod(), mdw["methods"])
                ) ||
                (
                    isset(mdw["path"]) &&
                    preg_match(mdw["path"], request->getUri()->getPath()) !== 1
                ) ||
                (
                    isset(mdw["env"]) &&
                    !in_array(this->environment, mdw["env"])
                )
            ) {
                let next = this->emptyNext();
            } else {
                let next = this->resolveMiddleware(mdw["middleware"]);
            }
        } else {
            let next = this->finishNext();
        }

        return {next}(request, response, this);
    }

    /**
     * Register one middleware
     *
     * @param callable|object|string|array middleware Middleware
     * @param string path Path
     * @param array methods Methods allowed
     * @param array environments Environment allowed
     * @param integer index Index of the queue
     */
    public function add(
        middleware,
        string! path = null,
        array methods = null,
        array environments = null,
        int! index = -1
    ) -> void
    {
        array mdw = [
            "middleware": middleware,
            "path"      : path,
            "methods"   : methods,
            "env"       : environments
        ];

        if (index !== -1 && this->middlewares->offsetExists(index)) {
            this->middlewares->add(index, mdw);
        } else {
            this->middlewares->enqueue(mdw);
        }
    }

    /**
     * Register middleware from an array
     *
     * @param array middlewares Middlewares
     */
    public function addList(array middlewares) -> void
    {
        var middleware;

        for middleware in middlewares {
            this->middlewares->enqueue(middleware);
        }
    }

    /**
     * Return the current index of the middlewares queue
     *
     * @return integer
     */
    public function getMiddlewareIndex()-> int
    {
        return this->middlewares->key();
    }

    /**
     * Set the Service Container
     *
     * @param ContainerInterface container Service Container
     */
    public function setDI(<ContainerInterface> container) -> void
    {
        let this->container = container;
    }

    /**
     * Get the Service Container
     *
     * @return ContainerInterface Service Container
     */
    public function getDI() -> <ContainerInterface>
    {
        return this->container;
    }

    /**
     * Set the Middleware Resolver
     *
     * @param ResolverInterface resolver Middleware Resolver
     */
    public function setResolver(<ResolverInterface> resolver) -> void
    {
        let this->resolver = resolver;
    }

    /**
     * Set the Environment execution
     *
     * @param string environment Environment
     */
    public function setEnvironment(string environment) -> void
    {
        let this->environment = environment;
    }

    /**
     * Solve and/or returns an callable or instance class
     *
     * @param callable|string|array|object middleware Middleware
     * @return callable|object Callable or Instance Class
     */
    private function resolveMiddleware(middleware) -> callable | object
    {
        if (!this->resolver) {
            let this->resolver = new Resolver(this->container);
        }

        return this->resolver->solve(middleware);
    }

    /**
     * Return an empty callable
     *
     * @return callable Empty callable
     */
    private function emptyNext() -> callable
    {
        return function(
            <RequestInterface> request,
            <ResponseInterface> response,
            callable next
        ) {
            return next(request, response);
        };
    }

    /**
     * Return an finish callable
     *
     * @return callable Finish callable
     */
    private function finishNext() -> callable
    {
        return function(
            <RequestInterface> request,
            <ResponseInterface> response,
            callable next
        ) {
            return response;
        };
    }
}
