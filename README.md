# Optimizar para producción

1. Establecer valor a puerto condicional en función de la variable de entorno PORT

```javascript
const PORT = process.env.PORT || 3000
```

2. Especificar a render (PaaS) la versión de nodejs estableciendo su valor en la variable de entorno `NODE_VERSIO`

https://docs.render.com/environment-variables#:~:text=install%20during%20build.-,NODE_VERSION,-See

4. Instalar paquete compression y configurar middleware para que los cuerpos de las respuestas se envíen comprimidos optimizando hasta un 70% el tiempo de respuesta.
   https://www.npmjs.com/package/compression
5. Instalar paquete helmet que proporciona una capa de seguridad al servidor configurando un conjunto de cabeceras HTTP. Por defecto express deja desprotegido el servidor para agilizar el proceso de desarrollo pero hay debe aplicarse una configuración minima cuando esté en producción.
   https://www.npmjs.com/package/helmet

6. Desde el area de navegación lateral del site de atlas:

- Database Access - Configurar usuario, password y permisos del usuario que tendrá acceso a la db. Credenciales que van en la URI.

- Network Access - Se configuran las direcciones que podrán conectar con la base de datos.
  La configuración `0.0.0.0/0` permite conectar desde cualquier dirección siempre que se tenga la URI.
