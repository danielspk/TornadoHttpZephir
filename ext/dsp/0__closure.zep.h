
extern zend_class_entry *dsp_0__closure_ce;

ZEPHIR_INIT_CLASS(dsp_0__closure);

PHP_METHOD(dsp_0__closure, __invoke);

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_0__closure___invoke, 0, 0, 1)
	ZEND_ARG_OBJ_INFO(0, reflexClass, ReflectionClass, 0)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(dsp_0__closure_method_entry) {
	PHP_ME(dsp_0__closure, __invoke, arginfo_dsp_0__closure___invoke, ZEND_ACC_PUBLIC|ZEND_ACC_FINAL)
	PHP_FE_END
};
