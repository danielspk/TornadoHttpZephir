
extern zend_class_entry *dsp_tornadohttp_resolver_resolver_ce;

ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Resolver_Resolver);

PHP_METHOD(Dsp_TornadoHttp_Resolver_Resolver, __constructor);
PHP_METHOD(Dsp_TornadoHttp_Resolver_Resolver, solve);
PHP_METHOD(Dsp_TornadoHttp_Resolver_Resolver, requireContainer);

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_resolver_resolver___constructor, 0, 0, 0)
	ZEND_ARG_OBJ_INFO(0, container, Interop\\Container\\ContainerInterface, 1)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_resolver_resolver_solve, 0, 0, 1)
	ZEND_ARG_INFO(0, middleware)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_resolver_resolver_requirecontainer, 0, 0, 1)
	ZEND_ARG_INFO(0, middleware)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(dsp_tornadohttp_resolver_resolver_method_entry) {
	PHP_ME(Dsp_TornadoHttp_Resolver_Resolver, __constructor, arginfo_dsp_tornadohttp_resolver_resolver___constructor, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_Resolver_Resolver, solve, arginfo_dsp_tornadohttp_resolver_resolver_solve, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_Resolver_Resolver, requireContainer, arginfo_dsp_tornadohttp_resolver_resolver_requirecontainer, ZEND_ACC_PRIVATE)
	PHP_FE_END
};
