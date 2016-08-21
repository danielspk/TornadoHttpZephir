<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit83b94f50d8fe07e0f8ecb8ab4166bb18
{
    public static $prefixLengthsPsr4 = array (
        'Z' => 
        array (
            'Zend\\ServiceManager\\' => 20,
            'Zend\\Diactoros\\' => 15,
        ),
        'P' => 
        array (
            'Psr\\Http\\Message\\' => 17,
        ),
        'I' => 
        array (
            'Interop\\Container\\' => 18,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Zend\\ServiceManager\\' => 
        array (
            0 => __DIR__ . '/..' . '/zendframework/zend-servicemanager/src',
        ),
        'Zend\\Diactoros\\' => 
        array (
            0 => __DIR__ . '/..' . '/zendframework/zend-diactoros/src',
        ),
        'Psr\\Http\\Message\\' => 
        array (
            0 => __DIR__ . '/..' . '/psr/http-message/src',
        ),
        'Interop\\Container\\' => 
        array (
            0 => __DIR__ . '/..' . '/container-interop/container-interop/src/Interop/Container',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit83b94f50d8fe07e0f8ecb8ab4166bb18::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit83b94f50d8fe07e0f8ecb8ab4166bb18::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
