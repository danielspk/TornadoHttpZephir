/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Middleware;

use Interop\Container\ContainerInterface;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

/**
 * Dsp\TornadoHttp\Middleware\MiddlewareInterface
 *
 * Middleware Interface
 */
interface MiddlewareInterface
{
    /**
     * Invocation
     *
     * @param RequestInterface request Request
     * @param ResponseInterface response Response
     * @param callable next Next middleware
     * @return callable Callable middleware
     */
    public function __invoke(<RequestInterface> request, <ResponseInterface> response, callable next) -> callable;
}
