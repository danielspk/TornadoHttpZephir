
extern zend_class_entry *dsp_tornadohttp_middleware_middlewareinterface_ce;

ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Middleware_MiddlewareInterface);

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_middleware_middlewareinterface___invoke, 0, 0, 3)
	ZEND_ARG_OBJ_INFO(0, request, Psr\\Http\\Message\\RequestInterface, 0)
	ZEND_ARG_OBJ_INFO(0, response, Psr\\Http\\Message\\ResponseInterface, 0)
	ZEND_ARG_INFO(0, next)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(dsp_tornadohttp_middleware_middlewareinterface_method_entry) {
	PHP_ABSTRACT_ME(Dsp_TornadoHttp_Middleware_MiddlewareInterface, __invoke, arginfo_dsp_tornadohttp_middleware_middlewareinterface___invoke)
	PHP_FE_END
};
