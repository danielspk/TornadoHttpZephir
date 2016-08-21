[
    {
        "type": "namespace",
        "name": "Dsp\\TornadoHttp\\Middleware",
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
        "line": 7,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Interop\\Container\\ContainerInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                "line": 7,
                "char": 41
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
        "line": 8,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Psr\\Http\\Message\\RequestInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                "line": 8,
                "char": 38
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
        "line": 9,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Psr\\Http\\Message\\ResponseInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                "line": 9,
                "char": 39
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
        "line": 15,
        "char": 2
    },
    {
        "type": "comment",
        "value": "**\n * Dsp\\TornadoHttp\\Middleware\\MiddlewareInterface\n *\n * Middleware Interface\n *",
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
        "line": 16,
        "char": 9
    },
    {
        "type": "interface",
        "name": "MiddlewareInterface",
        "definition": {
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__invoke",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "request",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "RequestInterface",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                                "line": 26,
                                "char": 55
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                            "line": 26,
                            "char": 56
                        },
                        {
                            "type": "parameter",
                            "name": "response",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "ResponseInterface",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                                "line": 26,
                                "char": 85
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                            "line": 26,
                            "char": 86
                        },
                        {
                            "type": "parameter",
                            "name": "next",
                            "const": 0,
                            "data-type": "callable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                            "line": 26,
                            "char": 101
                        }
                    ],
                    "docblock": "**\n     * Invocation\n     *\n     * @param RequestInterface request Request\n     * @param ResponseInterface response Response\n     * @param callable next Next middleware\n     * @return callable Callable middleware\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "callable",
                                "mandatory": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                                "line": 26,
                                "char": 114
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                        "line": 26,
                        "char": 114
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
                    "line": 26,
                    "last-line": 27,
                    "char": 19
                }
            ],
            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
            "line": 27,
            "char": 1
        },
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/MiddlewareInterface.zep",
        "line": 0,
        "char": 0
    }
]