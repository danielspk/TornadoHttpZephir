/*
 * Tornado Http Middleware Handler PSR-15
 */

namespace Dsp\TornadoHttp\Middleware;

use Dsp\TornadoHttp\Container\InjectContainerInterface;
use Interop\Container\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
//use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

/**
 * Dsp\TornadoHttp\Middleware\Middleware
 *
 * Middleware abstract class
 */
abstract class Middleware implements /*MiddlewareInterface,*/ InjectContainerInterface
{
    /**
     * @var ContainerInterface Service Container
     */
    protected container;

    /**
     * Set the Service Container
     *
     * @param ContainerInterface container Service Container
     */
    public function setContainer(<ContainerInterface> container) -> void
    {
        let this->container = container;
    }

    /**
     * Get the Service Container
     *
     * @return ContainerInterface Service Container
     */
    public function getContainer() -> <ContainerInterface>
    {
        return this->container;
    }

    /**
     * Process
     *
     * @param ServerRequestInterface request Request
     * @param RequestHandlerInterface handler Middleware handlers
     * @return ResponseInterface
     */
    public function process(<ServerRequestInterface> request, <RequestHandlerInterface> handler) -> <ResponseInterface>
    {
        return handler->handle(request);
    }
}
