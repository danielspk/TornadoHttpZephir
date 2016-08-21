
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
 * Dsp\TornadoHttp\Exception\Http\RequestEntityTooLargeException
 *
 * 413 Request Entity Too Large Exception
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Exception_Http_RequestEntityTooLargeException) {

	ZEPHIR_REGISTER_CLASS_EX(Dsp\\TornadoHttp\\Exception\\Http, RequestEntityTooLargeException, dsp, tornadohttp_exception_http_requestentitytoolargeexception, dsp_tornadohttp_exception_http_clienterrorexception_ce, NULL, 0);

	zend_declare_property_string(dsp_tornadohttp_exception_http_requestentitytoolargeexception_ce, SL("message"), "Request Entity Too Large", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(dsp_tornadohttp_exception_http_requestentitytoolargeexception_ce, SL("code"), 413, ZEND_ACC_PROTECTED TSRMLS_CC);

	return SUCCESS;

}

