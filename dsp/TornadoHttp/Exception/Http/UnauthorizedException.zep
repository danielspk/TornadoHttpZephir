/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\UnauthorizedException
 *
 * 401 Unauthorized Exception
 */
class UnauthorizedException extends ClientErrorException
{
    protected message = "Unauthorized";
    protected code = 401;
}
