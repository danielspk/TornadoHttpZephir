/*
 * Tornado Http Middleware Handler PSR-15
 */

namespace Dsp\TornadoHttp;

use Dsp\TornadoHttp\Exception\MiddlewareException;
use Dsp\TornadoHttp\Resolver\Resolver;
use Dsp\TornadoHttp\Resolver\ResolverInterface;
use Interop\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

/**
 * Dsp\TornadoHttp\TornadoHttp
 * @todo: falta setter con retun this
 * Main class
 */
final class TornadoHttp
{
    /**
     * Version
     */
    const VERSION = "0.3.0";

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
     * @var ResponseInterface Current Response
     */
    private response;

    /**
     * @var mixed Handler Context
     */
    private context;
    
    /**
     * Constructor
     *
     * @param array middlewares Middlewares
     * @param ResponseInterface response Response
     * @param ContainerInterface container Service Container
     * @param ResolverInterface resolver Middleware Resolver
     * @param string environment Environment
     */
    public function __construct(
        array middlewares = [],
        <ResponseInterface> $response = null,
        <ContainerInterface> container = null,
        <ResolverInterface> resolver = null,
        string environment = "dev"
    )
    {
        let this->middlewares = new \SplQueue();
        let this->response = response;
        let this->container = container;
        let this->resolver = resolver;
        let this->environment = environment;

        this->addList(middlewares);
    }

    /**
     * Handle
     *
     * @param ServerRequestInterface request Request
     * @return ResponseInterface Response
     */
    public function handle(<ServerRequestInterface> request) -> <ResponseInterface>
    {
        var next;

        if (!this->middlewares->isEmpty()) {
            var mdw = this->middlewares->dequeue();

            if (
                (
                    isset(mdw["methods"]) &&
                    mdw["methods"] !== null &&
                    !in_array(request->getMethod(), mdw["methods"])
                ) ||
                (
                    isset(mdw["path"]) &&
                    !empty(mdw["path"]) &&
                    preg_match(mdw["path"], request->getUri()->getPath()) !== 1
                ) ||
                (
                    isset(mdw["env"]) &&
                    mdw["env"] !== null &&
                    !in_array(this->environment, mdw["env"])
                )
            ) {
                return this->handle(request);
            }

            let next = this->resolveMiddleware(mdw["middleware"]);

            let this->response = next->process(request, this);

            return this->reponse;
        }

        if (this->response === null) {
            throw new MiddlewareException('Empty response');
        }

        return this->response;
    }

    /**
     * Register one middleware
     *
     * @param mixed middleware Middleware
     * @param string path Path
     * @param array methods Methods allowed
     * @param array environments Environment allowed
     * @param integer index Index of the queue
     */
    public function add(
        middleware,
        string! path = null,
        array! methods = null,
        array! environments = null,
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
     * Set the default Response
     *
     * @param ResponseInterface response Response
     */
    public function setResponse(<ResponseInterface> response) -> void
    {
        let this->response = response;
    }

    /**
     * Get the last Response
     * @todo: puede responder null!
     * @return ResponseInterface Response
     */
    public function getResponse() -> <ResponseInterface>
    {
        return this->response;
    }

    //@todo: faltan getter and setters de context

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
     * @param mixed middleware Middleware
     * @return MiddlewareInterface Middleware
     */
    private function resolveMiddleware(middleware) -> <MiddlewareInterface>
    {
        if (!this->resolver) {
            let this->resolver = new Resolver(this->container);
        }

        return this->resolver->solve(middleware);
    }
}
