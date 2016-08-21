/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\BadGatewayException
 *
 * 502 Bad Gateway Exception
 */
class BadGatewayException extends InternalServerErrorException
{
    protected message = "Bad Gateway";
    protected code = 502;
}
