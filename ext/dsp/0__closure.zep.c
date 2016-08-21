
#ifdef HAVE_CONFIG_H
#include "../ext_config.h"
#endif

#include <php.h>
#include "../php_ext.h"
#include "../ext.h"

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/main.h"
#include "kernel/array.h"
#include "kernel/memory.h"
#include "kernel/fcall.h"
#include "kernel/operators.h"


ZEPHIR_INIT_CLASS(dsp_0__closure) {

	ZEPHIR_REGISTER_CLASS(dsp, 0__closure, dsp, 0__closure, dsp_0__closure_method_entry, ZEND_ACC_FINAL_CLASS);

	return SUCCESS;

}

PHP_METHOD(dsp_0__closure, __invoke) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *reflexClass, reflexClass_sub, _0, _1, _2, _3$$4;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&reflexClass_sub);
	ZVAL_UNDEF(&_0);
	ZVAL_UNDEF(&_1);
	ZVAL_UNDEF(&_2);
	ZVAL_UNDEF(&_3$$4);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &reflexClass);



	ZEPHIR_CALL_METHOD(&_0, reflexClass, "getinterfacenames", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&_1);
	ZVAL_STRING(&_1, "Dsp\\TornadoHttp\\Container\\InjectContainerInterface");
	if (zephir_fast_in_array(&_1, &_0 TSRMLS_CC)) {
		RETURN_MM_BOOL(1);
	}
	ZEPHIR_CALL_METHOD(&_2, reflexClass, "getparentclass", NULL, 0);
	zephir_check_call_status();
	if (!ZEPHIR_IS_FALSE_IDENTICAL(&_2)) {
		ZEPHIR_CALL_METHOD(&_3$$4, reflexClass, "getparentclass", NULL, 0);
		zephir_check_call_status();
		ZEPHIR_RETURN_CALL_ZVAL_FUNCTION(this_ptr, NULL, 0, &_3$$4);
		zephir_check_call_status();
		RETURN_MM();
	}
	RETURN_MM_BOOL(0);

}

