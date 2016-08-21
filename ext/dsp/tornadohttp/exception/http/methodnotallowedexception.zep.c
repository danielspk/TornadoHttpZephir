
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
 * Dsp\TornadoHttp\Exception\Http\MethodNotAllowedException
 *
 * 405 Method Not Allowed Exception
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Exception_Http_MethodNotAllowedException) {

	ZEPHIR_REGISTER_CLASS_EX(Dsp\\TornadoHttp\\Exception\\Http, MethodNotAllowedException, dsp, tornadohttp_exception_http_methodnotallowedexception, dsp_tornadohttp_exception_http_clienterrorexception_ce, NULL, 0);

	zend_declare_property_string(dsp_tornadohttp_exception_http_methodnotallowedexception_ce, SL("message"), "Method Not Allowed", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(dsp_tornadohttp_exception_http_methodnotallowedexception_ce, SL("code"), 405, ZEND_ACC_PROTECTED TSRMLS_CC);

	return SUCCESS;

}
