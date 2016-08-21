/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\ConflictException
 *
 * 409 Conflict Exception
 */
class ConflictException extends ClientErrorException
{
    protected message = "Conflict";
    protected code = 409;
}
