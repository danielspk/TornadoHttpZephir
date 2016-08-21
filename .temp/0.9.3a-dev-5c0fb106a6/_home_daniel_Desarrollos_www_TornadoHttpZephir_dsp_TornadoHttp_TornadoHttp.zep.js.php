<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'Dsp\\TornadoHttp',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
    'line' => 7,
    'char' => 3,
  ),
  1 => 
  array (
    'type' => 'use',
    'aliases' => 
    array (
      0 => 
      array (
        'name' => 'Dsp\\TornadoHttp\\Resolver\\Resolver',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
        'line' => 7,
        'char' => 38,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
    'line' => 8,
    'char' => 3,
  ),
  2 => 
  array (
    'type' => 'use',
    'aliases' => 
    array (
      0 => 
      array (
        'name' => 'Dsp\\TornadoHttp\\Resolver\\ResolverInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
        'line' => 8,
        'char' => 47,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
    'line' => 9,
    'char' => 3,
  ),
  3 => 
  array (
    'type' => 'use',
    'aliases' => 
    array (
      0 => 
      array (
        'name' => 'Interop\\Container\\ContainerInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
        'line' => 9,
        'char' => 41,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
    'line' => 10,
    'char' => 3,
  ),
  4 => 
  array (
    'type' => 'use',
    'aliases' => 
    array (
      0 => 
      array (
        'name' => 'Psr\\Http\\Message\\RequestInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
        'line' => 10,
        'char' => 38,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
    'line' => 11,
    'char' => 3,
  ),
  5 => 
  array (
    'type' => 'use',
    'aliases' => 
    array (
      0 => 
      array (
        'name' => 'Psr\\Http\\Message\\ResponseInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
        'line' => 11,
        'char' => 39,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
    'line' => 17,
    'char' => 2,
  ),
  6 => 
  array (
    'type' => 'comment',
    'value' => '**
 * Dsp\\TornadoHttp\\TornadoHttp
 *
 * Middleware Queue
 *',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
    'line' => 18,
    'char' => 5,
  ),
  7 => 
  array (
    'type' => 'class',
    'name' => 'TornadoHttp',
    'abstract' => 0,
    'final' => 1,
    'definition' => 
    array (
      'properties' => 
      array (
        0 => 
        array (
          'visibility' => 
          array (
            0 => 'private',
          ),
          'type' => 'property',
          'name' => 'middlewares',
          'docblock' => '**
     * @var \\SplQueue Middleware queue
     *',
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 32,
          'char' => 6,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'private',
          ),
          'type' => 'property',
          'name' => 'container',
          'docblock' => '**
     * @var ContainerInterface Service Container
     *',
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 37,
          'char' => 6,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'private',
          ),
          'type' => 'property',
          'name' => 'resolver',
          'docblock' => '**
     * @var ResolverInterface Middleware Resolver
     *',
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 42,
          'char' => 6,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'private',
          ),
          'type' => 'property',
          'name' => 'environment',
          'docblock' => '**
     * @var string Environment
     *',
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 52,
          'char' => 6,
        ),
      ),
      'methods' => 
      array (
        0 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__construct',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'middlewares',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 54,
                'char' => 33,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 54,
              'char' => 33,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'container',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'ContainerInterface',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 55,
                'char' => 38,
              ),
              'default' => 
              array (
                'type' => 'null',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 55,
                'char' => 46,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 55,
              'char' => 46,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'resolver',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'ResolverInterface',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 56,
                'char' => 36,
              ),
              'default' => 
              array (
                'type' => 'null',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 56,
                'char' => 44,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 56,
              'char' => 44,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'environment',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'string',
                'value' => 'dev',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 58,
                'char' => 5,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 58,
              'char' => 5,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => 'middlewares',
                  'expr' => 
                  array (
                    'type' => 'new',
                    'class' => '\\SplQueue',
                    'dynamic' => 0,
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 60,
                    'char' => 48,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 60,
                  'char' => 48,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 61,
              'char' => 11,
            ),
            1 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => 'container',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'container',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 61,
                    'char' => 40,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 61,
                  'char' => 40,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 62,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => 'resolver',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'resolver',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 62,
                    'char' => 38,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 62,
                  'char' => 38,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 63,
              'char' => 11,
            ),
            3 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => 'environment',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'environment',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 63,
                    'char' => 44,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 63,
                  'char' => 44,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 65,
              'char' => 12,
            ),
            4 => 
            array (
              'type' => 'mcall',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 65,
                  'char' => 14,
                ),
                'name' => 'addList',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'middlewares',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 65,
                      'char' => 34,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 65,
                    'char' => 34,
                  ),
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 65,
                'char' => 35,
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 66,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Constructor
     *
     * @param array middlewares Middlewares
     * @param ContainerInterface container Service Container
     * @param ResolverInterface resolver Middleware Resolver
     * @param string environment Environment
     *',
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 53,
          'last-line' => 74,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => '__invoke',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'request',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'RequestInterface',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 76,
                'char' => 34,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 76,
              'char' => 35,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'response',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'ResponseInterface',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 77,
                'char' => 36,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 78,
              'char' => 5,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'declare',
              'data-type' => 'variable',
              'variables' => 
              array (
                0 => 
                array (
                  'variable' => 'next',
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 80,
                  'char' => 17,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 82,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'list',
                'left' => 
                array (
                  'type' => 'not',
                  'left' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 82,
                        'char' => 19,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'middlewares',
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 82,
                        'char' => 32,
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 82,
                      'char' => 32,
                    ),
                    'name' => 'isEmpty',
                    'call-type' => 1,
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 82,
                    'char' => 42,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 82,
                  'char' => 42,
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 82,
                'char' => 44,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'declare',
                  'data-type' => 'variable',
                  'variables' => 
                  array (
                    0 => 
                    array (
                      'variable' => 'mdw',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'property-access',
                          'left' => 
                          array (
                            'type' => 'variable',
                            'value' => 'this',
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 83,
                            'char' => 28,
                          ),
                          'right' => 
                          array (
                            'type' => 'variable',
                            'value' => 'middlewares',
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 83,
                            'char' => 41,
                          ),
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 83,
                          'char' => 41,
                        ),
                        'name' => 'dequeue',
                        'call-type' => 1,
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 83,
                        'char' => 51,
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 83,
                      'char' => 51,
                    ),
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 85,
                  'char' => 14,
                ),
                1 => 
                array (
                  'type' => 'if',
                  'expr' => 
                  array (
                    'type' => 'list',
                    'left' => 
                    array (
                      'type' => 'or',
                      'left' => 
                      array (
                        'type' => 'or',
                        'left' => 
                        array (
                          'type' => 'list',
                          'left' => 
                          array (
                            'type' => 'and',
                            'left' => 
                            array (
                              'type' => 'isset',
                              'left' => 
                              array (
                                'type' => 'list',
                                'left' => 
                                array (
                                  'type' => 'array-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'mdw',
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 87,
                                    'char' => 30,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'string',
                                    'value' => 'methods',
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 87,
                                    'char' => 40,
                                  ),
                                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                  'line' => 87,
                                  'char' => 41,
                                ),
                                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                'line' => 87,
                                'char' => 44,
                              ),
                              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                              'line' => 87,
                              'char' => 44,
                            ),
                            'right' => 
                            array (
                              'type' => 'not',
                              'left' => 
                              array (
                                'type' => 'fcall',
                                'name' => 'in_array',
                                'call-type' => 1,
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'mcall',
                                      'variable' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'request',
                                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                        'line' => 88,
                                        'char' => 39,
                                      ),
                                      'name' => 'getMethod',
                                      'call-type' => 1,
                                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                      'line' => 88,
                                      'char' => 51,
                                    ),
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 88,
                                    'char' => 51,
                                  ),
                                  1 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'array-access',
                                      'left' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'mdw',
                                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                        'line' => 88,
                                        'char' => 56,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'string',
                                        'value' => 'methods',
                                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                        'line' => 88,
                                        'char' => 66,
                                      ),
                                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                      'line' => 88,
                                      'char' => 67,
                                    ),
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 88,
                                    'char' => 67,
                                  ),
                                ),
                                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                'line' => 89,
                                'char' => 17,
                              ),
                              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                              'line' => 89,
                              'char' => 17,
                            ),
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 89,
                            'char' => 17,
                          ),
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 89,
                          'char' => 20,
                        ),
                        'right' => 
                        array (
                          'type' => 'list',
                          'left' => 
                          array (
                            'type' => 'and',
                            'left' => 
                            array (
                              'type' => 'isset',
                              'left' => 
                              array (
                                'type' => 'list',
                                'left' => 
                                array (
                                  'type' => 'array-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'mdw',
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 91,
                                    'char' => 30,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'string',
                                    'value' => 'path',
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 91,
                                    'char' => 37,
                                  ),
                                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                  'line' => 91,
                                  'char' => 38,
                                ),
                                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                'line' => 91,
                                'char' => 41,
                              ),
                              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                              'line' => 91,
                              'char' => 41,
                            ),
                            'right' => 
                            array (
                              'type' => 'not-identical',
                              'left' => 
                              array (
                                'type' => 'fcall',
                                'name' => 'preg_match',
                                'call-type' => 1,
                                'parameters' => 
                                array (
                                  0 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'array-access',
                                      'left' => 
                                      array (
                                        'type' => 'variable',
                                        'value' => 'mdw',
                                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                        'line' => 92,
                                        'char' => 35,
                                      ),
                                      'right' => 
                                      array (
                                        'type' => 'string',
                                        'value' => 'path',
                                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                        'line' => 92,
                                        'char' => 42,
                                      ),
                                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                      'line' => 92,
                                      'char' => 43,
                                    ),
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 92,
                                    'char' => 43,
                                  ),
                                  1 => 
                                  array (
                                    'parameter' => 
                                    array (
                                      'type' => 'mcall',
                                      'variable' => 
                                      array (
                                        'type' => 'mcall',
                                        'variable' => 
                                        array (
                                          'type' => 'variable',
                                          'value' => 'request',
                                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                          'line' => 92,
                                          'char' => 53,
                                        ),
                                        'name' => 'getUri',
                                        'call-type' => 1,
                                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                        'line' => 92,
                                        'char' => 63,
                                      ),
                                      'name' => 'getPath',
                                      'call-type' => 1,
                                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                      'line' => 92,
                                      'char' => 73,
                                    ),
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 92,
                                    'char' => 73,
                                  ),
                                ),
                                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                'line' => 92,
                                'char' => 77,
                              ),
                              'right' => 
                              array (
                                'type' => 'int',
                                'value' => '1',
                                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                'line' => 93,
                                'char' => 17,
                              ),
                              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                              'line' => 93,
                              'char' => 17,
                            ),
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 93,
                            'char' => 17,
                          ),
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 93,
                          'char' => 20,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 93,
                        'char' => 20,
                      ),
                      'right' => 
                      array (
                        'type' => 'list',
                        'left' => 
                        array (
                          'type' => 'and',
                          'left' => 
                          array (
                            'type' => 'isset',
                            'left' => 
                            array (
                              'type' => 'list',
                              'left' => 
                              array (
                                'type' => 'array-access',
                                'left' => 
                                array (
                                  'type' => 'variable',
                                  'value' => 'mdw',
                                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                  'line' => 95,
                                  'char' => 30,
                                ),
                                'right' => 
                                array (
                                  'type' => 'string',
                                  'value' => 'env',
                                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                  'line' => 95,
                                  'char' => 36,
                                ),
                                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                'line' => 95,
                                'char' => 37,
                              ),
                              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                              'line' => 95,
                              'char' => 40,
                            ),
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 95,
                            'char' => 40,
                          ),
                          'right' => 
                          array (
                            'type' => 'not',
                            'left' => 
                            array (
                              'type' => 'fcall',
                              'name' => 'in_array',
                              'call-type' => 1,
                              'parameters' => 
                              array (
                                0 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'property-access',
                                    'left' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'this',
                                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                      'line' => 96,
                                      'char' => 36,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'environment',
                                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                      'line' => 96,
                                      'char' => 48,
                                    ),
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 96,
                                    'char' => 48,
                                  ),
                                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                  'line' => 96,
                                  'char' => 48,
                                ),
                                1 => 
                                array (
                                  'parameter' => 
                                  array (
                                    'type' => 'array-access',
                                    'left' => 
                                    array (
                                      'type' => 'variable',
                                      'value' => 'mdw',
                                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                      'line' => 96,
                                      'char' => 53,
                                    ),
                                    'right' => 
                                    array (
                                      'type' => 'string',
                                      'value' => 'env',
                                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                      'line' => 96,
                                      'char' => 59,
                                    ),
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 96,
                                    'char' => 60,
                                  ),
                                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                  'line' => 96,
                                  'char' => 60,
                                ),
                              ),
                              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                              'line' => 97,
                              'char' => 17,
                            ),
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 97,
                            'char' => 17,
                          ),
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 97,
                          'char' => 17,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 98,
                        'char' => 13,
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 98,
                      'char' => 13,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 98,
                    'char' => 15,
                  ),
                  'statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'let',
                      'assignments' => 
                      array (
                        0 => 
                        array (
                          'assign-type' => 'variable',
                          'operator' => 'assign',
                          'variable' => 'next',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                              'line' => 99,
                              'char' => 33,
                            ),
                            'name' => 'emptyNext',
                            'call-type' => 1,
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 99,
                            'char' => 45,
                          ),
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 99,
                          'char' => 45,
                        ),
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 100,
                      'char' => 13,
                    ),
                  ),
                  'else_statements' => 
                  array (
                    0 => 
                    array (
                      'type' => 'let',
                      'assignments' => 
                      array (
                        0 => 
                        array (
                          'assign-type' => 'variable',
                          'operator' => 'assign',
                          'variable' => 'next',
                          'expr' => 
                          array (
                            'type' => 'mcall',
                            'variable' => 
                            array (
                              'type' => 'variable',
                              'value' => 'this',
                              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                              'line' => 101,
                              'char' => 33,
                            ),
                            'name' => 'resolveMiddleware',
                            'call-type' => 1,
                            'parameters' => 
                            array (
                              0 => 
                              array (
                                'parameter' => 
                                array (
                                  'type' => 'array-access',
                                  'left' => 
                                  array (
                                    'type' => 'variable',
                                    'value' => 'mdw',
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 101,
                                    'char' => 55,
                                  ),
                                  'right' => 
                                  array (
                                    'type' => 'string',
                                    'value' => 'middleware',
                                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                    'line' => 101,
                                    'char' => 68,
                                  ),
                                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                  'line' => 101,
                                  'char' => 69,
                                ),
                                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                'line' => 101,
                                'char' => 69,
                              ),
                            ),
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 101,
                            'char' => 70,
                          ),
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 101,
                          'char' => 70,
                        ),
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 102,
                      'char' => 13,
                    ),
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 103,
                  'char' => 9,
                ),
              ),
              'else_statements' => 
              array (
                0 => 
                array (
                  'type' => 'let',
                  'assignments' => 
                  array (
                    0 => 
                    array (
                      'assign-type' => 'variable',
                      'operator' => 'assign',
                      'variable' => 'next',
                      'expr' => 
                      array (
                        'type' => 'mcall',
                        'variable' => 
                        array (
                          'type' => 'variable',
                          'value' => 'this',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 104,
                          'char' => 29,
                        ),
                        'name' => 'finishNext',
                        'call-type' => 1,
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 104,
                        'char' => 42,
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 104,
                      'char' => 42,
                    ),
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 105,
                  'char' => 9,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 107,
              'char' => 14,
            ),
            2 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'fcall',
                'name' => 'next',
                'call-type' => 2,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'request',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 107,
                      'char' => 30,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 107,
                    'char' => 30,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 107,
                      'char' => 40,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 107,
                    'char' => 40,
                  ),
                  2 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 107,
                      'char' => 46,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 107,
                    'char' => 46,
                  ),
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 107,
                'char' => 47,
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 108,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Invocation
     *
     * @param RequestInterface request Request
     * @param ResponseInterface response Response
     * @return ResponseInterface Response
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'cast' => 
                array (
                  'type' => 'variable',
                  'value' => 'ResponseInterface',
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 79,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 79,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 79,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 75,
          'last-line' => 118,
          'char' => 19,
        ),
        2 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'add',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'middleware',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 120,
              'char' => 19,
            ),
            1 => 
            array (
              'type' => 'parameter',
              'name' => 'path',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 1,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 121,
                'char' => 28,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 121,
              'char' => 28,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'methods',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 122,
                'char' => 29,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 122,
              'char' => 29,
            ),
            3 => 
            array (
              'type' => 'parameter',
              'name' => 'environments',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'default' => 
              array (
                'type' => 'null',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 123,
                'char' => 34,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 123,
              'char' => 34,
            ),
            4 => 
            array (
              'type' => 'parameter',
              'name' => 'index',
              'const' => 0,
              'data-type' => 'int',
              'mandatory' => 1,
              'default' => 
              array (
                'type' => 'int',
                'value' => '-1',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 125,
                'char' => 5,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 125,
              'char' => 5,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'declare',
              'data-type' => 'array',
              'variables' => 
              array (
                0 => 
                array (
                  'variable' => 'mdw',
                  'expr' => 
                  array (
                    'type' => 'array',
                    'left' => 
                    array (
                      0 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'middleware',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 128,
                          'char' => 25,
                        ),
                        'value' => 
                        array (
                          'type' => 'variable',
                          'value' => 'middleware',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 128,
                          'char' => 37,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 128,
                        'char' => 37,
                      ),
                      1 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'path',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 129,
                          'char' => 25,
                        ),
                        'value' => 
                        array (
                          'type' => 'variable',
                          'value' => 'path',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 129,
                          'char' => 31,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 129,
                        'char' => 31,
                      ),
                      2 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'methods',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 130,
                          'char' => 25,
                        ),
                        'value' => 
                        array (
                          'type' => 'variable',
                          'value' => 'methods',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 130,
                          'char' => 34,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 130,
                        'char' => 34,
                      ),
                      3 => 
                      array (
                        'key' => 
                        array (
                          'type' => 'string',
                          'value' => 'env',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 131,
                          'char' => 25,
                        ),
                        'value' => 
                        array (
                          'type' => 'variable',
                          'value' => 'environments',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 132,
                          'char' => 9,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 132,
                        'char' => 9,
                      ),
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 132,
                    'char' => 10,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 132,
                  'char' => 10,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 134,
              'char' => 10,
            ),
            1 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'list',
                'left' => 
                array (
                  'type' => 'and',
                  'left' => 
                  array (
                    'type' => 'not-identical',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'index',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 134,
                      'char' => 21,
                    ),
                    'right' => 
                    array (
                      'type' => 'int',
                      'value' => '-1',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 134,
                      'char' => 27,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 134,
                    'char' => 27,
                  ),
                  'right' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 134,
                        'char' => 34,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'middlewares',
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 134,
                        'char' => 47,
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 134,
                      'char' => 47,
                    ),
                    'name' => 'offsetExists',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'index',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 134,
                          'char' => 66,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 134,
                        'char' => 66,
                      ),
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 134,
                    'char' => 67,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 134,
                  'char' => 67,
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 134,
                'char' => 69,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'mcall',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 135,
                        'char' => 18,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'middlewares',
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 135,
                        'char' => 31,
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 135,
                      'char' => 31,
                    ),
                    'name' => 'add',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'index',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 135,
                          'char' => 41,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 135,
                        'char' => 41,
                      ),
                      1 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'mdw',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 135,
                          'char' => 46,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 135,
                        'char' => 46,
                      ),
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 135,
                    'char' => 47,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 136,
                  'char' => 9,
                ),
              ),
              'else_statements' => 
              array (
                0 => 
                array (
                  'type' => 'mcall',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 137,
                        'char' => 18,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'middlewares',
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 137,
                        'char' => 31,
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 137,
                      'char' => 31,
                    ),
                    'name' => 'enqueue',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'mdw',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 137,
                          'char' => 43,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 137,
                        'char' => 43,
                      ),
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 137,
                    'char' => 44,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 138,
                  'char' => 9,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 139,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Register one middleware
     *
     * @param callable|object|string|array middleware Middleware
     * @param string path Path
     * @param array methods Methods allowed
     * @param array environments Environment allowed
     * @param integer index Index of the queue
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 126,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 119,
          'last-line' => 145,
          'char' => 19,
        ),
        3 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'addList',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'middlewares',
              'const' => 0,
              'data-type' => 'array',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 146,
              'char' => 46,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'declare',
              'data-type' => 'variable',
              'variables' => 
              array (
                0 => 
                array (
                  'variable' => 'middleware',
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 148,
                  'char' => 23,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 150,
              'char' => 11,
            ),
            1 => 
            array (
              'type' => 'for',
              'expr' => 
              array (
                'type' => 'variable',
                'value' => 'middlewares',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 150,
                'char' => 39,
              ),
              'value' => 'middleware',
              'reverse' => 0,
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'mcall',
                  'expr' => 
                  array (
                    'type' => 'mcall',
                    'variable' => 
                    array (
                      'type' => 'property-access',
                      'left' => 
                      array (
                        'type' => 'variable',
                        'value' => 'this',
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 151,
                        'char' => 18,
                      ),
                      'right' => 
                      array (
                        'type' => 'variable',
                        'value' => 'middlewares',
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 151,
                        'char' => 31,
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 151,
                      'char' => 31,
                    ),
                    'name' => 'enqueue',
                    'call-type' => 1,
                    'parameters' => 
                    array (
                      0 => 
                      array (
                        'parameter' => 
                        array (
                          'type' => 'variable',
                          'value' => 'middleware',
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 151,
                          'char' => 50,
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 151,
                        'char' => 50,
                      ),
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 151,
                    'char' => 51,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 152,
                  'char' => 9,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 153,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Register middleware from an array
     *
     * @param array middlewares Middlewares
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 147,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 146,
          'last-line' => 159,
          'char' => 19,
        ),
        4 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getMiddlewareIndex',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 162,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'middlewares',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 162,
                    'char' => 34,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 162,
                  'char' => 34,
                ),
                'name' => 'key',
                'call-type' => 1,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 162,
                'char' => 40,
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 163,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Return the current index of the middlewares queue
     *
     * @return integer
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'int',
                'mandatory' => 0,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 161,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 161,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 160,
          'last-line' => 169,
          'char' => 19,
        ),
        5 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setDI',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'container',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'ContainerInterface',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 170,
                'char' => 56,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 170,
              'char' => 57,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => 'container',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'container',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 172,
                    'char' => 40,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 172,
                  'char' => 40,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 173,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Set the Service Container
     *
     * @param ContainerInterface container Service Container
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 171,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 170,
          'last-line' => 179,
          'char' => 19,
        ),
        6 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'getDI',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'property-access',
                'left' => 
                array (
                  'type' => 'variable',
                  'value' => 'this',
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 182,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'container',
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 182,
                  'char' => 31,
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 182,
                'char' => 31,
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 183,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Get the Service Container
     *
     * @return ContainerInterface Service Container
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'cast' => 
                array (
                  'type' => 'variable',
                  'value' => 'ContainerInterface',
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 181,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 181,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 181,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 180,
          'last-line' => 189,
          'char' => 19,
        ),
        7 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setResolver',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'resolver',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'ResolverInterface',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 190,
                'char' => 60,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 190,
              'char' => 61,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => 'resolver',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'resolver',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 192,
                    'char' => 38,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 192,
                  'char' => 38,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 193,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Set the Middleware Resolver
     *
     * @param ResolverInterface resolver Middleware Resolver
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 191,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 190,
          'last-line' => 199,
          'char' => 19,
        ),
        8 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setEnvironment',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'environment',
              'const' => 0,
              'data-type' => 'string',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 200,
              'char' => 54,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'object-property',
                  'operator' => 'assign',
                  'variable' => 'this',
                  'property' => 'environment',
                  'expr' => 
                  array (
                    'type' => 'variable',
                    'value' => 'environment',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 202,
                    'char' => 44,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 202,
                  'char' => 44,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 203,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Set the Environment execution
     *
     * @param string environment Environment
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 201,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 200,
          'last-line' => 210,
          'char' => 19,
        ),
        9 => 
        array (
          'visibility' => 
          array (
            0 => 'private',
          ),
          'type' => 'method',
          'name' => 'resolveMiddleware',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'middleware',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 211,
              'char' => 50,
            ),
          ),
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'if',
              'expr' => 
              array (
                'type' => 'list',
                'left' => 
                array (
                  'type' => 'not',
                  'left' => 
                  array (
                    'type' => 'property-access',
                    'left' => 
                    array (
                      'type' => 'variable',
                      'value' => 'this',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 213,
                      'char' => 19,
                    ),
                    'right' => 
                    array (
                      'type' => 'variable',
                      'value' => 'resolver',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 213,
                      'char' => 28,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 213,
                    'char' => 28,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 213,
                  'char' => 28,
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 213,
                'char' => 30,
              ),
              'statements' => 
              array (
                0 => 
                array (
                  'type' => 'let',
                  'assignments' => 
                  array (
                    0 => 
                    array (
                      'assign-type' => 'object-property',
                      'operator' => 'assign',
                      'variable' => 'this',
                      'property' => 'resolver',
                      'expr' => 
                      array (
                        'type' => 'new',
                        'class' => 'Resolver',
                        'dynamic' => 0,
                        'parameters' => 
                        array (
                          0 => 
                          array (
                            'parameter' => 
                            array (
                              'type' => 'property-access',
                              'left' => 
                              array (
                                'type' => 'variable',
                                'value' => 'this',
                                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                'line' => 214,
                                'char' => 52,
                              ),
                              'right' => 
                              array (
                                'type' => 'variable',
                                'value' => 'container',
                                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                                'line' => 214,
                                'char' => 62,
                              ),
                              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                              'line' => 214,
                              'char' => 62,
                            ),
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 214,
                            'char' => 62,
                          ),
                        ),
                        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                        'line' => 214,
                        'char' => 63,
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 214,
                      'char' => 63,
                    ),
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 215,
                  'char' => 9,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 217,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'mcall',
                'variable' => 
                array (
                  'type' => 'property-access',
                  'left' => 
                  array (
                    'type' => 'variable',
                    'value' => 'this',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 217,
                    'char' => 21,
                  ),
                  'right' => 
                  array (
                    'type' => 'variable',
                    'value' => 'resolver',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 217,
                    'char' => 31,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                  'line' => 217,
                  'char' => 31,
                ),
                'name' => 'solve',
                'call-type' => 1,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'middleware',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 217,
                      'char' => 48,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 217,
                    'char' => 48,
                  ),
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 217,
                'char' => 49,
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 218,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Solve and/or returns an callable or instance class
     *
     * @param callable|string|array|object middleware Middleware
     * @return callable|object Callable or Instance Class
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'callable',
                'mandatory' => 0,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 211,
                'char' => 64,
              ),
              1 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'object',
                'mandatory' => 0,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 212,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 212,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 211,
          'last-line' => 224,
          'char' => 20,
        ),
        10 => 
        array (
          'visibility' => 
          array (
            0 => 'private',
          ),
          'type' => 'method',
          'name' => 'emptyNext',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'closure',
                'left' => 
                array (
                  0 => 
                  array (
                    'type' => 'parameter',
                    'name' => 'request',
                    'const' => 0,
                    'data-type' => 'variable',
                    'mandatory' => 0,
                    'cast' => 
                    array (
                      'type' => 'variable',
                      'value' => 'RequestInterface',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 228,
                      'char' => 38,
                    ),
                    'reference' => 0,
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 228,
                    'char' => 39,
                  ),
                  1 => 
                  array (
                    'type' => 'parameter',
                    'name' => 'response',
                    'const' => 0,
                    'data-type' => 'variable',
                    'mandatory' => 0,
                    'cast' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ResponseInterface',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 229,
                      'char' => 40,
                    ),
                    'reference' => 0,
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 229,
                    'char' => 41,
                  ),
                  2 => 
                  array (
                    'type' => 'parameter',
                    'name' => 'next',
                    'const' => 0,
                    'data-type' => 'callable',
                    'mandatory' => 0,
                    'reference' => 0,
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 231,
                    'char' => 9,
                  ),
                ),
                'right' => 
                array (
                  0 => 
                  array (
                    'type' => 'return',
                    'expr' => 
                    array (
                      'type' => 'fcall',
                      'name' => 'next',
                      'call-type' => 1,
                      'parameters' => 
                      array (
                        0 => 
                        array (
                          'parameter' => 
                          array (
                            'type' => 'variable',
                            'value' => 'request',
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 232,
                            'char' => 32,
                          ),
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 232,
                          'char' => 32,
                        ),
                        1 => 
                        array (
                          'parameter' => 
                          array (
                            'type' => 'variable',
                            'value' => 'response',
                            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                            'line' => 232,
                            'char' => 42,
                          ),
                          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                          'line' => 232,
                          'char' => 42,
                        ),
                      ),
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 232,
                      'char' => 43,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 233,
                    'char' => 9,
                  ),
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 233,
                'char' => 10,
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 234,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Return an empty callable
     *
     * @return callable Empty callable
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'callable',
                'mandatory' => 0,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 226,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 226,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 227,
          'last-line' => 240,
          'char' => 23,
        ),
        11 => 
        array (
          'visibility' => 
          array (
            0 => 'private',
          ),
          'type' => 'method',
          'name' => 'finishNext',
          'statements' => 
          array (
            0 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'closure',
                'left' => 
                array (
                  0 => 
                  array (
                    'type' => 'parameter',
                    'name' => 'request',
                    'const' => 0,
                    'data-type' => 'variable',
                    'mandatory' => 0,
                    'cast' => 
                    array (
                      'type' => 'variable',
                      'value' => 'RequestInterface',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 244,
                      'char' => 38,
                    ),
                    'reference' => 0,
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 244,
                    'char' => 39,
                  ),
                  1 => 
                  array (
                    'type' => 'parameter',
                    'name' => 'response',
                    'const' => 0,
                    'data-type' => 'variable',
                    'mandatory' => 0,
                    'cast' => 
                    array (
                      'type' => 'variable',
                      'value' => 'ResponseInterface',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 245,
                      'char' => 40,
                    ),
                    'reference' => 0,
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 245,
                    'char' => 41,
                  ),
                  2 => 
                  array (
                    'type' => 'parameter',
                    'name' => 'next',
                    'const' => 0,
                    'data-type' => 'callable',
                    'mandatory' => 0,
                    'reference' => 0,
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 247,
                    'char' => 9,
                  ),
                ),
                'right' => 
                array (
                  0 => 
                  array (
                    'type' => 'return',
                    'expr' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                      'line' => 248,
                      'char' => 28,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                    'line' => 249,
                    'char' => 9,
                  ),
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 249,
                'char' => 10,
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
              'line' => 250,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Return an finish callable
     *
     * @return callable Finish callable
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'list' => 
            array (
              0 => 
              array (
                'type' => 'return-type-parameter',
                'data-type' => 'callable',
                'mandatory' => 0,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
                'line' => 242,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 242,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 243,
          'last-line' => 251,
          'char' => 23,
        ),
      ),
      'constants' => 
      array (
        0 => 
        array (
          'type' => 'const',
          'name' => 'VERSION',
          'default' => 
          array (
            'type' => 'string',
            'value' => '0.1.0',
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
            'line' => 23,
            'char' => 28,
          ),
          'docblock' => '**
     * Version
     *',
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
          'line' => 27,
          'char' => 6,
        ),
      ),
      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
      'line' => 18,
      'char' => 11,
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/TornadoHttp.zep',
    'line' => 18,
    'char' => 11,
  ),
);