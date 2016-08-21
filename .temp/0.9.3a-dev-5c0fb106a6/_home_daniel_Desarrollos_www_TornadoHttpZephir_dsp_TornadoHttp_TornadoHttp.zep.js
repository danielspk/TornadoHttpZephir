[
    {
        "type": "namespace",
        "name": "Dsp\\TornadoHttp",
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
        "line": 7,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Dsp\\TornadoHttp\\Resolver\\Resolver",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                "line": 7,
                "char": 38
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
        "line": 8,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Dsp\\TornadoHttp\\Resolver\\ResolverInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                "line": 8,
                "char": 47
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
        "line": 9,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Interop\\Container\\ContainerInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                "line": 9,
                "char": 41
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
        "line": 10,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Psr\\Http\\Message\\RequestInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                "line": 10,
                "char": 38
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
        "line": 11,
        "char": 3
    },
    {
        "type": "use",
        "aliases": [
            {
                "name": "Psr\\Http\\Message\\ResponseInterface",
                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                "line": 11,
                "char": 39
            }
        ],
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
        "line": 17,
        "char": 2
    },
    {
        "type": "comment",
        "value": "**\n * Dsp\\TornadoHttp\\TornadoHttp\n *\n * Middleware Queue\n *",
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
        "line": 18,
        "char": 5
    },
    {
        "type": "class",
        "name": "TornadoHttp",
        "abstract": 0,
        "final": 1,
        "definition": {
            "properties": [
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "property",
                    "name": "middlewares",
                    "docblock": "**\n     * @var \\SplQueue Middleware queue\n     *",
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 32,
                    "char": 6
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "property",
                    "name": "container",
                    "docblock": "**\n     * @var ContainerInterface Service Container\n     *",
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 37,
                    "char": 6
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "property",
                    "name": "resolver",
                    "docblock": "**\n     * @var ResolverInterface Middleware Resolver\n     *",
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 42,
                    "char": 6
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "property",
                    "name": "environment",
                    "docblock": "**\n     * @var string Environment\n     *",
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 52,
                    "char": 6
                }
            ],
            "methods": [
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "__construct",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "middlewares",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 54,
                                "char": 33
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 54,
                            "char": 33
                        },
                        {
                            "type": "parameter",
                            "name": "container",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "ContainerInterface",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 55,
                                "char": 38
                            },
                            "default": {
                                "type": "null",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 55,
                                "char": 46
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 55,
                            "char": 46
                        },
                        {
                            "type": "parameter",
                            "name": "resolver",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "ResolverInterface",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 56,
                                "char": 36
                            },
                            "default": {
                                "type": "null",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 56,
                                "char": 44
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 56,
                            "char": 44
                        },
                        {
                            "type": "parameter",
                            "name": "environment",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "default": {
                                "type": "string",
                                "value": "dev",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 58,
                                "char": 5
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 58,
                            "char": 5
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
                                    "property": "middlewares",
                                    "expr": {
                                        "type": "new",
                                        "class": "\\SplQueue",
                                        "dynamic": 0,
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 60,
                                        "char": 48
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 60,
                                    "char": 48
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 61,
                            "char": 11
                        },
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
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 61,
                                        "char": 40
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 61,
                                    "char": 40
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 62,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "resolver",
                                    "expr": {
                                        "type": "variable",
                                        "value": "resolver",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 62,
                                        "char": 38
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 62,
                                    "char": 38
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 63,
                            "char": 11
                        },
                        {
                            "type": "let",
                            "assignments": [
                                {
                                    "assign-type": "object-property",
                                    "operator": "assign",
                                    "variable": "this",
                                    "property": "environment",
                                    "expr": {
                                        "type": "variable",
                                        "value": "environment",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 63,
                                        "char": 44
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 63,
                                    "char": 44
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 65,
                            "char": 12
                        },
                        {
                            "type": "mcall",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 65,
                                    "char": 14
                                },
                                "name": "addList",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "middlewares",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 65,
                                            "char": 34
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 65,
                                        "char": 34
                                    }
                                ],
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 65,
                                "char": 35
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 66,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Constructor\n     *\n     * @param array middlewares Middlewares\n     * @param ContainerInterface container Service Container\n     * @param ResolverInterface resolver Middleware Resolver\n     * @param string environment Environment\n     *",
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 53,
                    "last-line": 74,
                    "char": 19
                },
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
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 76,
                                "char": 34
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 76,
                            "char": 35
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
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 77,
                                "char": 36
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 78,
                            "char": 5
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "next",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 80,
                                    "char": 17
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 82,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "not",
                                    "left": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 82,
                                                "char": 19
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "middlewares",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 82,
                                                "char": 32
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 82,
                                            "char": 32
                                        },
                                        "name": "isEmpty",
                                        "call-type": 1,
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 82,
                                        "char": 42
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 82,
                                    "char": 42
                                },
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 82,
                                "char": 44
                            },
                            "statements": [
                                {
                                    "type": "declare",
                                    "data-type": "variable",
                                    "variables": [
                                        {
                                            "variable": "mdw",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "property-access",
                                                    "left": {
                                                        "type": "variable",
                                                        "value": "this",
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 83,
                                                        "char": 28
                                                    },
                                                    "right": {
                                                        "type": "variable",
                                                        "value": "middlewares",
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 83,
                                                        "char": 41
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 83,
                                                    "char": 41
                                                },
                                                "name": "dequeue",
                                                "call-type": 1,
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 83,
                                                "char": 51
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 83,
                                            "char": 51
                                        }
                                    ],
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 85,
                                    "char": 14
                                },
                                {
                                    "type": "if",
                                    "expr": {
                                        "type": "list",
                                        "left": {
                                            "type": "or",
                                            "left": {
                                                "type": "or",
                                                "left": {
                                                    "type": "list",
                                                    "left": {
                                                        "type": "and",
                                                        "left": {
                                                            "type": "isset",
                                                            "left": {
                                                                "type": "list",
                                                                "left": {
                                                                    "type": "array-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "mdw",
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 87,
                                                                        "char": 30
                                                                    },
                                                                    "right": {
                                                                        "type": "string",
                                                                        "value": "methods",
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 87,
                                                                        "char": 40
                                                                    },
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                    "line": 87,
                                                                    "char": 41
                                                                },
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                "line": 87,
                                                                "char": 44
                                                            },
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                            "line": 87,
                                                            "char": 44
                                                        },
                                                        "right": {
                                                            "type": "not",
                                                            "left": {
                                                                "type": "fcall",
                                                                "name": "in_array",
                                                                "call-type": 1,
                                                                "parameters": [
                                                                    {
                                                                        "parameter": {
                                                                            "type": "mcall",
                                                                            "variable": {
                                                                                "type": "variable",
                                                                                "value": "request",
                                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                                "line": 88,
                                                                                "char": 39
                                                                            },
                                                                            "name": "getMethod",
                                                                            "call-type": 1,
                                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                            "line": 88,
                                                                            "char": 51
                                                                        },
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 88,
                                                                        "char": 51
                                                                    },
                                                                    {
                                                                        "parameter": {
                                                                            "type": "array-access",
                                                                            "left": {
                                                                                "type": "variable",
                                                                                "value": "mdw",
                                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                                "line": 88,
                                                                                "char": 56
                                                                            },
                                                                            "right": {
                                                                                "type": "string",
                                                                                "value": "methods",
                                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                                "line": 88,
                                                                                "char": 66
                                                                            },
                                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                            "line": 88,
                                                                            "char": 67
                                                                        },
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 88,
                                                                        "char": 67
                                                                    }
                                                                ],
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                "line": 89,
                                                                "char": 17
                                                            },
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                            "line": 89,
                                                            "char": 17
                                                        },
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 89,
                                                        "char": 17
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 89,
                                                    "char": 20
                                                },
                                                "right": {
                                                    "type": "list",
                                                    "left": {
                                                        "type": "and",
                                                        "left": {
                                                            "type": "isset",
                                                            "left": {
                                                                "type": "list",
                                                                "left": {
                                                                    "type": "array-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "mdw",
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 91,
                                                                        "char": 30
                                                                    },
                                                                    "right": {
                                                                        "type": "string",
                                                                        "value": "path",
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 91,
                                                                        "char": 37
                                                                    },
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                    "line": 91,
                                                                    "char": 38
                                                                },
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                "line": 91,
                                                                "char": 41
                                                            },
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                            "line": 91,
                                                            "char": 41
                                                        },
                                                        "right": {
                                                            "type": "not-identical",
                                                            "left": {
                                                                "type": "fcall",
                                                                "name": "preg_match",
                                                                "call-type": 1,
                                                                "parameters": [
                                                                    {
                                                                        "parameter": {
                                                                            "type": "array-access",
                                                                            "left": {
                                                                                "type": "variable",
                                                                                "value": "mdw",
                                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                                "line": 92,
                                                                                "char": 35
                                                                            },
                                                                            "right": {
                                                                                "type": "string",
                                                                                "value": "path",
                                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                                "line": 92,
                                                                                "char": 42
                                                                            },
                                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                            "line": 92,
                                                                            "char": 43
                                                                        },
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 92,
                                                                        "char": 43
                                                                    },
                                                                    {
                                                                        "parameter": {
                                                                            "type": "mcall",
                                                                            "variable": {
                                                                                "type": "mcall",
                                                                                "variable": {
                                                                                    "type": "variable",
                                                                                    "value": "request",
                                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                                    "line": 92,
                                                                                    "char": 53
                                                                                },
                                                                                "name": "getUri",
                                                                                "call-type": 1,
                                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                                "line": 92,
                                                                                "char": 63
                                                                            },
                                                                            "name": "getPath",
                                                                            "call-type": 1,
                                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                            "line": 92,
                                                                            "char": 73
                                                                        },
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 92,
                                                                        "char": 73
                                                                    }
                                                                ],
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                "line": 92,
                                                                "char": 77
                                                            },
                                                            "right": {
                                                                "type": "int",
                                                                "value": "1",
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                "line": 93,
                                                                "char": 17
                                                            },
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                            "line": 93,
                                                            "char": 17
                                                        },
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 93,
                                                        "char": 17
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 93,
                                                    "char": 20
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 93,
                                                "char": 20
                                            },
                                            "right": {
                                                "type": "list",
                                                "left": {
                                                    "type": "and",
                                                    "left": {
                                                        "type": "isset",
                                                        "left": {
                                                            "type": "list",
                                                            "left": {
                                                                "type": "array-access",
                                                                "left": {
                                                                    "type": "variable",
                                                                    "value": "mdw",
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                    "line": 95,
                                                                    "char": 30
                                                                },
                                                                "right": {
                                                                    "type": "string",
                                                                    "value": "env",
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                    "line": 95,
                                                                    "char": 36
                                                                },
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                "line": 95,
                                                                "char": 37
                                                            },
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                            "line": 95,
                                                            "char": 40
                                                        },
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 95,
                                                        "char": 40
                                                    },
                                                    "right": {
                                                        "type": "not",
                                                        "left": {
                                                            "type": "fcall",
                                                            "name": "in_array",
                                                            "call-type": 1,
                                                            "parameters": [
                                                                {
                                                                    "parameter": {
                                                                        "type": "property-access",
                                                                        "left": {
                                                                            "type": "variable",
                                                                            "value": "this",
                                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                            "line": 96,
                                                                            "char": 36
                                                                        },
                                                                        "right": {
                                                                            "type": "variable",
                                                                            "value": "environment",
                                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                            "line": 96,
                                                                            "char": 48
                                                                        },
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 96,
                                                                        "char": 48
                                                                    },
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                    "line": 96,
                                                                    "char": 48
                                                                },
                                                                {
                                                                    "parameter": {
                                                                        "type": "array-access",
                                                                        "left": {
                                                                            "type": "variable",
                                                                            "value": "mdw",
                                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                            "line": 96,
                                                                            "char": 53
                                                                        },
                                                                        "right": {
                                                                            "type": "string",
                                                                            "value": "env",
                                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                            "line": 96,
                                                                            "char": 59
                                                                        },
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 96,
                                                                        "char": 60
                                                                    },
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                    "line": 96,
                                                                    "char": 60
                                                                }
                                                            ],
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                            "line": 97,
                                                            "char": 17
                                                        },
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 97,
                                                        "char": 17
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 97,
                                                    "char": 17
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 98,
                                                "char": 13
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 98,
                                            "char": 13
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 98,
                                        "char": 15
                                    },
                                    "statements": [
                                        {
                                            "type": "let",
                                            "assignments": [
                                                {
                                                    "assign-type": "variable",
                                                    "operator": "assign",
                                                    "variable": "next",
                                                    "expr": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                            "line": 99,
                                                            "char": 33
                                                        },
                                                        "name": "emptyNext",
                                                        "call-type": 1,
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 99,
                                                        "char": 45
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 99,
                                                    "char": 45
                                                }
                                            ],
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 100,
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
                                                    "variable": "next",
                                                    "expr": {
                                                        "type": "mcall",
                                                        "variable": {
                                                            "type": "variable",
                                                            "value": "this",
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                            "line": 101,
                                                            "char": 33
                                                        },
                                                        "name": "resolveMiddleware",
                                                        "call-type": 1,
                                                        "parameters": [
                                                            {
                                                                "parameter": {
                                                                    "type": "array-access",
                                                                    "left": {
                                                                        "type": "variable",
                                                                        "value": "mdw",
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 101,
                                                                        "char": 55
                                                                    },
                                                                    "right": {
                                                                        "type": "string",
                                                                        "value": "middleware",
                                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                        "line": 101,
                                                                        "char": 68
                                                                    },
                                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                    "line": 101,
                                                                    "char": 69
                                                                },
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                "line": 101,
                                                                "char": 69
                                                            }
                                                        ],
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 101,
                                                        "char": 70
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 101,
                                                    "char": 70
                                                }
                                            ],
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 102,
                                            "char": 13
                                        }
                                    ],
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 103,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "variable",
                                            "operator": "assign",
                                            "variable": "next",
                                            "expr": {
                                                "type": "mcall",
                                                "variable": {
                                                    "type": "variable",
                                                    "value": "this",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 104,
                                                    "char": 29
                                                },
                                                "name": "finishNext",
                                                "call-type": 1,
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 104,
                                                "char": 42
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 104,
                                            "char": 42
                                        }
                                    ],
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 105,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 107,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "fcall",
                                "name": "next",
                                "call-type": 2,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "request",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 107,
                                            "char": 30
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 107,
                                        "char": 30
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "response",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 107,
                                            "char": 40
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 107,
                                        "char": 40
                                    },
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 107,
                                            "char": 46
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 107,
                                        "char": 46
                                    }
                                ],
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 107,
                                "char": 47
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 108,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Invocation\n     *\n     * @param RequestInterface request Request\n     * @param ResponseInterface response Response\n     * @return ResponseInterface Response\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "cast": {
                                    "type": "variable",
                                    "value": "ResponseInterface",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 79,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 79,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 79,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 75,
                    "last-line": 118,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "add",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "middleware",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 120,
                            "char": 19
                        },
                        {
                            "type": "parameter",
                            "name": "path",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 1,
                            "default": {
                                "type": "null",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 121,
                                "char": 28
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 121,
                            "char": 28
                        },
                        {
                            "type": "parameter",
                            "name": "methods",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 122,
                                "char": 29
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 122,
                            "char": 29
                        },
                        {
                            "type": "parameter",
                            "name": "environments",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "default": {
                                "type": "null",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 123,
                                "char": 34
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 123,
                            "char": 34
                        },
                        {
                            "type": "parameter",
                            "name": "index",
                            "const": 0,
                            "data-type": "int",
                            "mandatory": 1,
                            "default": {
                                "type": "int",
                                "value": "-1",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 125,
                                "char": 5
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 125,
                            "char": 5
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "array",
                            "variables": [
                                {
                                    "variable": "mdw",
                                    "expr": {
                                        "type": "array",
                                        "left": [
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "middleware",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 128,
                                                    "char": 25
                                                },
                                                "value": {
                                                    "type": "variable",
                                                    "value": "middleware",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 128,
                                                    "char": 37
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 128,
                                                "char": 37
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "path",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 129,
                                                    "char": 25
                                                },
                                                "value": {
                                                    "type": "variable",
                                                    "value": "path",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 129,
                                                    "char": 31
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 129,
                                                "char": 31
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "methods",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 130,
                                                    "char": 25
                                                },
                                                "value": {
                                                    "type": "variable",
                                                    "value": "methods",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 130,
                                                    "char": 34
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 130,
                                                "char": 34
                                            },
                                            {
                                                "key": {
                                                    "type": "string",
                                                    "value": "env",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 131,
                                                    "char": 25
                                                },
                                                "value": {
                                                    "type": "variable",
                                                    "value": "environments",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 132,
                                                    "char": 9
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 132,
                                                "char": 9
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 132,
                                        "char": 10
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 132,
                                    "char": 10
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 134,
                            "char": 10
                        },
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "and",
                                    "left": {
                                        "type": "not-identical",
                                        "left": {
                                            "type": "variable",
                                            "value": "index",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 134,
                                            "char": 21
                                        },
                                        "right": {
                                            "type": "int",
                                            "value": "-1",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 134,
                                            "char": 27
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 134,
                                        "char": 27
                                    },
                                    "right": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 134,
                                                "char": 34
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "middlewares",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 134,
                                                "char": 47
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 134,
                                            "char": 47
                                        },
                                        "name": "offsetExists",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "index",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 134,
                                                    "char": 66
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 134,
                                                "char": 66
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 134,
                                        "char": 67
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 134,
                                    "char": 67
                                },
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 134,
                                "char": 69
                            },
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 135,
                                                "char": 18
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "middlewares",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 135,
                                                "char": 31
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 135,
                                            "char": 31
                                        },
                                        "name": "add",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "index",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 135,
                                                    "char": 41
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 135,
                                                "char": 41
                                            },
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "mdw",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 135,
                                                    "char": 46
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 135,
                                                "char": 46
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 135,
                                        "char": 47
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 136,
                                    "char": 9
                                }
                            ],
                            "else_statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 137,
                                                "char": 18
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "middlewares",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 137,
                                                "char": 31
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 137,
                                            "char": 31
                                        },
                                        "name": "enqueue",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "mdw",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 137,
                                                    "char": 43
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 137,
                                                "char": 43
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 137,
                                        "char": 44
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 138,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 139,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Register one middleware\n     *\n     * @param callable|object|string|array middleware Middleware\n     * @param string path Path\n     * @param array methods Methods allowed\n     * @param array environments Environment allowed\n     * @param integer index Index of the queue\n     *",
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 126,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 119,
                    "last-line": 145,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "addList",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "middlewares",
                            "const": 0,
                            "data-type": "array",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 146,
                            "char": 46
                        }
                    ],
                    "statements": [
                        {
                            "type": "declare",
                            "data-type": "variable",
                            "variables": [
                                {
                                    "variable": "middleware",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 148,
                                    "char": 23
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 150,
                            "char": 11
                        },
                        {
                            "type": "for",
                            "expr": {
                                "type": "variable",
                                "value": "middlewares",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 150,
                                "char": 39
                            },
                            "value": "middleware",
                            "reverse": 0,
                            "statements": [
                                {
                                    "type": "mcall",
                                    "expr": {
                                        "type": "mcall",
                                        "variable": {
                                            "type": "property-access",
                                            "left": {
                                                "type": "variable",
                                                "value": "this",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 151,
                                                "char": 18
                                            },
                                            "right": {
                                                "type": "variable",
                                                "value": "middlewares",
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 151,
                                                "char": 31
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 151,
                                            "char": 31
                                        },
                                        "name": "enqueue",
                                        "call-type": 1,
                                        "parameters": [
                                            {
                                                "parameter": {
                                                    "type": "variable",
                                                    "value": "middleware",
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 151,
                                                    "char": 50
                                                },
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 151,
                                                "char": 50
                                            }
                                        ],
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 151,
                                        "char": 51
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 152,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 153,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Register middleware from an array\n     *\n     * @param array middlewares Middlewares\n     *",
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 147,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 146,
                    "last-line": 159,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getMiddlewareIndex",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 162,
                                        "char": 21
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "middlewares",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 162,
                                        "char": 34
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 162,
                                    "char": 34
                                },
                                "name": "key",
                                "call-type": 1,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 162,
                                "char": 40
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 163,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Return the current index of the middlewares queue\n     *\n     * @return integer\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "int",
                                "mandatory": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 161,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 161,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 160,
                    "last-line": 169,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setDI",
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
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 170,
                                "char": 56
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 170,
                            "char": 57
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
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 172,
                                        "char": 40
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 172,
                                    "char": 40
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 173,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Set the Service Container\n     *\n     * @param ContainerInterface container Service Container\n     *",
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 171,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 170,
                    "last-line": 179,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "getDI",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "property-access",
                                "left": {
                                    "type": "variable",
                                    "value": "this",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 182,
                                    "char": 21
                                },
                                "right": {
                                    "type": "variable",
                                    "value": "container",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 182,
                                    "char": 31
                                },
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 182,
                                "char": 31
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 183,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Get the Service Container\n     *\n     * @return ContainerInterface Service Container\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "cast": {
                                    "type": "variable",
                                    "value": "ContainerInterface",
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 181,
                                    "char": 5
                                },
                                "collection": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 181,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 181,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 180,
                    "last-line": 189,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setResolver",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "resolver",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "cast": {
                                "type": "variable",
                                "value": "ResolverInterface",
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 190,
                                "char": 60
                            },
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 190,
                            "char": 61
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
                                    "property": "resolver",
                                    "expr": {
                                        "type": "variable",
                                        "value": "resolver",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 192,
                                        "char": 38
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 192,
                                    "char": 38
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 193,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Set the Middleware Resolver\n     *\n     * @param ResolverInterface resolver Middleware Resolver\n     *",
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 191,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 190,
                    "last-line": 199,
                    "char": 19
                },
                {
                    "visibility": [
                        "public"
                    ],
                    "type": "method",
                    "name": "setEnvironment",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "environment",
                            "const": 0,
                            "data-type": "string",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 200,
                            "char": 54
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
                                    "property": "environment",
                                    "expr": {
                                        "type": "variable",
                                        "value": "environment",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 202,
                                        "char": 44
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 202,
                                    "char": 44
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 203,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Set the Environment execution\n     *\n     * @param string environment Environment\n     *",
                    "return-type": {
                        "type": "return-type",
                        "void": 1,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 201,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 200,
                    "last-line": 210,
                    "char": 19
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "resolveMiddleware",
                    "parameters": [
                        {
                            "type": "parameter",
                            "name": "middleware",
                            "const": 0,
                            "data-type": "variable",
                            "mandatory": 0,
                            "reference": 0,
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 211,
                            "char": 50
                        }
                    ],
                    "statements": [
                        {
                            "type": "if",
                            "expr": {
                                "type": "list",
                                "left": {
                                    "type": "not",
                                    "left": {
                                        "type": "property-access",
                                        "left": {
                                            "type": "variable",
                                            "value": "this",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 213,
                                            "char": 19
                                        },
                                        "right": {
                                            "type": "variable",
                                            "value": "resolver",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 213,
                                            "char": 28
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 213,
                                        "char": 28
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 213,
                                    "char": 28
                                },
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 213,
                                "char": 30
                            },
                            "statements": [
                                {
                                    "type": "let",
                                    "assignments": [
                                        {
                                            "assign-type": "object-property",
                                            "operator": "assign",
                                            "variable": "this",
                                            "property": "resolver",
                                            "expr": {
                                                "type": "new",
                                                "class": "Resolver",
                                                "dynamic": 0,
                                                "parameters": [
                                                    {
                                                        "parameter": {
                                                            "type": "property-access",
                                                            "left": {
                                                                "type": "variable",
                                                                "value": "this",
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                "line": 214,
                                                                "char": 52
                                                            },
                                                            "right": {
                                                                "type": "variable",
                                                                "value": "container",
                                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                                "line": 214,
                                                                "char": 62
                                                            },
                                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                            "line": 214,
                                                            "char": 62
                                                        },
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 214,
                                                        "char": 62
                                                    }
                                                ],
                                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                "line": 214,
                                                "char": 63
                                            },
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 214,
                                            "char": 63
                                        }
                                    ],
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 215,
                                    "char": 9
                                }
                            ],
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 217,
                            "char": 14
                        },
                        {
                            "type": "return",
                            "expr": {
                                "type": "mcall",
                                "variable": {
                                    "type": "property-access",
                                    "left": {
                                        "type": "variable",
                                        "value": "this",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 217,
                                        "char": 21
                                    },
                                    "right": {
                                        "type": "variable",
                                        "value": "resolver",
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 217,
                                        "char": 31
                                    },
                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                    "line": 217,
                                    "char": 31
                                },
                                "name": "solve",
                                "call-type": 1,
                                "parameters": [
                                    {
                                        "parameter": {
                                            "type": "variable",
                                            "value": "middleware",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 217,
                                            "char": 48
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 217,
                                        "char": 48
                                    }
                                ],
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 217,
                                "char": 49
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 218,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Solve and\/or returns an callable or instance class\n     *\n     * @param callable|string|array|object middleware Middleware\n     * @return callable|object Callable or Instance Class\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "callable",
                                "mandatory": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 211,
                                "char": 64
                            },
                            {
                                "type": "return-type-parameter",
                                "data-type": "object",
                                "mandatory": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 212,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 212,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 211,
                    "last-line": 224,
                    "char": 20
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "emptyNext",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "closure",
                                "left": [
                                    {
                                        "type": "parameter",
                                        "name": "request",
                                        "const": 0,
                                        "data-type": "variable",
                                        "mandatory": 0,
                                        "cast": {
                                            "type": "variable",
                                            "value": "RequestInterface",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 228,
                                            "char": 38
                                        },
                                        "reference": 0,
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 228,
                                        "char": 39
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
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 229,
                                            "char": 40
                                        },
                                        "reference": 0,
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 229,
                                        "char": 41
                                    },
                                    {
                                        "type": "parameter",
                                        "name": "next",
                                        "const": 0,
                                        "data-type": "callable",
                                        "mandatory": 0,
                                        "reference": 0,
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 231,
                                        "char": 9
                                    }
                                ],
                                "right": [
                                    {
                                        "type": "return",
                                        "expr": {
                                            "type": "fcall",
                                            "name": "next",
                                            "call-type": 1,
                                            "parameters": [
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "request",
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 232,
                                                        "char": 32
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 232,
                                                    "char": 32
                                                },
                                                {
                                                    "parameter": {
                                                        "type": "variable",
                                                        "value": "response",
                                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                        "line": 232,
                                                        "char": 42
                                                    },
                                                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                                    "line": 232,
                                                    "char": 42
                                                }
                                            ],
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 232,
                                            "char": 43
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 233,
                                        "char": 9
                                    }
                                ],
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 233,
                                "char": 10
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 234,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Return an empty callable\n     *\n     * @return callable Empty callable\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "callable",
                                "mandatory": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 226,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 226,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 227,
                    "last-line": 240,
                    "char": 23
                },
                {
                    "visibility": [
                        "private"
                    ],
                    "type": "method",
                    "name": "finishNext",
                    "statements": [
                        {
                            "type": "return",
                            "expr": {
                                "type": "closure",
                                "left": [
                                    {
                                        "type": "parameter",
                                        "name": "request",
                                        "const": 0,
                                        "data-type": "variable",
                                        "mandatory": 0,
                                        "cast": {
                                            "type": "variable",
                                            "value": "RequestInterface",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 244,
                                            "char": 38
                                        },
                                        "reference": 0,
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 244,
                                        "char": 39
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
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 245,
                                            "char": 40
                                        },
                                        "reference": 0,
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 245,
                                        "char": 41
                                    },
                                    {
                                        "type": "parameter",
                                        "name": "next",
                                        "const": 0,
                                        "data-type": "callable",
                                        "mandatory": 0,
                                        "reference": 0,
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 247,
                                        "char": 9
                                    }
                                ],
                                "right": [
                                    {
                                        "type": "return",
                                        "expr": {
                                            "type": "variable",
                                            "value": "response",
                                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                            "line": 248,
                                            "char": 28
                                        },
                                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                        "line": 249,
                                        "char": 9
                                    }
                                ],
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 249,
                                "char": 10
                            },
                            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                            "line": 250,
                            "char": 5
                        }
                    ],
                    "docblock": "**\n     * Return an finish callable\n     *\n     * @return callable Finish callable\n     *",
                    "return-type": {
                        "type": "return-type",
                        "list": [
                            {
                                "type": "return-type-parameter",
                                "data-type": "callable",
                                "mandatory": 0,
                                "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                                "line": 242,
                                "char": 5
                            }
                        ],
                        "void": 0,
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 242,
                        "char": 5
                    },
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 243,
                    "last-line": 251,
                    "char": 23
                }
            ],
            "constants": [
                {
                    "type": "const",
                    "name": "VERSION",
                    "default": {
                        "type": "string",
                        "value": "0.1.0",
                        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                        "line": 23,
                        "char": 28
                    },
                    "docblock": "**\n     * Version\n     *",
                    "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
                    "line": 27,
                    "char": 6
                }
            ],
            "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
            "line": 18,
            "char": 11
        },
        "file": "\/home\/daniel\/Desarrollos\/www\/TornadoHttpZephir\/dsp\/TornadoHttp\/TornadoHttp.zep",
        "line": 18,
        "char": 11
    }
]