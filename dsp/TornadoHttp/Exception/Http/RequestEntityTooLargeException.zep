/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\RequestEntityTooLargeException
 *
 * 413 Request Entity Too Large Exception
 */
class RequestEntityTooLargeException extends ClientErrorException
{
    protected message = "Request Entity Too Large";
    protected code = 413;
}
