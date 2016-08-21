
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
#include "kernel/fcall.h"
#include "kernel/memory.h"


ZEPHIR_INIT_CLASS(dsp_1__closure) {

	ZEPHIR_REGISTER_CLASS(dsp, 1__closure, dsp, 1__closure, dsp_1__closure_method_entry, ZEND_ACC_FINAL_CLASS);

	return SUCCESS;

}

PHP_METHOD(dsp_1__closure, __invoke) {

	int ZEPHIR_LAST_CALL_STATUS;
	zval *request, request_sub, *response, response_sub, *next, next_sub;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&request_sub);
	ZVAL_UNDEF(&response_sub);
	ZVAL_UNDEF(&next_sub);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 3, 0, &request, &response, &next);



	ZEPHIR_MAKE_REF(request);
	ZEPHIR_RETURN_CALL_FUNCTION("next", NULL, 8, request, response);
	ZEPHIR_UNREF(request);
	zephir_check_call_status();
	RETURN_MM();

}

