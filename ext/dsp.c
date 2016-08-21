
/* This file was generated automatically by Zephir do not modify it! */

#ifdef HAVE_CONFIG_H
#include "config.h"
#endif

#include <php.h>

#include "php_ext.h"
#include "dsp.h"

#include <ext/standard/info.h>

#include <Zend/zend_operators.h>
#include <Zend/zend_exceptions.h>
#include <Zend/zend_interfaces.h>

#include "kernel/globals.h"
#include "kernel/main.h"
#include "kernel/fcall.h"
#include "kernel/memory.h"



zend_class_entry *dsp_tornadohttp_container_injectcontainerinterface_ce;
zend_class_entry *dsp_tornadohttp_middleware_middlewareinterface_ce;
zend_class_entry *dsp_tornadohttp_resolver_resolverinterface_ce;
zend_class_entry *dsp_tornadohttp_exception_http_clienterrorexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_internalservererrorexception_ce;
zend_class_entry *dsp_0__closure_ce;
zend_class_entry *dsp_1__closure_ce;
zend_class_entry *dsp_2__closure_ce;
zend_class_entry *dsp_tornadohttp_application_ce;
zend_class_entry *dsp_tornadohttp_exception_http_badgatewayexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_badrequestexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_conflictexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_forbiddenexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_methodnotallowedexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_notacceptableexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_notfoundexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_paymentrequiredexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_preconditionfailedexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_requestentitytoolargeexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_serviceunavailableexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_toomanyrequestexception_ce;
zend_class_entry *dsp_tornadohttp_exception_http_unauthorizedexception_ce;
zend_class_entry *dsp_tornadohttp_exception_middlewareexception_ce;
zend_class_entry *dsp_tornadohttp_middleware_middleware_ce;
zend_class_entry *dsp_tornadohttp_resolver_resolver_ce;
zend_class_entry *dsp_tornadohttp_tornadohttp_ce;

ZEND_DECLARE_MODULE_GLOBALS(dsp)

PHP_INI_BEGIN()
	
PHP_INI_END()

static PHP_MINIT_FUNCTION(dsp)
{
	REGISTER_INI_ENTRIES();
	ZEPHIR_INIT(Dsp_TornadoHttp_Container_InjectContainerInterface);
	ZEPHIR_INIT(Dsp_TornadoHttp_Middleware_MiddlewareInterface);
	ZEPHIR_INIT(Dsp_TornadoHttp_Resolver_ResolverInterface);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_ClientErrorException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_InternalServerErrorException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Application);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_BadGatewayException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_BadRequestException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_ConflictException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_ForbiddenException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_MethodNotAllowedException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_NotAcceptableException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_NotFoundException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_PaymentRequiredException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_PreconditionFailedException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_RequestEntityTooLargeException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_ServiceUnavailableException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_TooManyRequestException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_Http_UnauthorizedException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Exception_MiddlewareException);
	ZEPHIR_INIT(Dsp_TornadoHttp_Middleware_Middleware);
	ZEPHIR_INIT(Dsp_TornadoHttp_Resolver_Resolver);
	ZEPHIR_INIT(Dsp_TornadoHttp_TornadoHttp);
	ZEPHIR_INIT(dsp_0__closure);
	ZEPHIR_INIT(dsp_1__closure);
	ZEPHIR_INIT(dsp_2__closure);
	return SUCCESS;
}

#ifndef ZEPHIR_RELEASE
static PHP_MSHUTDOWN_FUNCTION(dsp)
{
	zephir_deinitialize_memory(TSRMLS_C);
	UNREGISTER_INI_ENTRIES();
	return SUCCESS;
}
#endif

/**
 * Initialize globals on each request or each thread started
 */
static void php_zephir_init_globals(zend_dsp_globals *dsp_globals TSRMLS_DC)
{
	dsp_globals->initialized = 0;

	/* Memory options */
	dsp_globals->active_memory = NULL;

	/* Virtual Symbol Tables */
	dsp_globals->active_symbol_table = NULL;

	/* Cache Enabled */
	dsp_globals->cache_enabled = 1;

	/* Recursive Lock */
	dsp_globals->recursive_lock = 0;

	/* Static cache */
	memset(dsp_globals->scache, '\0', sizeof(zephir_fcall_cache_entry*) * ZEPHIR_MAX_CACHE_SLOTS);


}

/**
 * Initialize globals only on each thread started
 */
static void php_zephir_init_module_globals(zend_dsp_globals *dsp_globals TSRMLS_DC)
{

}

static PHP_RINIT_FUNCTION(dsp)
{

	zend_dsp_globals *dsp_globals_ptr;
#ifdef ZTS
	tsrm_ls = ts_resource(0);
#endif
	dsp_globals_ptr = ZEPHIR_VGLOBAL;

	php_zephir_init_globals(dsp_globals_ptr TSRMLS_CC);
	zephir_initialize_memory(dsp_globals_ptr TSRMLS_CC);


	return SUCCESS;
}

static PHP_RSHUTDOWN_FUNCTION(dsp)
{
	
	zephir_deinitialize_memory(TSRMLS_C);
	return SUCCESS;
}

static PHP_MINFO_FUNCTION(dsp)
{
	php_info_print_box_start(0);
	php_printf("%s", PHP_DSP_DESCRIPTION);
	php_info_print_box_end();

	php_info_print_table_start();
	php_info_print_table_header(2, PHP_DSP_NAME, "enabled");
	php_info_print_table_row(2, "Author", PHP_DSP_AUTHOR);
	php_info_print_table_row(2, "Version", PHP_DSP_VERSION);
	php_info_print_table_row(2, "Build Date", __DATE__ " " __TIME__ );
	php_info_print_table_row(2, "Powered by Zephir", "Version " PHP_DSP_ZEPVERSION);
	php_info_print_table_end();
	php_info_print_table_start();
	php_info_print_table_header(2, "Rol", "Person");
	php_info_print_table_row(2, "Team Leader", "Daniel M. Spiridione");
	php_info_print_table_end();

	DISPLAY_INI_ENTRIES();
}

static PHP_GINIT_FUNCTION(dsp)
{
	php_zephir_init_globals(dsp_globals TSRMLS_CC);
	php_zephir_init_module_globals(dsp_globals TSRMLS_CC);
}

static PHP_GSHUTDOWN_FUNCTION(dsp)
{

}


zend_function_entry php_dsp_functions[] = {
ZEND_FE_END

};

zend_module_entry dsp_module_entry = {
	STANDARD_MODULE_HEADER_EX,
	NULL,
	NULL,
	PHP_DSP_EXTNAME,
	php_dsp_functions,
	PHP_MINIT(dsp),
#ifndef ZEPHIR_RELEASE
	PHP_MSHUTDOWN(dsp),
#else
	NULL,
#endif
	PHP_RINIT(dsp),
	PHP_RSHUTDOWN(dsp),
	PHP_MINFO(dsp),
	PHP_DSP_VERSION,
	ZEND_MODULE_GLOBALS(dsp),
	PHP_GINIT(dsp),
	PHP_GSHUTDOWN(dsp),
	NULL,
	STANDARD_MODULE_PROPERTIES_EX
};

#ifdef COMPILE_DL_DSP
ZEND_GET_MODULE(dsp)
#endif
