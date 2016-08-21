
#ifdef HAVE_CONFIG_H
#include "../../ext_config.h"
#endif

#include <php.h>
#include "../../php_ext.h"
#include "../../ext.h"

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/main.h"
#include "kernel/memory.h"
#include "ext/spl/spl_dllist.h"
#include "kernel/fcall.h"
#include "kernel/object.h"
#include "kernel/operators.h"
#include "kernel/array.h"
#include "kernel/string.h"
#include "ext/spl/spl_exceptions.h"
#include "kernel/exception.h"
#include "kernel/hash.h"


/**
 * Dsp\TornadoHttp\TornadoHttp
 *
 * Middleware Queue
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_TornadoHttp) {

	ZEPHIR_REGISTER_CLASS(Dsp\\TornadoHttp, TornadoHttp, dsp, tornadohttp_tornadohttp, dsp_tornadohttp_tornadohttp_method_entry, ZEND_ACC_FINAL_CLASS);

	/**
	 * @var \SplQueue Middleware queue
	 */
	zend_declare_property_null(dsp_tornadohttp_tornadohttp_ce, SL("middlewares"), ZEND_ACC_PRIVATE TSRMLS_CC);

	/**
	 * @var ContainerInterface Service Container
	 */
	zend_declare_property_null(dsp_tornadohttp_tornadohttp_ce, SL("container"), ZEND_ACC_PRIVATE TSRMLS_CC);

	/**
	 * @var ResolverInterface Middleware Resolver
	 */
	zend_declare_property_null(dsp_tornadohttp_tornadohttp_ce, SL("resolver"), ZEND_ACC_PRIVATE TSRMLS_CC);

	/**
	 * @var string Environment
	 */
	zend_declare_property_null(dsp_tornadohttp_tornadohttp_ce, SL("environment"), ZEND_ACC_PRIVATE TSRMLS_CC);

	/**
	 * Version
	 */
	zephir_declare_class_constant_string(dsp_tornadohttp_tornadohttp_ce, SL("VERSION"), "0.1.0");

	return SUCCESS;

}

