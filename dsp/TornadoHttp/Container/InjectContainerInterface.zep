/*
 * Tornado Http Middleware Handler PSR-15
 */

namespace Dsp\TornadoHttp\Container;

use Interop\Container\ContainerInterface;

/**
 * Dsp\TornadoHttp\Container\InjectContainerInterface
 *
 * Interface to register Service Container
 */
interface InjectContainerInterface
{
    /**
     * Set Service Container
     *
     * @param ContainerInterface container Service Container
     */
    public function setContainer(<ContainerInterface> container) -> void;

    /**
     * Get Service Container
     *
     * @return ContainerInterface Service Container
     */
     public function getContainer() -> <ContainerInterface>;
}
