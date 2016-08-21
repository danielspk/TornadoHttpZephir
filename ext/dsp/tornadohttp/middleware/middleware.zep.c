
#ifdef HAVE_CONFIG_H
#include "../../../ext_config.h"
#endif

#include <php.h>
#include "../../../php_ext.h"
#include "../../../ext.h"

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/main.h"
#include "kernel/object.h"
#include "kernel/memory.h"


/**
 * Dsp\TornadoHttp\Middleware\Middleware
 *
 * Middleware
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Middleware_Middleware) {

	ZEPHIR_REGISTER_CLASS(Dsp\\TornadoHttp\\Middleware, Middleware, dsp, tornadohttp_middleware_middleware, dsp_tornadohttp_middleware_middleware_method_entry, ZEND_ACC_EXPLICIT_ABSTRACT_CLASS);

	/**
	 * @var ContainerInterface Service Container
	 */
	zend_declare_property_null(dsp_tornadohttp_middleware_middleware_ce, SL("container"), ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_class_implements(dsp_tornadohttp_middleware_middleware_ce TSRMLS_CC, 1, dsp_tornadohttp_middleware_middlewareinterface_ce);
	zend_class_implements(dsp_tornadohttp_middleware_middleware_ce TSRMLS_CC, 1, dsp_tornadohttp_container_injectcontainerinterface_ce);
	return SUCCESS;

}

/**
 * Get Service Container
 *
 * @return ContainerInterface Service Container
 */
PHP_METHOD(Dsp_TornadoHttp_Middleware_Middleware, getContainer) {

	ZEPHIR_INIT_THIS();


	RETURN_MEMBER(this_ptr, "container");

}

/**
 * Set Service Container
 *
 * @param ContainerInterface container Service Container
 */
PHP_METHOD(Dsp_TornadoHttp_Middleware_Middleware, setContainer) {

	zval *container, container_sub;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&container_sub);

	zephir_fetch_params(0, 1, 0, &container);



	zephir_update_property_zval(this_ptr, SL("container"), container);

}

