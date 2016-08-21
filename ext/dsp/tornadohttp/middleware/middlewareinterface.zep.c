
#ifdef HAVE_CONFIG_H
#include "../../../ext_config.h"
#endif

#include <php.h>
#include "../../../php_ext.h"
#include "../../../ext.h"

#include <Zend/zend_exceptions.h>

#include "kernel/main.h"


/**
 * Dsp\TornadoHttp\Middleware\MiddlewareInterface
 *
 * Middleware Interface
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Middleware_MiddlewareInterface) {

	ZEPHIR_REGISTER_INTERFACE(Dsp\\TornadoHttp\\Middleware, MiddlewareInterface, dsp, tornadohttp_middleware_middlewareinterface, dsp_tornadohttp_middleware_middlewareinterface_method_entry);

	return SUCCESS;

}

/**
 * Invocation
 *
 * @param RequestInterface request Request
 * @param ResponseInterface response Response
 * @param callable next Next middleware
 * @return callable Callable middleware
 */
ZEPHIR_DOC_METHOD(Dsp_TornadoHttp_Middleware_MiddlewareInterface, __invoke);

