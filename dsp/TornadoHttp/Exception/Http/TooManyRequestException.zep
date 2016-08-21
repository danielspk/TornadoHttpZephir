/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\TooManyRequestException
 *
 * 429 Too Many Request Exception
 */
class TooManyRequestException extends ClientErrorException
{
    protected message = "Too Many Request";
    protected code = 429;
}
