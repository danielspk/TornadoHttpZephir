
extern zend_class_entry *dsp_tornadohttp_application_ce;

ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Application);

PHP_METHOD(Dsp_TornadoHttp_Application, invoke);

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_tornadohttp_application_invoke, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, tornadoHttp, Dsp\\TornadoHttp\\TornadoHttp, 0)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(dsp_tornadohttp_application_method_entry) {
	PHP_ME(Dsp_TornadoHttp_Application, invoke, arginfo_dsp_tornadohttp_application_invoke, ZEND_ACC_PUBLIC|ZEND_ACC_STATIC)
	PHP_FE_END
};
