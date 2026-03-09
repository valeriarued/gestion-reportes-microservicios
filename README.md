# Sistema de Gestión de Reportes con Microservicios

## Descripción
Este proyecto implementa una arquitectura básica de microservicios para la gestión de reportes. Cada funcionalidad del sistema se encuentra separada en servicios independientes, lo que permite mayor escalabilidad y organización del código.

## Arquitectura del sistema

Usuario  
↓  
API Gateway  
↓  
Auth Service  
↓  
Report Service 

## Microservicios

- **api-gateway**
  - Punto de entrada del sistema.
  - Recibe las solicitudes del cliente.

- **auth-service**
  - Maneja la autenticación de usuarios.
  - Implementado con Node.js y Express.

- **report-service**
  - Encargado de la gestión de reportes del sistema.
  - ## Ejemplo de endpoint

POST /login

Body:

{
  "email": "usuario@email.com",
  "password": "123456"
}
## Estructura del proyecto

- api-gateway: punto de entrada para las solicitudes del sistema.
- auth-service: servicio encargado de la autenticación de usuarios.
- report-service: servicio encargado de la gestión de reportes.

## Tecnologías utilizadas

- Node.js
- Express
- Git
- GitHub

## Autor

Valeria Rueda
