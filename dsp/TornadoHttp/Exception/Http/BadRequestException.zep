/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\BadRequestException
 *
 * 400 Bad Request Exception
 */
class BadRequestException extends ClientErrorException
{
    protected message = "Bad Request";
    protected code = 400;
}
