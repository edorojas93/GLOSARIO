# Función Flecha

Las funciones flecha permiten definir de manera compacta una función convencional. Si la función tiene solamente una sentencia que devuelve un valor, el uso de funciones flecha nos permite eliminar las llaves y la palabra return. Incluso utilizando parámetros también podemos ver mucho más reducido el código.

```javascript
let edad = prompt("Cual es tu edad?", 18);
let Bienvenido = (edad < 18) ?
  () => alert('¡Hola!') :
  () => alert("¡Saludos!");
Bienvenido();
```

