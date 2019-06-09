# Laravel Vue Manning

## インストール

```
git clone https://github.com/katsuhiko/laravel-vue-manning.git
cd laravel-vue-manning

docker run --rm -it -v $(pwd):/home/app -w /home/app node:10.16 npm install

docker-compose up -d
docker exec -it app php composer.phar install
docker exec -it app php artisan migrate
```

----

## プロジェクトの作成

```
docker run --rm -it -v $(pwd):/home/app -w /home/app php:7.3-fpm-stretch /bin/bash

apt-get update
apt-get upgrade -y
apt-get install -y git libzip-dev zip unzip
docker-php-ext-install zip
php composer.phar create-project --prefer-dist laravel/laravel laravel-vue-manning
cp composer.phar ./laravel-vue-manning/
exit

cd laravel-vue-manning/
```

##　追加のライブラリ

- vue-router

```
docker run --rm -it -v $(pwd):/home/app -w /home/app node:10.16 npm install -D vue-router
```

- Vuetify
-- 参考: https://qiita.com/nobu-maple/items/43c1228b8f04837d753b

```
docker run --rm -it -v $(pwd):/home/app -w /home/app node:10.16 npm install -D vuetify
docker run --rm -it -v $(pwd):/home/app -w /home/app node:10.16 npm install -D material-design-icons-iconfont
```

## 参考

- icon一覧
    - https://material.io/tools/icons/?style=baseline
