PHP_ARG_ENABLE(dsp, whether to enable dsp, [ --enable-dsp   Enable Dsp])

if test "$PHP_DSP" = "yes"; then

	

	if ! test "x" = "x"; then
		PHP_EVAL_LIBLINE(, DSP_SHARED_LIBADD)
	fi

	AC_DEFINE(HAVE_DSP, 1, [Whether you have Dsp])
	dsp_sources="dsp.c kernel/main.c kernel/memory.c kernel/exception.c kernel/hash.c kernel/debug.c kernel/backtrace.c kernel/object.c kernel/array.c kernel/extended/array.c kernel/string.c kernel/fcall.c kernel/extended/fcall.c kernel/require.c kernel/file.c kernel/operators.c kernel/math.c kernel/concat.c kernel/variables.c kernel/filter.c kernel/iterator.c kernel/time.c kernel/exit.c dsp/tornadohttp/exception/http/clienterrorexception.zep.c
	dsp/tornadohttp/exception/http/internalservererrorexception.zep.c
	dsp/tornadohttp/container/injectcontainerinterface.zep.c
	dsp/tornadohttp/middleware/middlewareinterface.zep.c
	dsp/tornadohttp/resolver/resolverinterface.zep.c
	dsp/tornadohttp/application.zep.c
	dsp/tornadohttp/exception/http/badgatewayexception.zep.c
	dsp/tornadohttp/exception/http/badrequestexception.zep.c
	dsp/tornadohttp/exception/http/conflictexception.zep.c
	dsp/tornadohttp/exception/http/forbiddenexception.zep.c
	dsp/tornadohttp/exception/http/methodnotallowedexception.zep.c
	dsp/tornadohttp/exception/http/notacceptableexception.zep.c
	dsp/tornadohttp/exception/http/notfoundexception.zep.c
	dsp/tornadohttp/exception/http/paymentrequiredexception.zep.c
	dsp/tornadohttp/exception/http/preconditionfailedexception.zep.c
	dsp/tornadohttp/exception/http/requestentitytoolargeexception.zep.c
	dsp/tornadohttp/exception/http/serviceunavailableexception.zep.c
	dsp/tornadohttp/exception/http/toomanyrequestexception.zep.c
	dsp/tornadohttp/exception/http/unauthorizedexception.zep.c
	dsp/tornadohttp/exception/middlewareexception.zep.c
	dsp/tornadohttp/middleware/middleware.zep.c
	dsp/tornadohttp/resolver/resolver.zep.c
	dsp/tornadohttp/tornadohttp.zep.c
	dsp/0__closure.zep.c
	dsp/1__closure.zep.c
	dsp/2__closure.zep.c "
	PHP_NEW_EXTENSION(dsp, $dsp_sources, $ext_shared,, )
	PHP_SUBST(DSP_SHARED_LIBADD)

	old_CPPFLAGS=$CPPFLAGS
	CPPFLAGS="$CPPFLAGS $INCLUDES"

	AC_CHECK_DECL(
		[HAVE_BUNDLED_PCRE],
		[
			AC_CHECK_HEADERS(
				[ext/pcre/php_pcre.h],
				[
					PHP_ADD_EXTENSION_DEP([dsp], [pcre])
					AC_DEFINE([ZEPHIR_USE_PHP_PCRE], [1], [Whether PHP pcre extension is present at compile time])
				],
				,
				[[#include "main/php.h"]]
			)
		],
		,
		[[#include "php_config.h"]]
	)

	AC_CHECK_DECL(
		[HAVE_JSON],
		[
			AC_CHECK_HEADERS(
				[ext/json/php_json.h],
				[
					PHP_ADD_EXTENSION_DEP([dsp], [json])
					AC_DEFINE([ZEPHIR_USE_PHP_JSON], [1], [Whether PHP json extension is present at compile time])
				],
				,
				[[#include "main/php.h"]]
			)
		],
		,
		[[#include "php_config.h"]]
	)

	CPPFLAGS=$old_CPPFLAGS

	PHP_INSTALL_HEADERS([ext/dsp], [php_DSP.h])

fi
