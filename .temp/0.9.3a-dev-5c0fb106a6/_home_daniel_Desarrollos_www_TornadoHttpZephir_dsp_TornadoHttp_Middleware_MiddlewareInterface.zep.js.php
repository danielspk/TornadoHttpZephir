<?php return array (
  0 => 
  array (
    'type' => 'namespace',
    'name' => 'Dsp\\TornadoHttp\\Middleware',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
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
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
        'line' => 7,
        'char' => 41,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
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
        'name' => 'Psr\\Http\\Message\\RequestInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
        'line' => 8,
        'char' => 38,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
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
        'name' => 'Psr\\Http\\Message\\ResponseInterface',
        'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
        'line' => 9,
        'char' => 39,
      ),
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
    'line' => 15,
    'char' => 2,
  ),
  4 => 
  array (
    'type' => 'comment',
    'value' => '**
 * Dsp\\TornadoHttp\\Middleware\\MiddlewareInterface
 *
 * Middleware Interface
 *',
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
    'line' => 16,
    'char' => 9,
  ),
  5 => 
  array (
    'type' => 'interface',
    'name' => 'MiddlewareInterface',
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
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
                'line' => 26,
                'char' => 55,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
              'line' => 26,
              'char' => 56,
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
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
                'line' => 26,
                'char' => 85,
              ),
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
              'line' => 26,
              'char' => 86,
            ),
            2 => 
            array (
              'type' => 'parameter',
              'name' => 'next',
              'const' => 0,
              'data-type' => 'callable',
              'mandatory' => 0,
              'reference' => 0,
              'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
              'line' => 26,
              'char' => 101,
            ),
          ),
          'docblock' => '**
     * Invocation
     *
     * @param RequestInterface request Request
     * @param ResponseInterface response Response
     * @param callable next Next middleware
     * @return callable Callable middleware
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
                'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
                'line' => 26,
                'char' => 114,
              ),
            ),
            'void' => 0,
            'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
            'line' => 26,
            'char' => 114,
          ),
          'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
          'line' => 26,
          'last-line' => 27,
          'char' => 19,
        ),
      ),
      'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
      'line' => 27,
      'char' => 1,
    ),
    'file' => '/home/daniel/Desarrollos/www/TornadoHttpZephir/dsp/TornadoHttp/Middleware/MiddlewareInterface.zep',
    'line' => 0,
    'char' => 0,
  ),
);