/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp;

use Psr\Http\Message\ResponseInterface;
use Zend\Diactoros\Response;
use Zend\Diactoros\ServerRequestFactory;

/**
 * Dsp\TornadoHttp\Application
 *
 * Tornado Http Global Application
 */
final class Application
{
    /**
     * Invoke from global request
     *
     * @param TornadoHttp TornadoHttp Middleware Queue
     * @return ResponseInterface Response
     */
    public static function invoke(<TornadoHttp> tornadoHttp) -> <ResponseInterface>
    {
        var request, response;
        string requestFactory = "\\Zend\\Diactoros\\ServerRequestFactory";

        let request = {requestFactory}::fromGlobals();
        let response = new Response();

        return {tornadoHttp}(request, response);
    }
}
