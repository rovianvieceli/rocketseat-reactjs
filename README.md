# ReactJS App

### Requisito
* NodeJS
* NPM
* YARN

### Criando o App react
#### Usando o NPM Instale Tool Create React App
```bash
 $ npm install --global create-react-app
```
#### Agora tera acesso ao Tool
```bash
$ create-react-app [nome]
```
#

#### Após criar o app podemos remover alguns arquivos.
```
/src
    App.css
    App.test.js
    index.css
    logo.svg
```

#### Depois remova as instruções
```
/src
    - index.js
        import './index.css';
    - App.js
        import logo from './logo.svg';
        import './App.css';
        ...
          return (
            <div className="App">
                <h1>Hello</h1>
            </div>
        ...
```