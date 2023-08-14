# Proyecto-base
## Es necesario instalar los siguientes paquetes de manera global

    npm i -g concurrently nodemon

1 - Iniciamos el repositorio npm

    npm init --yes

2 - Instalamos Express

    npm install express

3 - Instalamos typescript y los types de express

    npm i -D typescript @types/express @types/nodes

4 - Creamos el archivo tsconfig.json

    npx tsc --init 

5 - Creamos el archivo `.gitignore`

    node_modules
    dist

6 - Agregamos dos scripts en el archivo package.json

    "scripts": {
		"build": "npx tsc",
		"start": "node dist/index.js"
	}

7 - Modificamos el archivo tsconfig.json descomentando la linea `"outDir": "./"` y agregamos la carpeta dist `"outDir": "./dist"`

## Ejecutar App

Clonar repositorio y correr el comando

    npm run install
    npm run build
    npm run start