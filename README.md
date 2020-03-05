# Adopt a Pet
## ¿Qué es Adopt a Pet?
**Adopt a pet** es una plataforma que pretende unir a personas que están interesados en adoptar una mascotas y a personas o refugios que estén dando en adopción a mascotas que han sufrido un proceso de abandono o incluso maltrato.

## ¿Cómo funciona?
Para poder enviar una solicitud de adopción o registrar una mascota para dar en adopción tendrán que crear una cuenta, después de crear su cuenta ya podrán iniciar sesión.

## Secciones
### Home

Al iniciar sesión lo primero que verán son todas las mascotas que están disponibles para adopción, al seleccionar una se abrirá su ficha con la información de la mascota y la opción para adoptar.

### Match

La plataforma tiene una opcón de sugerencia rapida donde se irán mostrando las mascotas una a una de forma aleatoria.

### Chat

Una vez que se ha enviado y aceptado la solicitud de adopción los usuarios podrán iniciar una conersación por medio de este chat.

### Perfil

En esta sección podras personalizar un foto de perfil y se mostrarań las solicitudes que has enviado de adopción o las mascotas que has registrado.

## ¿Quieres utilizar la demo?

**Demo**: da click **[aquí](https://adopta-pet.netlify.com/)** para utilizar la demo, sientete libre de utilizarla.

## Instalación
### Requerimientos
* Cuenta en Cloudinary
* MongoDB (Servidor local o Mongo Atlas)

### Comenzando
* Clonar este repo.

#### Iniciando la API
* Entrar al directorio _servidor_ con el siguiente comando.
``` cd adopta-pet/server ```

Crear archivo _.env_ con la siguiente configuración.
```
PORT=3000
ENV=development
DB=[MONGODB URL]
FRONTENDPOINT=http://localhost:3001
SECRET=[ANY PASSPHRASE]
DEFAULT_PHOTO=[URL DEFAULT PROFILE IMAGE]
CLOUDINARY_NAME=[NAME OF CLOUDINARY ACCOUNT]
CLOUDINARY_KEY=[KEY OF CLOUDINARY ACCOUNT]
CLOUDINARY_SECRET=[SECRET OF CLOUDINARY ACCOUNT]
```

* Para iniciarlo
```
npm i
npm run dev
```

#### Iniciando la aplicacion
* Entrar al directorio _client_ con el siguiente comando.
``` cd aopta-pet/client ```

* Para iniciarlo
``` npm start ```

### Saludos
Happy coding
