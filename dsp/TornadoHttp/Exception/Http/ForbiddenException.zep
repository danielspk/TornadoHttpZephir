/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\ForbiddenException
 *
 * 403 Forbidden Exception
 */
class ForbiddenException extends ClientErrorException
{
    protected message = "Forbidden";
    protected code = 403;
}
