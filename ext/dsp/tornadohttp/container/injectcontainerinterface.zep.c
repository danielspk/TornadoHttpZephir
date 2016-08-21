
#ifdef HAVE_CONFIG_H
#include "../../../ext_config.h"
#endif

#include <php.h>
#include "../../../php_ext.h"
#include "../../../ext.h"

#include <Zend/zend_exceptions.h>

#include "kernel/main.h"


/**
 * Dsp\TornadoHttp\Container\InjectContainerInterface
 *
 * Inyect Service Container in Middleware
 */
ZEPHIR_INIT_CLASS(Dsp_TornadoHttp_Container_InjectContainerInterface) {

	ZEPHIR_REGISTER_INTERFACE(Dsp\\TornadoHttp\\Container, InjectContainerInterface, dsp, tornadohttp_container_injectcontainerinterface, dsp_tornadohttp_container_injectcontainerinterface_method_entry);

	return SUCCESS;

}

/**
 * Get Service Container
 *
 * @return ContainerInterface Service Container
 */
ZEPHIR_DOC_METHOD(Dsp_TornadoHttp_Container_InjectContainerInterface, getContainer);

/**
 * Set Service Container
 *
 * @param ContainerInterface container Service Container
 */
ZEPHIR_DOC_METHOD(Dsp_TornadoHttp_Container_InjectContainerInterface, setContainer);

