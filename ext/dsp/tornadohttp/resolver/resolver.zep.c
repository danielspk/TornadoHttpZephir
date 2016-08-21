
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
#include "kernel/fcall.h"
#include "kernel/array.h"
#include "kernel/exception.h"


/**
 * Dsp\TornadoHttp\Resolver\Resolver
 *
 * Middleware Resolver
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Resolver_Resolver) {

	ZEPHIR_REGISTER_CLASS(Dsp\\TornadoHttp\\Resolver, Resolver, dsp, tornadohttp_resolver_resolver, dsp_tornadohttp_resolver_resolver_method_entry, 0);

	/**
	 * @var ContainerInterface Service Container
	 */
	zend_declare_property_null(dsp_tornadohttp_resolver_resolver_ce, SL("container"), ZEND_ACC_PRIVATE TSRMLS_CC);

	zend_class_implements(dsp_tornadohttp_resolver_resolver_ce TSRMLS_CC, 1, dsp_tornadohttp_resolver_resolverinterface_ce);
	return SUCCESS;

}

/**
 * Constructor
 *
 * @param ContainerInterface container Service Container
 */
PHP_METHOD(Dsp_TornadoHttp_Resolver_Resolver, __constructor) {

	zval *container = NULL, container_sub, __$null;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&container_sub);
	ZVAL_NULL(&__$null);

	zephir_fetch_params(0, 0, 1, &container);

	if (!container) {
		container = &container_sub;
		container = &__$null;
	}


	zephir_update_property_zval(this_ptr, SL("container"), container);

}

/**
 * Resolve middleware
 *
 * @param callable|string|array|object middleware Middleware
 * @return callable Callable
 */
PHP_METHOD(Dsp_TornadoHttp_Resolver_Resolver, solve) {

	zend_class_entry *_7$$5;
	zend_bool _1$$3, _12;
	int ZEPHIR_LAST_CALL_STATUS;
	zval *middleware = NULL, middleware_sub, _0$$3, _2$$3, _3$$3, _4$$4, _5$$4, _6$$5, _8$$6, _9$$6, _10$$6, _11, _13, _14$$8;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&middleware_sub);
	ZVAL_UNDEF(&_0$$3);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_3$$3);
	ZVAL_UNDEF(&_4$$4);
	ZVAL_UNDEF(&_5$$4);
	ZVAL_UNDEF(&_6$$5);
	ZVAL_UNDEF(&_8$$6);
	ZVAL_UNDEF(&_9$$6);
	ZVAL_UNDEF(&_10$$6);
	ZVAL_UNDEF(&_11);
	ZVAL_UNDEF(&_13);
	ZVAL_UNDEF(&_14$$8);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &middleware);

	ZEPHIR_SEPARATE_PARAM(middleware);


	if (Z_TYPE_P(middleware) == IS_STRING) {
		zephir_read_property(&_0$$3, this_ptr, SL("container"), PH_NOISY_CC | PH_READONLY);
		_1$$3 = zephir_is_true(&_0$$3);
		if (_1$$3) {
			zephir_read_property(&_2$$3, this_ptr, SL("container"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_METHOD(&_3$$3, &_2$$3, "has", NULL, 0, middleware);
			zephir_check_call_status();
			_1$$3 = zephir_is_true(&_3$$3);
		}
		if (_1$$3) {
			zephir_read_property(&_4$$4, this_ptr, SL("container"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_METHOD(&_5$$4, &_4$$4, "get", NULL, 0, middleware);
			zephir_check_call_status();
			ZEPHIR_CPY_WRT(middleware, &_5$$4);
		} else {
			ZEPHIR_INIT_NVAR(middleware);
			zephir_fetch_safe_class(&_6$$5, middleware);
			_7$$5 = zephir_fetch_class_str_ex(Z_STRVAL_P(&_6$$5), Z_STRLEN_P(&_6$$5), ZEND_FETCH_CLASS_AUTO);
			object_init_ex(middleware, _7$$5);
			if (zephir_has_constructor(middleware TSRMLS_CC)) {
				ZEPHIR_CALL_METHOD(NULL, middleware, "__construct", NULL, 0);
				zephir_check_call_status();
			}
		}
	} else if (Z_TYPE_P(middleware) == IS_ARRAY) {
		ZEPHIR_INIT_VAR(&_8$$6);
		object_init_ex(&_8$$6, zephir_get_internal_ce(SL("reflectionclass")));
		zephir_array_fetch_long(&_9$$6, middleware, 0, PH_NOISY | PH_READONLY, "dsp/TornadoHttp/Resolver/Resolver.zep", 47 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(NULL, &_8$$6, "__construct", NULL, 1, &_9$$6);
		zephir_check_call_status();
		zephir_array_fetch_long(&_10$$6, middleware, 1, PH_NOISY | PH_READONLY, "dsp/TornadoHttp/Resolver/Resolver.zep", 48 TSRMLS_CC);
		ZEPHIR_CALL_METHOD(middleware, &_8$$6, "newinstanceargs", NULL, 2, &_10$$6);
		zephir_check_call_status();
	}
	if (!(zephir_is_callable(middleware TSRMLS_CC))) {
		ZEPHIR_THROW_EXCEPTION_DEBUG_STR(dsp_tornadohttp_exception_middlewareexception_ce, "Middleware is not callable", "dsp/TornadoHttp/Resolver/Resolver.zep", 52);
		return;
	}
	zephir_read_property(&_11, this_ptr, SL("container"), PH_NOISY_CC | PH_READONLY);
	_12 = zephir_is_true(&_11);
	if (_12) {
		ZEPHIR_CALL_METHOD(&_13, this_ptr, "requirecontainer", NULL, 3, middleware);
		zephir_check_call_status();
		_12 = zephir_is_true(&_13);
	}
	if (_12) {
		zephir_read_property(&_14$$8, this_ptr, SL("container"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_METHOD(NULL, middleware, "setcontainer", NULL, 0, &_14$$8);
		zephir_check_call_status();
	}
	RETVAL_ZVAL(middleware, 1, 0);
	RETURN_MM();

}

/**
 * Check if the middleware implements InyectInterface
 *
 * @param callable middleware Middleware
 * @return bool Use InyectInterface
 */
PHP_METHOD(Dsp_TornadoHttp_Resolver_Resolver, requireContainer) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *middleware, middleware_sub, reflexClass, recursiveInterfaces;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&middleware_sub);
	ZVAL_UNDEF(&reflexClass);
	ZVAL_UNDEF(&recursiveInterfaces);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &middleware);



	ZEPHIR_INIT_VAR(&reflexClass);
	object_init_ex(&reflexClass, zephir_get_internal_ce(SL("reflectionclass")));
	ZEPHIR_CALL_METHOD(NULL, &reflexClass, "__construct", NULL, 1, middleware);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&recursiveInterfaces);
	zephir_create_closure_ex(&recursiveInterfaces, NULL, dsp_0__closure_ce, SL("__invoke"));
	ZEPHIR_RETURN_CALL_ZVAL_FUNCTION(&recursiveInterfaces, NULL, 0, &reflexClass);
	zephir_check_call_status();
	RETURN_MM();

}

