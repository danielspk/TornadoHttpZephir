
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
 * Dsp\TornadoHttp\Exception\Http\ClientErrorException
 *
 * 4xx Client Error Exception
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Exception_Http_ClientErrorException) {

	ZEPHIR_REGISTER_CLASS_EX(Dsp\\TornadoHttp\\Exception\\Http, ClientErrorException, dsp, tornadohttp_exception_http_clienterrorexception, zend_exception_get_default(TSRMLS_C), NULL, 0);

	return SUCCESS;

}

