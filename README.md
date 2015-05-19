> dz_9 - Gulp, Sass, Jade, минификация и конканинация файлов, deploy на боевой сервер

Для запуска:

0. git clone https://github.com/vectorcode/dz_9.git dz_9_pavel_k
1. npm i
2. bower i
3. bower install https://github.com/pioul/jQuery.SimpleSelect.git 
4. gulp - Задача по-умолчанию ['server', 'watch']
5. gulp build - Собираем папку DIST (только после компиляции Jade)
6. gulp server-dist - Проверка build 
7. gulp minihtml - минификация html в папке dist
8. gulp deploy - загружаем на сервер содержимое папки dist (http://loftschool.pavelkondakov.ru/)


