
extern zend_class_entry *dsp_tornadohttp_tornadohttp_ce;

ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_TornadoHttp);

PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, __construct);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, __invoke);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, add);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, addList);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, getMiddlewareIndex);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, setDI);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, getDI);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, setResolver);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, setEnvironment);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, resolveMiddleware);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, emptyNext);
PHP_METHOD(Dsp_TornadoHttp_TornadoHttp, finishNext);

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_tornadohttp___construct, 0, 0, 0)
	ZEND_ARG_ARRAY_INFO(0, middlewares, 1)
	ZEND_ARG_OBJ_INFO(0, container, Interop\\Container\\ContainerInterface, 1)
	ZEND_ARG_OBJ_INFO(0, resolver, Dsp\\TornadoHttp\\Resolver\\ResolverInterface, 1)
	ZEND_ARG_INFO(0, environment)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_tornadohttp___invoke, 0, 0, 2)
	ZEND_ARG_OBJ_INFO(0, request, Psr\\Http\\Message\\RequestInterface, 0)
	ZEND_ARG_OBJ_INFO(0, response, Psr\\Http\\Message\\ResponseInterface, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_tornadohttp_add, 0, 0, 1)
	ZEND_ARG_INFO(0, middleware)
	ZEND_ARG_INFO(0, path)
	ZEND_ARG_ARRAY_INFO(0, methods, 1)
	ZEND_ARG_ARRAY_INFO(0, environments, 1)
	ZEND_ARG_INFO(0, index)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_tornadohttp_addlist, 0, 0, 1)
	ZEND_ARG_ARRAY_INFO(0, middlewares, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_tornadohttp_setdi, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, container, Interop\\Container\\ContainerInterface, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_tornadohttp_setresolver, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, resolver, Dsp\\TornadoHttp\\Resolver\\ResolverInterface, 0)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_tornadohttp_setenvironment, 0, 0, 1)
	ZEND_ARG_INFO(0, environment)
ZEND_END_ARG_INFO()

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_tornadohttp_resolvemiddleware, 0, 0, 1)
	ZEND_ARG_INFO(0, middleware)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(dsp_tornadohttp_tornadohttp_method_entry) {
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, __construct, arginfo_dsp_tornadohttp_tornadohttp___construct, ZEND_ACC_PUBLIC|ZEND_ACC_CTOR)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, __invoke, arginfo_dsp_tornadohttp_tornadohttp___invoke, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, add, arginfo_dsp_tornadohttp_tornadohttp_add, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, addList, arginfo_dsp_tornadohttp_tornadohttp_addlist, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, getMiddlewareIndex, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, setDI, arginfo_dsp_tornadohttp_tornadohttp_setdi, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, getDI, NULL, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, setResolver, arginfo_dsp_tornadohttp_tornadohttp_setresolver, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, setEnvironment, arginfo_dsp_tornadohttp_tornadohttp_setenvironment, ZEND_ACC_PUBLIC)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, resolveMiddleware, arginfo_dsp_tornadohttp_tornadohttp_resolvemiddleware, ZEND_ACC_PRIVATE)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, emptyNext, NULL, ZEND_ACC_PRIVATE)
	PHP_ME(Dsp_TornadoHttp_TornadoHttp, finishNext, NULL, ZEND_ACC_PRIVATE)
	PHP_FE_END
};
