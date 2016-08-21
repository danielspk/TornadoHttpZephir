
#ifdef HAVE_CONFIG_H
#include "../../../ext_config.h"
#endif

#include <php.h>
#include "../../../php_ext.h"
#include "../../../ext.h"

#include <Zend/zend_exceptions.h>

#include "kernel/main.h"


/**
 * Dsp\TornadoHttp\Resolver\ResolverInterface
 *
 * Middleware Resolver Interface
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Resolver_ResolverInterface) {

	ZEPHIR_REGISTER_INTERFACE(Dsp\\TornadoHttp\\Resolver, ResolverInterface, dsp, tornadohttp_resolver_resolverinterface, dsp_tornadohttp_resolver_resolverinterface_method_entry);

	return SUCCESS;

}

/**
 * Resolve middleware
 *
 * @param callable|string|array|object middleware Middleware
 * @return callable Callable
 */
ZEPHIR_DOC_METHOD(Dsp_TornadoHttp_Resolver_ResolverInterface, solve);

