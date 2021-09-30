1. ```npm init -y```
2. ```npm install jest```

Aby włączyc obsługę składni import export z JS należy zainstalować:

1. ```npm install babel-jest @babel/preset-env --save-dev```

w package.json wprowadzić następujące zmiany:
```{
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.jsx?$": "babel-jest"
    }
  }
}
```
stworzyć plik .babelrc:
```{
  "presets": ["@babel/preset-env"]
}
```
TERAZ MOŻNA KORZYSTAĆ ZE SKŁADNI ES6 import, export funkcji, klas itd

testowanie async functions instalujemy:
```npm install --save-dev @babel/plugin-transform-runtime```

i do pliku .babelrc dopisujemy:
```"plugins": ["@babel/plugin-transform-runtime"]```