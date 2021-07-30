# node-npm-work

показать весь путь в терминале(где ты находишься в данный момент) - pwd;
лист - ls;
навигация по папкам - cd;
очистка в терминале - clear or Ctrl+L - in Windows;
создать файл - touch <имя файла>;
создание папки - mkdir <имя папки>;
изменить файл - mv <старое имя> <новое имя>;
удалить - rm <имя файла> если в папке, то <путь/имя файла>

Node.js

удалить папку и все ее содержимое - rm -rf <имя папки>;
npm init - запускает инициализацию проекта (создает файл packege.json) - делается один раз на проект
npm inint --yes or(npm inint -y) - сокращенно - так же создает создает файл packege.json

npmjs.com - сайт;

npm install or npm i <название пакета с сайта> - установка пакета
npm remove <название пакета> - удаление пакета
npm скрипты - npm run <имя скрипта> - запускает скрипт; если есть скрипт start or test, можно писать npm start or npm test;
pre and post скрипты - запускаються до и после скрипта при запуске скрипта;

Webpack:

1. В новом проекте запускаем npm inint -y - создаст файл packege.json;
2. заходим на сайт Webpack и устанавливаем его, создаем в корне файл webpack.config.js;

Скачивам plugins - html-webpack-plugin;
в webpack.config.js добавляем по инструкции plugin;
npm install --save-dev mini-css-extract-plugin

Ставиться всегда в таком порядке:

1. npm install ....
2. в webpack.config.js с сайта копируем и вставляем сверху констатна => loader => plugin
