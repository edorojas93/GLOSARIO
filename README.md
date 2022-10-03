# Funciones

Una función es un bloque de código que realiza alguna operación. Una función puede definir opcionalmente parámetros de entrada que permiten a los llamadores pasar argumentos a la función. Una función también puede devolver un valor como salida

```javascript
function myFunc(theObject) {
  theObject.make = 'Toyota';
}
[parcial]var mycar = { make: 'Honda', model: 'Accord', year: 1998 };
var x, y;
x = mycar.make; // x obtiene el valor "Honda"
myFunc(mycar);
y = mycar.make; // y obtiene el valor "Toyota"
                // (la propiedad make fue cambiada por la función)
```
