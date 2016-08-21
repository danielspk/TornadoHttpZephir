
#ifdef HAVE_CONFIG_H
#include "../../../../ext_config.h"
#endif

#include <php.h>
#include "../../../../php_ext.h"
#include "../../../../ext.h"

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/main.h"


/**
 * Dsp\TornadoHttp\Exception\Http\TooManyRequestException
 *
 * 429 Too Many Request Exception
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Exception_Http_TooManyRequestException) {

	ZEPHIR_REGISTER_CLASS_EX(Dsp\\TornadoHttp\\Exception\\Http, TooManyRequestException, dsp, tornadohttp_exception_http_toomanyrequestexception, dsp_tornadohttp_exception_http_clienterrorexception_ce, NULL, 0);

	zend_declare_property_string(dsp_tornadohttp_exception_http_toomanyrequestexception_ce, SL("message"), "Too Many Request", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(dsp_tornadohttp_exception_http_toomanyrequestexception_ce, SL("code"), 429, ZEND_ACC_PROTECTED TSRMLS_CC);

	return SUCCESS;

}

