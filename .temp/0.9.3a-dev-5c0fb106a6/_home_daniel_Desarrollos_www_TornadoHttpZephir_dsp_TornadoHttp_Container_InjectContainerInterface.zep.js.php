<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'Dsp\\TornadoHttp\\Container',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
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
        'name' => 'Interop\\Container\\ContainerInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
        'line' => 7,
        'char' => 41,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
    'line' => 13,
    'char' => 2,
  ),
  2 => 
  array (
    'type' => 'comment',
    'value' => '**
 * Dsp\\TornadoHttp\\Container\\InjectContainerInterface
 *
 * Inyect Service Container in Middleware
 *',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
    'line' => 14,
    'char' => 9,
  ),
  3 => 
  array (
    'type' => 'interface',
    'name' => 'InjectContainerInterface',
    'definition' => 
    array (
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
                  'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
                  'line' => 21,
                  'char' => 59,
                ),
                'collection' => 0,
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
                'line' => 21,
                'char' => 59,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
            'line' => 21,
            'char' => 59,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
          'line' => 21,
          'last-line' => 27,
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
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
                'line' => 28,
                'char' => 63,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
              'line' => 28,
              'char' => 64,
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
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
            'line' => 28,
            'char' => 73,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
          'line' => 28,
          'last-line' => 29,
          'char' => 19,
        ),
      ),
      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
      'line' => 29,
      'char' => 1,
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Container/InjectContainerInterface.zep',
    'line' => 0,
    'char' => 0,
  ),
);