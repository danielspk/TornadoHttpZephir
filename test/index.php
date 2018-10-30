<?php

use Dsp\TornadoHttp\Middleware\Middleware;
use Psr\Http\Message\ResponseInterface as ResponseInterface;
use Psr\Http\Message\ServerRequestInterface as ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response;
use Zend\Diactoros\Response\JsonResponse;
use Zend\Diactoros\ServerRequestFactory;
use Zend\HttpHandlerRunner\Emitter\SapiEmitter;
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

        $emitter = new SapiEmitter();
        $emitter->emit($response);

        return $response;
    }
};

$mdw1 = new class () extends Middleware implements MiddlewareInterface {
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        return new JsonResponse(['hello' => 'TornadoHttp'], 201);
    }
};

$middlewares = [
    [
        'middleware' => $mdw0,
        'methods'    => ['GET']
    ],
    [
        'middleware' => $mdw1
    ]
];

$app = new Dsp\TornadoHttp\TornadoHttp($middlewares);
$app->setDI($container);
$app->setResponse(new Response());
$app->handle(ServerRequestFactory::fromGlobals());
