<?php

use Psr\Http\Message\RequestInterface as RequestInterface;
use Psr\Http\Message\ResponseInterface as ResponseInterface;
use Zend\Diactoros\Response;
use Zend\Diactoros\Response\JsonResponse;
use Zend\Diactoros\Response\SapiEmitter;
use Zend\Diactoros\ServerRequestFactory;
use Zend\ServiceManager\ServiceManager;

require 'vendor/autoload.php';

$container = new ServiceManager(
    [
        'factories' => [],
        'shared' => []
    ]
);

$mdw0 = function(RequestInterface $request, ResponseInterface $response, callable $next) {
    $response = $response->withStatus(201);
    return $next($request, $response);
};

$mdw1 = function(RequestInterface $request, ResponseInterface $response, callable $next) {
    $response = new JsonResponse(['hello' => 'TornadoHttp'], $response->getStatusCode());
    return $next($request, $response);
};

$mdw2 = function(RequestInterface $request, ResponseInterface $response, callable $next) {
    $emitter = new SapiEmitter();
    $emitter->emit($response);
    return $response;
};

$middlewares = [
    [
        'middleware' => $mdw0,
        'methods'    => ['GET']
    ],
    [
        'middleware' => $mdw1,
        'methods'    => ['GET']
    ],
    [
        'middleware' => $mdw2
    ]
];

$app = new Dsp\TornadoHttp\TornadoHttp($middlewares);
$app->setDI($container);
//$app(ServerRequestFactory::fromGlobals(), new Response());
Dsp\TornadoHttp\Application::invoke($app);
