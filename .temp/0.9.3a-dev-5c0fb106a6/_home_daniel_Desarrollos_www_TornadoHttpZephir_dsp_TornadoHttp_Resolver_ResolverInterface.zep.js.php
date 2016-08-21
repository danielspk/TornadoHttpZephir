<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'Dsp\\TornadoHttp\\Resolver',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Resolver/ResolverInterface.zep',
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
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Resolver/ResolverInterface.zep',
        'line' => 7,
        'char' => 41,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Resolver/ResolverInterface.zep',
    'line' => 13,
    'char' => 2,
  ),
  2 => 
  array (
    'type' => 'comment',
    'value' => '**
 * Dsp\\TornadoHttp\\Resolver\\ResolverInterface
 *
 * Middleware Resolver Interface
 *',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Resolver/ResolverInterface.zep',
    'line' => 14,
    'char' => 9,
  ),
  3 => 
  array (
    'type' => 'interface',
    'name' => 'ResolverInterface',
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
          'name' => 'solve',
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
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Resolver/ResolverInterface.zep',
              'line' => 22,
              'char' => 37,
            ),
          ),
          'docblock' => '**
     * Resolve middleware
     *
     * @param callable|string|array|object middleware Middleware
     * @return callable Callable
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
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Resolver/ResolverInterface.zep',
                'line' => 22,
                'char' => 50,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Resolver/ResolverInterface.zep',
            'line' => 22,
            'char' => 50,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Resolver/ResolverInterface.zep',
          'line' => 22,
          'last-line' => 23,
          'char' => 19,
        ),
      ),
      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Resolver/ResolverInterface.zep',
      'line' => 23,
      'char' => 1,
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Resolver/ResolverInterface.zep',
    'line' => 0,
    'char' => 0,
  ),
);