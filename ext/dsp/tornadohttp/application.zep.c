
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
#include "kernel/fcall.h"
#include "kernel/object.h"


/**
 * Dsp\TornadoHttp\Application
 *
 * Tornado Http Global Application
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Application) {

	ZEPHIR_REGISTER_CLASS(Dsp\\TornadoHttp, Application, dsp, tornadohttp_application, dsp_tornadohttp_application_method_entry, ZEND_ACC_FINAL_CLASS);

	return SUCCESS;

}

/**
 * Invoke from global request
 *
 * @param TornadoHttp TornadoHttp Middleware Queue
 * @return ResponseInterface Response
 */
PHP_METHOD(Dsp_TornadoHttp_Application, invoke) {

	zephir_nts_static zend_class_entry *_1 = NULL;
	zend_class_entry *_0;
	zval requestFactory;
	int ZEPHIR_LAST_CALL_STATUS;
	zval *tornadoHttp, tornadoHttp_sub, request, response;
	ZEPHIR_INIT_THIS();

	ZVAL_UNDEF(&tornadoHttp_sub);
	ZVAL_UNDEF(&request);
	ZVAL_UNDEF(&response);
	ZVAL_UNDEF(&requestFactory);

	ZEPHIR_MM_GROW();
	zephir_fetch_params(1, 1, 0, &tornadoHttp);



	ZEPHIR_INIT_VAR(&requestFactory);
	ZVAL_STRING(&requestFactory, "\\Zend\\Diactoros\\ServerRequestFactory");
	_0 = zephir_fetch_class(&requestFactory TSRMLS_CC);
	ZEPHIR_CALL_CE_STATIC(&request, _0, "fromglobals", NULL, 0);
	zephir_check_call_status();
	ZEPHIR_INIT_VAR(&response);
	if (!_1) {
	_1 = zephir_fetch_class_str_ex(SL("Zend\\Diactoros\\Response"), ZEND_FETCH_CLASS_AUTO);
	}
	object_init_ex(&response, _1);
	if (zephir_has_constructor(&response TSRMLS_CC)) {
		ZEPHIR_CALL_METHOD(NULL, &response, "__construct", NULL, 0);
		zephir_check_call_status();
	}
	ZEPHIR_RETURN_CALL_ZVAL_FUNCTION(tornadoHttp, NULL, 0, &request, &response);
	zephir_check_call_status();
	RETURN_MM();

}

