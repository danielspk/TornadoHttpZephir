/*
 * Tornado Http Middleware Queue
 */

namespace Dsp\TornadoHttp\Exception\Http;

/**
 * Dsp\TornadoHttp\Exception\Http\PaymentRequiredException
 *
 * 402 Payment Required Exception
 */
class PaymentRequiredException extends ClientErrorException
{
    protected message = "Payment Required";
    protected code = 402;
}
