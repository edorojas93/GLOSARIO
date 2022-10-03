# Nivel de Scope

Un scope puede definirse como un lugar desde el que puedes acceder a tu espacio de nombres sin ningún prefijo. El Scope se puede categorizar como: Ámbito de una función donde se tienen nombres locales. Ámbito de un módulo en el que se tienen variables globales



```javascript
let prenda='camisa'
function comprar (){
    let accesorio='reloj';
    console.log("Estoy comprando un " + accesorio)
}
console.log(prenda)
```

