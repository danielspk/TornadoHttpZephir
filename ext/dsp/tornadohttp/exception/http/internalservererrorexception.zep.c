
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
 * Dsp\TornadoHttp\Exception\Http\InternalServerErrorException
 *
 * 5xx Internal Server Error Exception
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Exception_Http_InternalServerErrorException) {

	ZEPHIR_REGISTER_CLASS_EX(Dsp\\TornadoHttp\\Exception\\Http, InternalServerErrorException, dsp, tornadohttp_exception_http_internalservererrorexception, zend_exception_get_default(TSRMLS_C), NULL, 0);

	return SUCCESS;

}

