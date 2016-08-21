
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
 * Dsp\TornadoHttp\Exception\Http\ServiceUnavailableException
 *
 * 503 Service Unavailable Exception
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Exception_Http_ServiceUnavailableException) {

	ZEPHIR_REGISTER_CLASS_EX(Dsp\\TornadoHttp\\Exception\\Http, ServiceUnavailableException, dsp, tornadohttp_exception_http_serviceunavailableexception, dsp_tornadohttp_exception_http_internalservererrorexception_ce, NULL, 0);

	zend_declare_property_string(dsp_tornadohttp_exception_http_serviceunavailableexception_ce, SL("message"), "Service Unavailable", ZEND_ACC_PROTECTED TSRMLS_CC);

	zend_declare_property_long(dsp_tornadohttp_exception_http_serviceunavailableexception_ce, SL("code"), 503, ZEND_ACC_PROTECTED TSRMLS_CC);

	return SUCCESS;

}

