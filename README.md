# Running the tests

## With Yarn (without Docker)
1. Install yarn:
```
yarn install
```

2. Define needed variables in the comandline:
```
set URL=google.com
set SELENIUM_BROWSER=chrome
set DEBUG=true
```

3. Run the tests
```
yarn test --hostname hub --port 4444 --spec features/access.feature
```


## With Docker
```
docker-compose build && docker-compose -f docker-compose.local.yml run --rm -e URL="google.com" -e SELENIUM_BROWSER="chrome" -e DEBUG="true" wdio yarn test --hostname hub --port 4444 --spec features/access.feature
```

In order to remove all docker working containers:
```
docker-compose down --remove-orphans
```