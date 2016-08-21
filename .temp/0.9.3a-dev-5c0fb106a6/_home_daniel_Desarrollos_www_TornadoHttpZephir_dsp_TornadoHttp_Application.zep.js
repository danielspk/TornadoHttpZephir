[
    {
        "type": "namespace",
        "name": "Dsp\\TornadoHttp",
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
        "line": 7,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Psr\\Http\\Message\\ResponseInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                "line": 7,
                "char": 39
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
        "line": 8,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Zend\\Diactoros\\Response",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                "line": 8,
                "char": 28
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
        "line": 9,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Zend\\Diactoros\\ServerRequestFactory",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                "line": 9,
                "char": 40
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
        "line": 15,
        "char": 2
    },
    {
        "type": "comment",
        "value": "**\n * Dsp\\TornadoHttp\\Application\n *\n * Tornado Http Global Application\n *",
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
        "line": 16,
        "char": 5
    },
    {
        "type": "class",
        "name": "Application",
        "abstract": 0,
        "final": 1,
        "definition": {
            "methods": [
                {
                    "visibility": [
                        "public",
                        "static"
                    ],
                    "type": "method",
                    "name": "invoke",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "tornadoHttp",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "TornadoHttp",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                "line": 24,
                                "char": 59
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                            "line": 24,
                            "char": 60
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "request",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                    "line": 26,
                                    "char": 20
                                },
                                {
                                    "variable": "response",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                    "line": 26,
                                    "char": 30
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                            "line": 27,
                            "char": 14
                        },
                        {
                            "type": "declare",
                            "data-type": "string",
                            "variables": [
                                {
                                    "variable": "requestFactory",
                                    "expr": {
                                        "type": "string",
                                        "value": "\\\\Zend\\\\Diactoros\\\\ServerRequestFactory",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                        "line": 27,
                                        "char": 74
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                    "line": 27,
                                    "char": 74
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                            "line": 29,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "request",
                                    "expr": {
                                        "type": "scall",
                                        "dynamic-class": 1,
                                        "class": "requestFactory",
                                        "dynamic": 0,
                                        "name": "fromGlobals",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                        "line": 29,
                                        "char": 54
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                    "line": 29,
                                    "char": 54
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                            "line": 30,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "response",
                                    "expr": {
                                        "type": "new",
                                        "class": "Response",
                                        "dynamic": 0,
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                        "line": 30,
                                        "char": 38
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                    "line": 30,
                                    "char": 38
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                            "line": 32,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "fcall",
                                "name": "tornadoHttp",
                                "call-type": 2,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "request",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                            "line": 32,
                                            "char": 37
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                        "line": 32,
                                        "char": 37
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "response",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                            "line": 32,
                                            "char": 47
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                        "line": 32,
                                        "char": 47
                                    }
                                ],
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                "line": 32,
                                "char": 48
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                            "line": 33,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Invoke from global request\n     *\n     * @param TornadoHttp TornadoHttp Middleware Queue\n     * @return ResponseInterface Response\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "cast": {
                                    "type": "variable",
                                    "value": "ResponseInterface",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                    "line": 25,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                                "line": 25,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                        "line": 25,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
                    "line": 24,
                    "last-line": 34,
                    "char": 26
                }
            ],
            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
            "line": 16,
            "char": 11
        },
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Application.zep",
        "line": 16,
        "char": 11
    }
]