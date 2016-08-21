/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\MethodNotAllowedException
 *
 * 405 Method Not Allowed Exception
 */
class MethodNotAllowedException extends ClientErrorException
{
    protected message = "Method Not Allowed";
    protected code = 405;
}
