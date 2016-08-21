/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Container;

use Interop\Container\ContainerInterface;

/**
 * Dsp\TornadoHttp\Container\InjectContainerInterface
 *
 * Inyect Service Container in Middleware
 */
interface InjectContainerInterface
{
    /**
     * Get Service Container
     *
     * @return ContainerInterface Service Container
     */
    public function getContainer() -> <ContainerInterface>;

    /**
     * Set Service Container
     *
     * @param ContainerInterface container Service Container
     */
    public function setContainer(<ContainerInterface> container) -> void;
}
