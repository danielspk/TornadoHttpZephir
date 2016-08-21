
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
#include "kernel/memory.h"


ZEPHIR_INIT_CLASS(dsp_2__closure) {

	ZEPHIR_REGISTER_CLASS(dsp, 2__closure, dsp, 2__closure, dsp_2__closure_method_entry, ZEND_ACC_FINAL_CLASS);

	return SUCCESS;

}

PHP_METHOD(dsp_2__closure, __invoke) {

	zval *request, request_sub, *response, response_sub, *next, next_sub;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&request_sub);
	ZVAL_UNDEF(&response_sub);
	ZVAL_UNDEF(&next_sub);

	zephir_fetch_params(0, 3, 0, &request, &response, &next);



	RETVAL_ZVAL(response, 1, 0);
	return;

}

