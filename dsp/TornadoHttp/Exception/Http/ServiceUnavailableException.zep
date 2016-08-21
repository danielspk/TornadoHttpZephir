/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\ServiceUnavailableException
 *
 * 503 Service Unavailable Exception
 */
class ServiceUnavailableException extends InternalServerErrorException
{
    protected message = "Service Unavailable";
    protected code = 503;
}
