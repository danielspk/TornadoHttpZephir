<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'Dsp\\TornadoHttp\\Middleware',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
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
        'name' => 'Dsp\\TornadoHttp\\Container\\InjectContainerInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
        'line' => 7,
        'char' => 55,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
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
        'name' => 'Interop\\Container\\ContainerInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
        'line' => 8,
        'char' => 41,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
    'line' => 14,
    'char' => 2,
  ),
  3 => 
  array (
    'type' => 'comment',
    'value' => '**
 * Dsp\\TornadoHttp\\Middleware\\Middleware
 *
 * Middleware
 *',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
    'line' => 15,
    'char' => 8,
  ),
  4 => 
  array (
    'type' => 'class',
    'name' => 'Middleware',
    'abstract' => 1,
    'final' => 0,
    'implements' => 
    array (
      0 => 
      array (
        'type' => 'variable',
        'value' => 'MiddlewareInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
        'line' => 15,
        'char' => 57,
      ),
      1 => 
      array (
        'type' => 'variable',
        'value' => 'InjectContainerInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
        'line' => 16,
        'char' => 1,
      ),
    ),
    'definition' => 
    array (
      'properties' => 
      array (
        0 => 
        array (
          'visibility' => 
          array (
            0 => 'protected',
          ),
          'type' => 'property',
          'name' => 'container',
          'docblock' => '**
     * @var ContainerInterface Service Container
     *',
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
          'line' => 26,
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
          'name' => 'getContainer',
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
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
                  'line' => 29,
                  'char' => 21,
                ),
                'right' => 
                array (
                  'type' => 'variable',
                  'value' => 'container',
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
                  'line' => 29,
                  'char' => 31,
                ),
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
                'line' => 29,
                'char' => 31,
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
              'line' => 30,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Get Service Container
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
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
                  'line' => 28,
                  'char' => 5,
                ),
                'collection' => 0,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
                'line' => 28,
                'char' => 5,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
            'line' => 28,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
          'line' => 27,
          'last-line' => 36,
          'char' => 19,
        ),
        1 => 
        array (
          'visibility' => 
          array (
            0 => 'public',
          ),
          'type' => 'method',
          'name' => 'setContainer',
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
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
                'line' => 37,
                'char' => 63,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
              'line' => 37,
              'char' => 64,
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
                    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
                    'line' => 39,
                    'char' => 40,
                  ),
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
                  'line' => 39,
                  'char' => 40,
                ),
              ),
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
              'line' => 40,
              'char' => 5,
            ),
          ),
          'docblock' => '**
     * Set Service Container
     *
     * @param ContainerInterface container Service Container
     *',
          'return-type' => 
          array (
            'type' => 'return-type',
            'void' => 1,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
            'line' => 38,
            'char' => 5,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
          'line' => 37,
          'last-line' => 41,
          'char' => 19,
        ),
      ),
      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
      'line' => 15,
      'char' => 14,
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/Middleware.zep',
    'line' => 15,
    'char' => 14,
  ),
);