
extern zend_class_entry *dsp_tornadohttp_middleware_middleware_ce;

ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Middleware_Middleware);

PHP_METHOD(Dsp_TornadoHttp_Middleware_Middleware, getContainer);
PHP_METHOD(Dsp_TornadoHttp_Middleware_Middleware, setContainer);

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_middleware_middleware_setcontainer, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, container, Interop\\Container\\ContainerInterface, 0)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(dsp_tornadohttp_middleware_middleware_method_entry) {
	PHP_ME(Dsp_TornadoHttp_Middleware_Middleware, getContainer, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_Middleware_Middleware, setContainer, arginfo_dsp_tornadohttp_middleware_middleware_setcontainer, ZEND_ACC_PUBLIC)
	PHP_FE_END
};
