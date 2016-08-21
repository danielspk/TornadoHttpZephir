
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
 * Dsp\TornadoHttp\Exception\Http\BadGatewayException
 *
 * 502 Bad Gateway Exception
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Exception_Http_BadGatewayException) {

	ZEPHIR_REGISTER_CLASS_EX(Dsp\\TornadoHttp\\Exception\\Http, BadGatewayException, dsp, tornadohttp_exception_http_badgatewayexception, dsp_tornadohttp_exception_http_internalservererrorexception_ce, NULL, 0);

	zend_declare_property_string(dsp_tornadohttp_exception_http_badgatewayexception_ce, SL("message"), "Bad Gateway", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(dsp_tornadohttp_exception_http_badgatewayexception_ce, SL("code"), 502, ZEND_ACC_PROTECTED TSRMLS_CC);

	return SUCCESS;

}

