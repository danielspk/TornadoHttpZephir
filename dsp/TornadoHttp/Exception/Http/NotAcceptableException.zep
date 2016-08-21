/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\NotAcceptableException
 *
 * 406 Not Acceptable Exception
 */
class NotAcceptableException extends ClientErrorException
{
    protected message = "Not Acceptable";
    protected code = 406;
}
