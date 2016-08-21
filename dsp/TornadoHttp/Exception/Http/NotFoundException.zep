/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\NotFoundException
 *
 * 404 Not Found Exception
 */
class NotFoundException extends ClientErrorException
{
    protected message = "Not Found";
    protected code = 404;
}
