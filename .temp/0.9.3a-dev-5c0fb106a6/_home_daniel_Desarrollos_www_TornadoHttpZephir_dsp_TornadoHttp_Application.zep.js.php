<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'Dsp\\TornadoHttp',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
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
        'name' => 'Psr\\Http\\Message\\ResponseInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
        'line' => 7,
        'char' => 39,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
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
        'name' => 'Zend\\Diactoros\\Response',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
        'line' => 8,
        'char' => 28,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
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
        'name' => 'Zend\\Diactoros\\ServerRequestFactory',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
        'line' => 9,
        'char' => 40,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
    'line' => 15,
    'char' => 2,
  ),
  4 => 
  array (
    'type' => 'comment',
    'value' => '**
 * Dsp\\TornadoHttp\\Application
 *
 * Tornado Http Global Application
 *',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
    'line' => 16,
    'char' => 5,
  ),
  5 => 
  array (
    'type' => 'class',
    'name' => 'Application',
    'abstract' => 0,
    'final' => 1,
    'definition' => 
    array (
      'methods' => 
      array (
        0 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
            1 => 'static',
          ),
          'type' => 'method',
          'name' => 'invoke',
          'parameters' => 
          array (
            0 => 
            array (
              'type' => 'parameter',
              'name' => 'tornadoHttp',
              'const' => 0,
              'data-type' => 'variable',
              'mandatory' => 0,
              'cast' => 
              array (
                'type' => 'variable',
                'value' => 'TornadoHttp',
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                'line' => 24,
                'char' => 59,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
              'line' => 24,
              'char' => 60,
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
                  'variable' => 'request',
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                  'line' => 26,
                  'char' => 20,
                ),
                1 => 
                array (
                  'variable' => 'response',
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                  'line' => 26,
                  'char' => 30,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
              'line' => 27,
              'char' => 14,
            ),
            1 => 
            array (
              'type' => 'declare',
              'data-type' => 'string',
              'variables' => 
              array (
                0 => 
                array (
                  'variable' => 'requestFactory',
                  'expr' => 
                  array (
                    'type' => 'string',
                    'value' => '\\\\Zend\\\\Diactoros\\\\ServerRequestFactory',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                    'line' => 27,
                    'char' => 74,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                  'line' => 27,
                  'char' => 74,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
              'line' => 29,
              'char' => 11,
            ),
            2 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'request',
                  'expr' => 
                  array (
                    'type' => 'scall',
                    'dynamic-class' => 1,
                    'class' => 'requestFactory',
                    'dynamic' => 0,
                    'name' => 'fromGlobals',
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                    'line' => 29,
                    'char' => 54,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                  'line' => 29,
                  'char' => 54,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
              'line' => 30,
              'char' => 11,
            ),
            3 => 
            array (
              'type' => 'let',
              'assignments' => 
              array (
                0 => 
                array (
                  'assign-type' => 'variable',
                  'operator' => 'assign',
                  'variable' => 'response',
                  'expr' => 
                  array (
                    'type' => 'new',
                    'class' => 'Response',
                    'dynamic' => 0,
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                    'line' => 30,
                    'char' => 38,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                  'line' => 30,
                  'char' => 38,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
              'line' => 32,
              'char' => 14,
            ),
            4 => 
            array (
              'type' => 'return',
              'expr' => 
              array (
                'type' => 'fcall',
                'name' => 'tornadoHttp',
                'call-type' => 2,
                'parameters' => 
                array (
                  0 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'request',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                      'line' => 32,
                      'char' => 37,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                    'line' => 32,
                    'char' => 37,
                  ),
                  1 => 
                  array (
                    'parameter' => 
                    array (
                      'type' => 'variable',
                      'value' => 'response',
                      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                      'line' => 32,
                      'char' => 47,
                    ),
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                    'line' => 32,
                    'char' => 47,
                  ),
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                'line' => 32,
                'char' => 48,
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
              'line' => 33,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Invoke from global request
     *
     * @param TornadoHttp TornadoHttp Middleware Queue
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
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                  'line' => 25,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
                'line' => 25,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
            'line' => 25,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
          'line' => 24,
          'last-line' => 34,
          'char' => 26,
        ),
      ),
      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
      'line' => 16,
      'char' => 11,
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Application.zep',
    'line' => 16,
    'char' => 11,
  ),
);