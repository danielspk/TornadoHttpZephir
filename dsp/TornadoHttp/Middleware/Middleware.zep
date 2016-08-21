/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Middleware;

use Dsp\TornadoHttp\Container\InjectContainerInterface;
use Interop\Container\ContainerInterface;

/**
 * Dsp\TornadoHttp\Middleware\Middleware
 *
 * Middleware
 */
abstract class Middleware implements MiddlewareInterface, InjectContainerInterface
{
    /**
     * @var ContainerInterface Service Container
     */
    protected container;

    /**
     * Get Service Container
     *
     * @return ContainerInterface Service Container
     */
    public function getContainer() -> <ContainerInterface>
    {
        return this->container;
    }

    /**
     * Set Service Container
     *
     * @param ContainerInterface container Service Container
     */
    public function setContainer(<ContainerInterface> container) -> void
    {
        let this->container = container;
    }
}
