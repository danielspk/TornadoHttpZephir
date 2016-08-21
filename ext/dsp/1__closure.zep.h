
extern zend_class_entry *dsp_1__closure_ce;

ZEPHIR_INIT_CLASS(dsp_1__closure);

PHP_METHOD(dsp_1__closure, __invoke);

ZEND_BEGIN_ARG_INFO_EX(arginfo_dsp_1__closure___invoke, 0, 0, 3)
	ZEND_ARG_OBJ_INFO(0, request, dsp\\RequestInterface, 0)
	ZEND_ARG_OBJ_INFO(0, response, dsp\\ResponseInterface, 0)
	ZEND_ARG_INFO(0, next)
ZEND_END_ARG_INFO()

ZEPHIR_INIT_FUNCS(dsp_1__closure_method_entry) {
	PHP_ME(dsp_1__closure, __invoke, arginfo_dsp_1__closure___invoke, ZEND_ACC_PUBLIC|ZEND_ACC_FINAL)
	PHP_FE_END
};