/**
 * Constructor
 *
 * @param array middlewares Middlewares
 * @param ContainerInterface container Service Container
 * @param ResolverInterface resolver Middleware Resolver
 * @param string environment Environment
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, __construct) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval environment;
	zval *middlewares_param = NULL, *container = NULL, container_sub, *resolver = NULL, resolver_sub, *environment_param = NULL, __$null, _0;
	zval middlewares;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&middlewares);
	ZVAL_UNDEF(&container_sub);
	ZVAL_UNDEF(&resolver_sub);
	ZVAL_NULL(&__$null);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&environment);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 0, 4, &middlewares_param, &container, &resolver, &environment_param);

	if (!middlewares_param) {
		ZEPHIR_INIT_VAR(&middlewares);
		array_init(&middlewares);
	} else {
		zephir_get_arrval(&middlewares, middlewares_param);
	}
	if (!container) {
		container = &container_sub;
		container = &__$null;
	}
	if (!resolver) {
		resolver = &resolver_sub;
		resolver = &__$null;
	}
	if (!environment_param) {
		ZEPHIR_INIT_VAR(&environment);
		ZVAL_STRING(&environment, "dev");
	} else {
		zephir_get_strval(&environment, environment_param);
	}


	ZEPHIR_INIT_VAR(&_0);
	object_init_ex(&_0, spl_ce_SplQueue);
	if (zephir_has_constructor(&_0 TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(NULL, &_0, "__construct", NULL, 0);
		zephir_check_call_status();
	}
	zephir_update_property_zval(this_ptr, SL("middlewares"), &_0);
	zephir_update_property_zval(this_ptr, SL("container"), container);
	zephir_update_property_zval(this_ptr, SL("resolver"), resolver);
	zephir_update_property_zval(this_ptr, SL("environment"), &environment);
	ZEPHIR_CALL_METHOD(NULL, this_ptr, "addlist", NULL, 4, &middlewares);
	zephir_check_call_status();
	ZEPHIR_MM_RESTORE();

}

/**
 * Invocation
 *
 * @param RequestInterface request Request
 * @param ResponseInterface response Response
 * @return ResponseInterface Response
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, __invoke) {

	zend_bool _3$$3, _6$$3, _7$$3, _13$$3, _14$$3;
	int ZEPHIR_LAST_CALL_STATUS;
	zval *request, request_sub, *response, response_sub, next, _0, _1, mdw$$3, _2$$3, _4$$3, _5$$3, _8$$3, _9$$3, _10$$3, _11$$3, _12$$3, _15$$3, _16$$3, _17$$5;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&request_sub);
	ZVAL_UNDEF(&response_sub);
	ZVAL_UNDEF(&next);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&mdw$$3);
	ZVAL_UNDEF(&_2$$3);
	ZVAL_UNDEF(&_4$$3);
	ZVAL_UNDEF(&_5$$3);
	ZVAL_UNDEF(&_8$$3);
	ZVAL_UNDEF(&_9$$3);
	ZVAL_UNDEF(&_10$$3);
	ZVAL_UNDEF(&_11$$3);
	ZVAL_UNDEF(&_12$$3);
	ZVAL_UNDEF(&_15$$3);
	ZVAL_UNDEF(&_16$$3);
	ZVAL_UNDEF(&_17$$5);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 2, 0, &request, &response);



	zephir_read_property(&_0, this_ptr, SL("middlewares"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_CALL_METHOD(&_1, &_0, "isempty", NULL, 0);
	zephir_check_call_status();
	if (!zephir_is_true(&_1)) {
		zephir_read_property(&_2$$3, this_ptr, SL("middlewares"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_METHOD(&mdw$$3, &_2$$3, "dequeue", NULL, 0);
		zephir_check_call_status();
		_3$$3 = zephir_array_isset_string(&mdw$$3, SL("methods"));
		if (_3$$3) {
			ZEPHIR_CALL_METHOD(&_4$$3, request, "getmethod", NULL, 0);
			zephir_check_call_status();
			zephir_array_fetch_string(&_5$$3, &mdw$$3, SL("methods"), PH_NOISY | PH_READONLY, "dsp/TornadoHttp/TornadoHttp.zep", 88 TSRMLS_CC);
			_3$$3 = !(zephir_fast_in_array(&_4$$3, &_5$$3 TSRMLS_CC));
		}
		_6$$3 = _3$$3;
		if (!(_6$$3)) {
			_7$$3 = zephir_array_isset_string(&mdw$$3, SL("path"));
			if (_7$$3) {
				ZEPHIR_INIT_VAR(&_8$$3);
				ZEPHIR_INIT_VAR(&_9$$3);
				zephir_array_fetch_string(&_10$$3, &mdw$$3, SL("path"), PH_NOISY | PH_READONLY, "dsp/TornadoHttp/TornadoHttp.zep", 92 TSRMLS_CC);
				ZEPHIR_CALL_METHOD(&_11$$3, request, "geturi", NULL, 0);
				zephir_check_call_status();
				ZEPHIR_CALL_METHOD(&_12$$3, &_11$$3, "getpath", NULL, 0);
				zephir_check_call_status();
				zephir_preg_match(&_9$$3, &_10$$3, &_12$$3, &_8$$3, 0, 0 , 0  TSRMLS_CC);
				_7$$3 = !ZEPHIR_IS_LONG_IDENTICAL(&_9$$3, 1);
			}
			_6$$3 = _7$$3;
		}
		_13$$3 = _6$$3;
		if (!(_13$$3)) {
			_14$$3 = zephir_array_isset_string(&mdw$$3, SL("env"));
			if (_14$$3) {
				zephir_read_property(&_15$$3, this_ptr, SL("environment"), PH_NOISY_CC | PH_READONLY);
				zephir_array_fetch_string(&_16$$3, &mdw$$3, SL("env"), PH_NOISY | PH_READONLY, "dsp/TornadoHttp/TornadoHttp.zep", 96 TSRMLS_CC);
				_14$$3 = !(zephir_fast_in_array(&_15$$3, &_16$$3 TSRMLS_CC));
			}
			_13$$3 = _14$$3;
		}
		if (_13$$3) {
			ZEPHIR_CALL_METHOD(&next, this_ptr, "emptynext", NULL, 5);
			zephir_check_call_status();
		} else {
			zephir_array_fetch_string(&_17$$5, &mdw$$3, SL("middleware"), PH_NOISY | PH_READONLY, "dsp/TornadoHttp/TornadoHttp.zep", 101 TSRMLS_CC);
			ZEPHIR_CALL_METHOD(&next, this_ptr, "resolvemiddleware", NULL, 6, &_17$$5);
			zephir_check_call_status();
		}
	} else {
		ZEPHIR_CALL_METHOD(&next, this_ptr, "finishnext", NULL, 7);
		zephir_check_call_status();
	}
	ZEPHIR_RETURN_CALL_ZVAL_FUNCTION(&next, NULL, 0, request, response, this_ptr);
	zephir_check_call_status();
	RETURN_MM();

}

/**
 * Register one middleware
 *
 * @param callable|object|string|array middleware Middleware
 * @param string path Path
 * @param array methods Methods allowed
 * @param array environments Environment allowed
 * @param integer index Index of the queue
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, add) {

	zend_bool _0;
	int index, ZEPHIR_LAST_CALL_STATUS;
	zval methods, environments, mdw;
	zval path;
	zval *middleware, middleware_sub, *path_param = NULL, *methods_param = NULL, *environments_param = NULL, *index_param = NULL, _1, _2, _3, _4$$3, _5$$3, _6$$4;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&middleware_sub);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_4$$3);
	ZVAL_UNDEF(&_5$$3);
	ZVAL_UNDEF(&_6$$4);
	ZVAL_UNDEF(&path);
	ZVAL_UNDEF(&methods);
	ZVAL_UNDEF(&environments);
	ZVAL_UNDEF(&mdw);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 4, &middleware, &path_param, &methods_param, &environments_param, &index_param);

	if (!path_param) {
		ZEPHIR_INIT_VAR(&path);
		ZVAL_STRING(&path, "");
	} else {
	if (unlikely(Z_TYPE_P(path_param) != IS_STRING && Z_TYPE_P(path_param) != IS_NULL)) {
		zephir_throw_exception_string(spl_ce_InvalidArgumentException, SL("Parameter 'path' must be a string") TSRMLS_CC);
		RETURN_MM_NULL();
	}
	if (likely(Z_TYPE_P(path_param) == IS_STRING)) {
		zephir_get_strval(&path, path_param);
	} else {
		ZEPHIR_INIT_VAR(&path);
		ZVAL_EMPTY_STRING(&path);
	}
	}
	if (!methods_param) {
		ZEPHIR_INIT_VAR(&methods);
		array_init(&methods);
	} else {
		zephir_get_arrval(&methods, methods_param);
	}
	if (!environments_param) {
		ZEPHIR_INIT_VAR(&environments);
		array_init(&environments);
	} else {
		zephir_get_arrval(&environments, environments_param);
	}
	if (!index_param) {
		index = -1;
	} else {
	if (unlikely(Z_TYPE_P(index_param) != IS_LONG)) {
		zephir_throw_exception_string(spl_ce_InvalidArgumentException, SL("Parameter 'index' must be a int") TSRMLS_CC);
		RETURN_MM_NULL();
	}
	index = Z_LVAL_P(index_param);
	}


	ZEPHIR_INIT_VAR(&mdw);
	zephir_create_array(&mdw, 4, 0 TSRMLS_CC);
	zephir_array_update_string(&mdw, SL("middleware"), middleware, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&mdw, SL("path"), &path, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&mdw, SL("methods"), &methods, PH_COPY | PH_SEPARATE);
	zephir_array_update_string(&mdw, SL("env"), &environments, PH_COPY | PH_SEPARATE);
	_0 = index != -1;
	if (_0) {
		zephir_read_property(&_1, this_ptr, SL("middlewares"), PH_NOISY_CC | PH_READONLY);
		ZVAL_LONG(&_3, index);
		ZEPHIR_CALL_METHOD(&_2, &_1, "offsetexists", NULL, 0, &_3);
		zephir_check_call_status();
		_0 = zephir_is_true(&_2);
	}
	if (_0) {
		zephir_read_property(&_4$$3, this_ptr, SL("middlewares"), PH_NOISY_CC | PH_READONLY);
		ZVAL_LONG(&_5$$3, index);
		ZEPHIR_CALL_METHOD(NULL, &_4$$3, "add", NULL, 0, &_5$$3, &mdw);
		zephir_check_call_status();
	} else {
		zephir_read_property(&_6$$4, this_ptr, SL("middlewares"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_METHOD(NULL, &_6$$4, "enqueue", NULL, 0, &mdw);
		zephir_check_call_status();
	}
	ZEPHIR_MM_RESTORE();

}

/**
 * Register middleware from an array
 *
 * @param array middlewares Middlewares
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, addList) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *middlewares_param = NULL, middleware, *_0, _1$$3;
	zval middlewares;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&middlewares);
	ZVAL_UNDEF(&middleware);
	ZVAL_UNDEF(&_1$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &middlewares_param);

	zephir_get_arrval(&middlewares, middlewares_param);


	zephir_is_iterable(&middlewares, 0, "dsp/TornadoHttp/TornadoHttp.zep", 153);
	ZEND_HASH_FOREACH_VAL(Z_ARRVAL_P(&middlewares), _0)
	{
		ZEPHIR_INIT_NVAR(&middleware);
		ZVAL_COPY(&middleware, _0);
		zephir_read_property(&_1$$3, this_ptr, SL("middlewares"), PH_NOISY_CC | PH_READONLY);
		ZEPHIR_CALL_METHOD(NULL, &_1$$3, "enqueue", NULL, 0, &middleware);
		zephir_check_call_status();
	} ZEND_HASH_FOREACH_END();
	ZEPHIR_INIT_NVAR(&middleware);
	ZEPHIR_MM_RESTORE();

}

/**
 * Return the current index of the middlewares queue
 *
 * @return integer
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, getMiddlewareIndex) {

	zval _0;
	int ZEPHIR_LAST_CALL_STATUS;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&_0);

	ZEPHIR_MM_GROW();

	zephir_read_property(&_0, this_ptr, SL("middlewares"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_RETURN_CALL_METHOD(&_0, "key", NULL, 0);
	zephir_check_call_status();
	RETURN_MM();

}

/**
 * Set the Service Container
 *
 * @param ContainerInterface container Service Container
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, setDI) {

	zval *container, container_sub;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&container_sub);

	zephir_fetch_params(0, 1, 0, &container);



	zephir_update_property_zval(this_ptr, SL("container"), container);

}

/**
 * Get the Service Container
 *
 * @return ContainerInterface Service Container
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, getDI) {

	ZEPHIR_INIT_THIS();


	RETURN_MEMBER(this_ptr, "container");

}

/**
 * Set the Middleware Resolver
 *
 * @param ResolverInterface resolver Middleware Resolver
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, setResolver) {

	zval *resolver, resolver_sub;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&resolver_sub);

	zephir_fetch_params(0, 1, 0, &resolver);



	zephir_update_property_zval(this_ptr, SL("resolver"), resolver);

}

/**
 * Set the Environment execution
 *
 * @param string environment Environment
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, setEnvironment) {

	zval *environment_param = NULL;
	zval environment;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&environment);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &environment_param);

	zephir_get_strval(&environment, environment_param);


	zephir_update_property_zval(this_ptr, SL("environment"), &environment);
	ZEPHIR_MM_RESTORE();

}

/**
 * Solve and/or returns an callable or instance class
 *
 * @param callable|string|array|object middleware Middleware
 * @return callable|object Callable or Instance Class
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, resolveMiddleware) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *middleware, middleware_sub, _0, _3, _1$$3, _2$$3;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&middleware_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_3);
	ZVAL_UNDEF(&_1$$3);
	ZVAL_UNDEF(&_2$$3);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &middleware);



	zephir_read_property(&_0, this_ptr, SL("resolver"), PH_NOISY_CC | PH_READONLY);
	if (!zephir_is_true(&_0)) {
		ZEPHIR_INIT_VAR(&_1$$3);
		object_init_ex(&_1$$3, dsp_tornadohttp_resolver_resolver_ce);
		if (zephir_has_constructor(&_1$$3 TSRMLS_CC)) {
			zephir_read_property(&_2$$3, this_ptr, SL("container"), PH_NOISY_CC | PH_READONLY);
			ZEPHIR_CALL_METHOD(NULL, &_1$$3, "__construct", NULL, 0, &_2$$3);
			zephir_check_call_status();
		}
		zephir_update_property_zval(this_ptr, SL("resolver"), &_1$$3);
	}
	zephir_read_property(&_3, this_ptr, SL("resolver"), PH_NOISY_CC | PH_READONLY);
	ZEPHIR_RETURN_CALL_METHOD(&_3, "solve", NULL, 0, middleware);
	zephir_check_call_status();
	RETURN_MM();

}

/**
 * Return an empty callable
 *
 * @return callable Empty callable
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, emptyNext) {

	ZEPHIR_INIT_THIS();


	zephir_create_closure_ex(return_value, NULL, dsp_1__closure_ce, SL("__invoke"));
	return;

}

/**
 * Return an finish callable
 *
 * @return callable Finish callable
 */
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, finishNext) {

	ZEPHIR_INIT_THIS();


	zephir_create_closure_ex(return_value, NULL, dsp_2__closure_ce, SL("__invoke"));
	return;

}

