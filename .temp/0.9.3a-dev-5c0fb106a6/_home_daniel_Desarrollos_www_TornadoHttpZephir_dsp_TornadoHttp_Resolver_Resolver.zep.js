[
    {
        "type": "namespace",
        "name": "Dsp\\TornadoHttp\\Resolver",
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
        "line": 7,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Dsp\\TornadoHttp\\Exception\\MiddlewareException",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                "line": 7,
                "char": 50
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
        "line": 8,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Interop\\Container\\ContainerInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                "line": 8,
                "char": 41
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
        "line": 14,
        "char": 2
    },
    {
        "type": "comment",
        "value": "**\n * Dsp\\TornadoHttp\\Resolver\\Resolver\n *\n * Middleware Resolver\n *",
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
        "line": 15,
        "char": 5
    },
    {
        "type": "class",
        "name": "Resolver",
        "abstract": 0,
        "final": 0,
        "implements": [
            {
                "type": "variable",
                "value": "ResolverInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                "line": 16,
                "char": 1
            }
        ],
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "property",
                    "name": "container",
                    "docblock": "**\n     * @var ContainerInterface Service Container\n     *",
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
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
                    "name": "__constructor",
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
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                "line": 27,
                                "char": 64
                            },
                            "default": {
                                "type": "null",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                "line": 27,
                                "char": 72
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 27,
                            "char": 72
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
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 29,
                                        "char": 40
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 29,
                                    "char": 40
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 30,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Constructor\n     *\n     * @param ContainerInterface container Service Container\n     *",
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                    "line": 27,
                    "last-line": 37,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "solve",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "middleware",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 38,
                            "char": 37
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "fcall",
                                    "name": "is_string",
                                    "call-type": 1,
                                    "parameters": [
                                        {
                                            "parameter": {
                                                "type": "variable",
                                                "value": "middleware",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 40,
                                                "char": 33
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 40,
                                            "char": 33
                                        }
                                    ],
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 40,
                                    "char": 34
                                },
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                "line": 40,
                                "char": 36
                            },
                            "statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "list",
                                        "left": {
                                            "type": "and",
                                            "left": {
                                                "type": "property-access",
                                                "left": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 41,
                                                    "char": 22
                                                },
                                                "right": {
                                                    "type": "variable",
                                                    "value": "container",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 41,
                                                    "char": 34
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 41,
                                                "char": 34
                                            },
                                            "right": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 41,
                                                        "char": 41
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "container",
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 41,
                                                        "char": 52
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 41,
                                                    "char": 52
                                                },
                                                "name": "has",
                                                "call-type": 1,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "variable",
                                                            "value": "middleware",
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                            "line": 41,
                                                            "char": 67
                                                        },
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 41,
                                                        "char": 67
                                                    }
                                                ],
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 41,
                                                "char": 68
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 41,
                                            "char": 68
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 41,
                                        "char": 70
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "middleware",
                                                    "expr": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                "line": 42,
                                                                "char": 39
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "container",
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                "line": 42,
                                                                "char": 50
                                                            },
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                            "line": 42,
                                                            "char": 50
                                                        },
                                                        "name": "get",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "variable",
                                                                    "value": "middleware",
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                    "line": 42,
                                                                    "char": 65
                                                                },
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                "line": 42,
                                                                "char": 65
                                                            }
                                                        ],
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 42,
                                                        "char": 66
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 42,
                                                    "char": 66
                                                }
                                            ],
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 43,
                                            "char": 13
                                        }
                                    ],
                                    "else_statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "middleware",
                                                    "expr": {
                                                        "type": "new",
                                                        "class": "middleware",
                                                        "dynamic": 1,
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 44,
                                                        "char": 52
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 44,
                                                    "char": 52
                                                }
                                            ],
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 45,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 46,
                                    "char": 9
                                }
                            ],
                            "elseif_statements": [
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "list",
                                        "left": {
                                            "type": "fcall",
                                            "name": "is_array",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "middleware",
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 46,
                                                        "char": 38
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 46,
                                                    "char": 38
                                                }
                                            ],
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 46,
                                            "char": 39
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 46,
                                        "char": 41
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "middleware",
                                                    "expr": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "list",
                                                            "left": {
                                                                "type": "new",
                                                                "class": "\\ReflectionClass",
                                                                "dynamic": 0,
                                                                "parameters": [
                                                                    {
                                                                        "parameter": {
                                                                            "type": "array-access",
                                                                            "left": {
                                                                                "type": "variable",
                                                                                "value": "middleware",
                                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                                "line": 47,
                                                                                "char": 62
                                                                            },
                                                                            "right": {
                                                                                "type": "int",
                                                                                "value": "0",
                                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                                "line": 47,
                                                                                "char": 64
                                                                            },
                                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                            "line": 47,
                                                                            "char": 65
                                                                        },
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                        "line": 47,
                                                                        "char": 65
                                                                    }
                                                                ],
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                "line": 47,
                                                                "char": 66
                                                            },
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                            "line": 48,
                                                            "char": 18
                                                        },
                                                        "name": "newInstanceArgs",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "array-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "middleware",
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                        "line": 48,
                                                                        "char": 45
                                                                    },
                                                                    "right": {
                                                                        "type": "int",
                                                                        "value": "1",
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                        "line": 48,
                                                                        "char": 47
                                                                    },
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                    "line": 48,
                                                                    "char": 48
                                                                },
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                "line": 48,
                                                                "char": 48
                                                            }
                                                        ],
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 48,
                                                        "char": 49
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 48,
                                                    "char": 49
                                                }
                                            ],
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 49,
                                            "char": 9
                                        }
                                    ],
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 51,
                                    "char": 10
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 51,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "not",
                                    "left": {
                                        "type": "fcall",
                                        "name": "is_callable",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "middleware",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 51,
                                                    "char": 36
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 51,
                                                "char": 36
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 51,
                                        "char": 37
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 51,
                                    "char": 37
                                },
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                "line": 51,
                                "char": 39
                            },
                            "statements": [
                                {
                                    "type": "throw",
                                    "expr": {
                                        "type": "new",
                                        "class": "MiddlewareException",
                                        "dynamic": 0,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "string",
                                                    "value": "Middleware is not callable",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 52,
                                                    "char": 71
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 52,
                                                "char": 71
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 52,
                                        "char": 72
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 53,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 55,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "and",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 55,
                                            "char": 18
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "container",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 55,
                                            "char": 30
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 55,
                                        "char": 30
                                    },
                                    "right": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 55,
                                            "char": 37
                                        },
                                        "name": "requireContainer",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "middleware",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 55,
                                                    "char": 65
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 55,
                                                "char": 65
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 55,
                                        "char": 66
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 55,
                                    "char": 66
                                },
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                "line": 55,
                                "char": 68
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "variable",
                                            "value": "middleware",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 56,
                                            "char": 24
                                        },
                                        "name": "setContainer",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 56,
                                                        "char": 43
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "container",
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 56,
                                                        "char": 53
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 56,
                                                    "char": 53
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 56,
                                                "char": 53
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 56,
                                        "char": 54
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 57,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 59,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "variable",
                                "value": "middleware",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                "line": 59,
                                "char": 26
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 60,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Resolve middleware\n     *\n     * @param callable|string|array|object middleware Middleware\n     * @return callable Callable\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "callable",
                                "mandatory": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                "line": 39,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                        "line": 39,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                    "line": 38,
                    "last-line": 67,
                    "char": 19
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "requireContainer",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "middleware",
                            "const": 0,
                            "data-type": "callable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 68,
                            "char": 58
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "reflexClass",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 70,
                                    "char": 24
                                },
                                {
                                    "variable": "recursiveInterfaces",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 70,
                                    "char": 45
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 72,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "reflexClass",
                                    "expr": {
                                        "type": "new",
                                        "class": "\\ReflectionClass",
                                        "dynamic": 0,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "middleware",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 72,
                                                    "char": 58
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 72,
                                                "char": 58
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 72,
                                        "char": 59
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 72,
                                    "char": 59
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 74,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "variable",
                                    "operator": "assign",
                                    "variable": "recursiveInterfaces",
                                    "expr": {
                                        "type": "closure",
                                        "left": [
                                            {
                                                "type": "parameter",
                                                "name": "reflexClass",
                                                "const": 0,
                                                "data-type": "variable",
                                                "mandatory": 0,
                                                "cast": {
                                                    "type": "variable",
                                                    "value": "\\ReflectionClass",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 74,
                                                    "char": 73
                                                },
                                                "reference": 0,
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 74,
                                                "char": 74
                                            }
                                        ],
                                        "right": [
                                            {
                                                "type": "if",
                                                "expr": {
                                                    "type": "list",
                                                    "left": {
                                                        "type": "fcall",
                                                        "name": "in_array",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "string",
                                                                    "value": "Dsp\\\\TornadoHttp\\\\Container\\\\InjectContainerInterface",
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                    "line": 75,
                                                                    "char": 81
                                                                },
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                "line": 75,
                                                                "char": 81
                                                            },
                                                            {
                                                                "parameter": {
                                                                    "type": "mcall",
                                                                    "variable": {
                                                                        "type": "variable",
                                                                        "value": "reflexClass",
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                        "line": 75,
                                                                        "char": 95
                                                                    },
                                                                    "name": "getInterfaceNames",
                                                                    "call-type": 1,
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                    "line": 75,
                                                                    "char": 115
                                                                },
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                "line": 75,
                                                                "char": 115
                                                            }
                                                        ],
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 75,
                                                        "char": 116
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 75,
                                                    "char": 118
                                                },
                                                "statements": [
                                                    {
                                                        "type": "return",
                                                        "expr": {
                                                            "type": "bool",
                                                            "value": "true",
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                            "line": 76,
                                                            "char": 28
                                                        },
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 77,
                                                        "char": 13
                                                    }
                                                ],
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 78,
                                                "char": 14
                                            },
                                            {
                                                "type": "if",
                                                "expr": {
                                                    "type": "list",
                                                    "left": {
                                                        "type": "not-identical",
                                                        "left": {
                                                            "type": "mcall",
                                                            "variable": {
                                                                "type": "variable",
                                                                "value": "reflexClass",
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                "line": 78,
                                                                "char": 29
                                                            },
                                                            "name": "getParentClass",
                                                            "call-type": 1,
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                            "line": 78,
                                                            "char": 49
                                                        },
                                                        "right": {
                                                            "type": "bool",
                                                            "value": "false",
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                            "line": 78,
                                                            "char": 56
                                                        },
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 78,
                                                        "char": 56
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 78,
                                                    "char": 58
                                                },
                                                "statements": [
                                                    {
                                                        "type": "return",
                                                        "expr": {
                                                            "type": "fcall",
                                                            "name": "this",
                                                            "call-type": 2,
                                                            "parameters": [
                                                                {
                                                                    "parameter": {
                                                                        "type": "mcall",
                                                                        "variable": {
                                                                            "type": "variable",
                                                                            "value": "reflexClass",
                                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                            "line": 79,
                                                                            "char": 43
                                                                        },
                                                                        "name": "getParentClass",
                                                                        "call-type": 1,
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                        "line": 79,
                                                                        "char": 60
                                                                    },
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                                    "line": 79,
                                                                    "char": 60
                                                                }
                                                            ],
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                            "line": 79,
                                                            "char": 61
                                                        },
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                        "line": 80,
                                                        "char": 13
                                                    }
                                                ],
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 81,
                                                "char": 18
                                            },
                                            {
                                                "type": "return",
                                                "expr": {
                                                    "type": "bool",
                                                    "value": "false",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                    "line": 81,
                                                    "char": 25
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                                "line": 82,
                                                "char": 9
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 82,
                                        "char": 10
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                    "line": 82,
                                    "char": 10
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 84,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "fcall",
                                "name": "recursiveInterfaces",
                                "call-type": 2,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "reflexClass",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                            "line": 84,
                                            "char": 49
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                        "line": 84,
                                        "char": 49
                                    }
                                ],
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                "line": 84,
                                "char": 50
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                            "line": 85,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Check if the middleware implements InyectInterface\n     *\n     * @param callable middleware Middleware\n     * @return bool Use InyectInterface\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "bool",
                                "mandatory": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                                "line": 69,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                        "line": 69,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
                    "line": 74,
                    "last-line": 86,
                    "char": 42
                }
            ],
            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
            "line": 15,
            "char": 5
        },
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/Resolver\/Resolver.zep",
        "line": 15,
        "char": 5
    }
]