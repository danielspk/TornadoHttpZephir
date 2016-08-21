/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Resolver;

use Interop\Container\ContainerInterface;

/**
 * Dsp\TornadoHttp\Resolver\ResolverInterface
 *
 * Middleware Resolver Interface
 */
interface ResolverInterface
{
    /**
     * Resolve middleware
     *
     * @param callable|string|array|object middleware Middleware
     * @return callable Callable
     */
    public function solve(middleware) -> callable;
}
