<?php

use Dsp\TornadoHttp\Middleware\Middleware;
use Psr\Http\Message\ResponseInterface as ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
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

$mdw0 = new class () extends Middleware implements MiddlewareInterface {
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $response = $handler->handle($request);
        $response = $response->withStatus(201);
    }
};

$mdw1 = function(RequestInterface $request, callable $next) {
    $response = new JsonResponse(['hello' => 'TornadoHttp'], $response->getStatusCode());
    return $next($request, $response);
};

$mdw2 = function(RequestInterface $request, callable $next) {
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
$app->setResponse(new Response());
$app->handle(ServerRequestFactory::fromGlobals());
