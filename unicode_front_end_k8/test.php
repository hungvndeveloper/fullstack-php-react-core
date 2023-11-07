<?php

class A
{
    private static $methods = [
        'test' => 'handleTest'
    ];

    public function handleTest()
    {
        echo 'testing';
    }

    public static function __callStatic(string $method, array $parameters)
    {
        if (!array_key_exists($method, self::$methods)) {
            throw new Exception('The ' . $method . ' is not supported.');
        }

        return call_user_func_array([new self(), self::$methods[$method]], $parameters);
    }

    public function __call(string $method, array $parameters)
    {
        if (!array_key_exists($method, self::$methods)) {
            throw new Exception('The ' . $method . ' is not supported.');
        }

        return call_user_func_array([$this, self::$methods[$method]], $parameters);
    }
}

//A::test(); //testing
$a = new A();
$a->test(); //testing
