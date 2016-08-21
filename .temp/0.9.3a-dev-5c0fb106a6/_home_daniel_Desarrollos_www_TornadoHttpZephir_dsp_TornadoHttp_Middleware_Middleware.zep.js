[
    {
        "type": "namespace",
        "name": "Dsp\\TornadoHttp\\Middleware",
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
        "line": 7,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Dsp\\TornadoHttp\\Container\\InjectContainerInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                "line": 7,
                "char": 55
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
        "line": 8,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Interop\\Container\\ContainerInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                "line": 8,
                "char": 41
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
        "line": 14,
        "char": 2
    },
    {
        "type": "comment",
        "value": "**\n * Dsp\\TornadoHttp\\Middleware\\Middleware\n *\n * Middleware\n *",
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
        "line": 15,
        "char": 8
    },
    {
        "type": "class",
        "name": "Middleware",
        "abstract": 1,
        "final": 0,
        "implements": [
            {
                "type": "variable",
                "value": "MiddlewareInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                "line": 15,
                "char": 57
            },
            {
                "type": "variable",
                "value": "InjectContainerInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                "line": 16,
                "char": 1
            }
        ],
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "protected"
                    ],
                    "type": "property",
                    "name": "container",
                    "docblock": "**\n     * @var ContainerInterface Service Container\n     *",
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                    "line": 26,
                    "char": 6
                }
            ],
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getContainer",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                                    "line": 29,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "container",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                                    "line": 29,
                                    "char": 31
                                },
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                                "line": 29,
                                "char": 31
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                            "line": 30,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Get Service Container\n     *\n     * @return ContainerInterface Service Container\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "cast": {
                                    "type": "variable",
                                    "value": "ContainerInterface",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                                    "line": 28,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                                "line": 28,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                        "line": 28,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                    "line": 27,
                    "last-line": 36,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setContainer",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "container",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "ContainerInterface",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                                "line": 37,
                                "char": 63
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                            "line": 37,
                            "char": 64
                        }
                    ],
                    "statements": [
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "container",
                                    "expr": {
                                        "type": "variable",
                                        "value": "container",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                                        "line": 39,
                                        "char": 40
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                                    "line": 39,
                                    "char": 40
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                            "line": 40,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Set Service Container\n     *\n     * @param ContainerInterface container Service Container\n     *",
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                        "line": 38,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
                    "line": 37,
                    "last-line": 41,
                    "char": 19
                }
            ],
            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
            "line": 15,
            "char": 14
        },
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Middleware\/Middleware.zep",
        "line": 15,
        "char": 14
    }
]