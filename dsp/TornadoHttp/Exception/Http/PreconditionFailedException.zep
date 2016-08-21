/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\PreconditionFailedException
 *
 * 412 Precondition Failed Exception
 */
class PreconditionFailedException extends ClientErrorException
{
    protected message = "Precondition Failed";
    protected code = 412;
}
