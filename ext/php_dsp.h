
/* This file was generated automatically by Zephir do not modify it! */

#ifndef PHP_DSP_H
#define PHP_DSP_H 1

#ifdef PHP_WIN32
#define ZEPHIR_RELEASE 1
#endif

#include "kernel/globals.h"

#define PHP_DSP_NAME        "Dsp Tornado Http"
#define PHP_DSP_VERSION     "0.1.0"
#define PHP_DSP_EXTNAME     "dsp"
#define PHP_DSP_AUTHOR      "Daniel M. Spiridione"
#define PHP_DSP_ZEPVERSION  "0.9.3a-dev-5c0fb106a6"
#define PHP_DSP_DESCRIPTION "Tornado Http Middleware Queue"



ZEND_BEGIN_MODULE_GLOBALS(dsp)

	int initialized;

	/* Memory */
	zephir_memory_entry *start_memory; /**< The first preallocated frame */
	zephir_memory_entry *end_memory; /**< The last preallocate frame */
	zephir_memory_entry *active_memory; /**< The current memory frame */

	/* Virtual Symbol Tables */
	zephir_symbol_table *active_symbol_table;

	/** Function cache */
	HashTable *fcache;

	zephir_fcall_cache_entry *scache[ZEPHIR_MAX_CACHE_SLOTS];

	/* Cache enabled */
	unsigned int cache_enabled;

	/* Max recursion control */
	unsigned int recursive_lock;

	
ZEND_END_MODULE_GLOBALS(dsp)

#ifdef ZTS
#include "TSRM.h"
#endif

ZEND_EXTERN_MODULE_GLOBALS(dsp)

#ifdef ZTS
	#define ZEPHIR_GLOBAL(v) ZEND_MODULE_GLOBALS_ACCESSOR(dsp, v)
#else
	#define ZEPHIR_GLOBAL(v) (dsp_globals.v)
#endif

#ifdef ZTS
	void ***tsrm_ls;
	#define ZEPHIR_VGLOBAL ((zend_dsp_globals *) (*((void ***) tsrm_get_ls_cache()))[TSRM_UNSHUFFLE_RSRC_ID(dsp_globals_id)])
#else
	#define ZEPHIR_VGLOBAL &(dsp_globals)
#endif

#define ZEPHIR_API ZEND_API

#define zephir_globals_def dsp_globals
#define zend_zephir_globals_def zend_dsp_globals

extern zend_module_entry dsp_module_entry;
#define phpext_dsp_ptr &dsp_module_entry

#endif
