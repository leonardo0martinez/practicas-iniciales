# Video del Taller

https://drive.google.com/file/d/1FG8Ncck0SD1OJ76gaAmb7ByqmEdqdbFb/view?usp=sharing

# Comandos de Docker

## Comandos para el manejo de docker


```console
# MOSTRAR IMAGENES DESCARGADAS
docker images

# MOSTRAR CONTENEDORES
docker ps
docker ps -a //MUESTRA TODOS LOS CONTENEDORES

# ELIMINAR UN CONTENEDOR
docker rm id_contenedor

# ELIMINAR UN IMAGEN
docker rmi id_imagen

# CREAR IMAGEN
docker build -t nombre_contenedor .

# CREAR CONTENEDOR
docker run -p 5000:5000 --name nombre_contenedor nombre_imagen

# SABER LA IP DEL CONTENEDOR
docker inspect -f '{{range.NetworkSettings.Networks}}{{.IPAddress}}{{end}}' nombre_o_id_contenedor

# COMANDO PARA DOCKERHUB
docker tag nombre_imagen usuario_dockerhub/nombre_imagen
docker login
docker push nombre_usuario/nombre_imagen

# PARA DESCARGAR IMAGEN DE DOCKER HUB
docker pull nombre_imagen

# PARA INGRESAR AL BASH O TERMINAL DEL CONTENEDOR
docker exec -it nombre_contenedor bash

# MOSTRAR LA IMPRESION EN CONSOLA DEL CONTENEDOR
docker logs nombre_o_id_contendor
```

## Comandos para crear un contenedor de mongo
```console
# PARA DESCARGAR IMAGEN DE MONGO
docker pull mongo

# CREAR CONTENEDOR DE MONGO DB
docker run -d -p 27017:27017 --name dbmongo \
    -v /Users/carlosdavid/Desktop/Clase2/dockerVolumes:/data/db \
    -e MONGO_INITDB_ROOT_USERNAME=mongoadmin \
    -e MONGO_INITDB_ROOT_PASSWORD=So1pass1S_2022 \
    mongo 

# PARA INGRESAR AL CONTAINER DE MONGO
docker exec -it dbmongo bash
```

## Comandos para crear un contenedor de mysql
```console
# DESCARGAR CONTENEDOR MYSQL
docker pull mysql

# CREAR CONTENDOR PARA MYSQL
docker run -d -p 33061:3306 --name mysql-db -e MYSQL_ROOT_PASSWORD=123 mysql

# CREAR CONTENEDOR PARA NODE
docker run -it -p 3001:3001 --name servidor --link mysql-db:mysql prueba

# COMANDO PARA DAR PRIVILEGIOS EN MYSQL
ALTER USER 'nombre_usuario'@'localhost' IDENTIFIED WITH mysql_native_password BY 'contraseña_usuario';
flush privileges;
```

