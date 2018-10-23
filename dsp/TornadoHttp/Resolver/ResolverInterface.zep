/*
 * Tornado Http Middleware Handler PSR-15
 */

namespace Dsp\TornadoHttp\Resolver;

use Interop\Container\ContainerInterface;
use Psr\Http\Server\MiddlewareInterface;

/**
 * Dsp\TornadoHttp\Resolver\ResolverInterface
 *
 * Middleware Resolver interface
 */
interface ResolverInterface
{
    /**
     * Solve and/or returns an MiddlewareInterface
     *
     * @param MiddlewareInterface|string|array|object middleware Middleware
     * @return MiddlewareInterface MiddlewareInterface
     */
    public function solve(middleware) -> <MiddlewareInterface>;
}
