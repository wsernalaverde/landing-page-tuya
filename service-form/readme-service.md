# Servicio Formulario

Este servicio se construyó usando NodeJS con su libereía Express, para montar un servidor con un endpoint de entrada de datos. Con la ayuda del paquete Mailgun-js se envían los datos desde la plataforma Mailgun a un correo electrónico.

## Ejecutar servicio

Para ejecutar el servicio es necesario configurar dos variables de entorno con los datos de conexión a la cuenta de Mailgun.

Que son Api Key y dominio, estos datos se pueden sacar de la cuenta de mailgun en [Mailgun](https://www.mailgun.com/)

### Nombres Variables Entorno

- KEY_MAILGUN
- DOMAIN_MAILGUN


### Comandos de ejecución

- npm i

Este comando es para instalar los paquetes de node necesarios.

- node index.js

Este comando es para lanzar el servidor en node, una vez se hallan instalado los paquetes.