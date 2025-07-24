## 关于 Panda Laravel

Panda Laravel是基于Laravel框架调整后的框架，目的是为了解决Laravel新框架的一些配置问题，以及减少部分CURD的调用，创建一个开箱即用的Laravel框架。同时Panda Laravel调整了部分文件夹结构，内置了一些常用的Composer扩展包以及调试工具，使开发过程更顺手一些。

本项目会持续更新，包含但不限于内置Composer包的添加，以及框架的改动。

## 基于的Laravel版本

Laravel 5.8.26

## Panda Laravel环境要求

- PHP >= 7.1.3
- OpenSSL PHP 拓展
- PDO PHP 拓展
- Mbstring PHP 拓展
- Tokenizer PHP 拓展
- XML PHP 拓展
- Ctype PHP 拓展
- JSON PHP 拓展
- BCMath PHP 拓展

## Panda Laravel安装

```
git clone https://github.com/gorwayne/panda-laravel.git
```

```
cd panda-laravel
```

```
composer install
```

## 框架改动如下

**[.env]**

```
APP_NAME=PandaLaravel //修改默认APP名称为PandaLaravel
LOG_CHANNEL=daily //修改默认日志保存类型为按天保存
```

**[config/app.php]**

```
'timezone' => 'Asia/Shanghai' //设置时区为亚洲上
'locale' => 'zh-CN' //设置默认语言为简体中文
```

**[public/assets]**

public目录下新增assets文件夹，将静态资源移动到assets目录下

**[app/Models]**

app目录下新增Models文件夹，用于存放模型文件，并将原始的User模型移动的次目录下

**[app/Support]**

app目录下新增Support文件夹，里面初始了一个helpers.php，用于存放通用的函数

## 内置Composer包

#### 生产环境包

- [guzzlehttp/guzzle](https://github.com/guzzle/guzzle) HTTP请求包
- [respect/validation](https://github.com/Respect/Validation) 后端验证包
- [overtrue/laravel-lang](https://github.com/overtrue/laravel-lang) Laravel多语言支持包

#### 开发环境包

- [barryvdh/laravel-debugbar](https://github.com/barryvdh/laravel-debugbar) LaravelDebug工具
- [rap2hpoutre/laravel-log-viewer](https://github.com/rap2hpoutre/laravel-log-viewer) Laravel日志查询工具(访问：<http://domain/logs>)
- [barryvdh/laravel-ide-helper](https://github.com/barryvdh/laravel-ide-helper) IDE辅助工具

## 开源协议

基于 [MIT license](https://opensource.org/licenses/MIT) 协议开源
