# AlMundo ejercicio de frontend

## Ejercicio 1: API Rest NodeJS
  Este punto consiste en armar un API REST en Node.js. El mismo será utilizado en el ejercicio 2.
  La funcionalidad de listado y filtrado de hoteles debe estar soportada por la API y
  consumida en la aplicación cliente.
  A la hora de diseñar la estructura de la aplicación, tener en cuenta factores como
  escalabilidad, reutilización y separación de responsabilidades.
  Uso de configuraciones para ajustar como se ejecuta la aplicación en entornos productivos
  y de desarrollo.
  
## Instrucciones para iniciar la aplicación:
1. Ejecutar en la consola, ubicados en la raiz del proyecto
```
npm install
```
2. a- Para iniciar la aplicacion con una base en memoria (que se limpia en cada corrida), ejecutar 
```
npm start
```
2. b- Para iniciar la aplicacion con una base ya creada, ejecutar 
```
npm run start-prod
```

## Adicional:
1. Test: 
```
npm run test
```
2. Para ver el reporte de jshint:
```
npm run jshint
```
3. Para ver el reporte de covertura generado con Istanbul (esto generara un sitio bajo el directorio: .nyc_output):
```
npm run covertura
```

## API Rest
1. Obtener Hoteles
```
GET /hoteles
```
2. Guardar Hotel
```
POST /hoteles
Body : 
{
 "amenities": [
       "garden",
       "business-center",
       "bathrobes",
       "safety-box",
        "beach-pool-facilities"
 ],
 "name": "Jose Antonio Lima",
 "image": "164283a_hb_a_001.jpg",
 "stars": 4,
 "price": 1914.87
}
```
3. Actualizar Hotel
```
PUT /hoteles/:id 
Body : 
{
 "amenities": [
      
 ],
 "name": "Jose Antonio Lima",
 "image": "164283a_hb_a_001.jpg",
 "stars": 4,
 "price": 1914.87
}
```
4. Borrar Hotel
```
DELETE /hoteles/:id
```
