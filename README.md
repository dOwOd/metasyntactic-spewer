# metasyntactic-spewer
テスト用に公開するnpmパッケージのリポジトリ

# setup

```
$ cp example.env .env
```

```
$ docker compose build
```

```
$ docker compose run --rm ash
$ npm login --registry=https://npm.pkg.github.com --scope=@dowod
$ npm run lerna publish from-package --registry=https://npm.pkg.github.com/
```