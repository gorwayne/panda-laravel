## About Panda Laravel

Panda Laravel is a framework based on the Laravel framework that has been adjusted to solve some configuration issues of the new Laravel framework, reduce some CRUD calls, and create a ready-to-use Laravel framework. At the same time, Panda Laravel has adjusted some folder structures, built-in some commonly used Composer extension packages and debugging tools to make the development process more convenient.

This project will be continuously updated, including but not limited to the addition of built-in Composer packages and framework modifications.

## Based on Laravel Version

Laravel 5.8.26

## Panda Laravel Environment Requirements

- PHP >= 7.1.3
- OpenSSL PHP Extension
- PDO PHP Extension
- Mbstring PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- Ctype PHP Extension
- JSON PHP Extension
- BCMath PHP Extension

## Panda Laravel Installation

```
git clone https://github.com/gorwayne/panda-laravel.git
```

```
cd panda-laravel
```

```
composer install
```

## Framework Modifications

**[.env]**

```
APP_NAME=PandaLaravel //Modified default APP name to PandaLaravel
LOG_CHANNEL=daily //Modified default log storage type to daily storage
```

**[config/app.php]**

```
'timezone' => 'Asia/Shanghai' //Set timezone to Asia/Shanghai
'locale' => 'zh-CN' //Set default language to Simplified Chinese
```

**[public/assets]**

Added assets folder under public directory, moved static resources to assets directory

**[app/Models]**

Added Models folder under app directory for storing model files, and moved the original User model to this directory

**[app/Support]**

Added Support folder under app directory, initialized with a helpers.php file for storing common functions

## Built-in Composer Packages

#### Production Environment Packages

- [guzzlehttp/guzzle](https://github.com/guzzle/guzzle) HTTP request package
- [respect/validation](https://github.com/Respect/Validation) Backend validation package
- [overtrue/laravel-lang](https://github.com/overtrue/laravel-lang) Laravel multi-language support package

#### Development Environment Packages

- [barryvdh/laravel-debugbar](https://github.com/barryvdh/laravel-debugbar) Laravel Debug tool
- [rap2hpoutre/laravel-log-viewer](https://github.com/rap2hpoutre/laravel-log-viewer) Laravel log viewer tool (Access: <http://domain/logs>)
- [barryvdh/laravel-ide-helper](https://github.com/barryvdh/laravel-ide-helper) IDE helper tool

## Open Source License

Open sourced under [MIT license](https://opensource.org/licenses/MIT)
