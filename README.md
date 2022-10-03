# Map

La Interface Map (java. io. Map) en Java, nos permite representar una estructura de datos para almacenar pares "clave/valor"; de tal manera que para una clave solamente tenemos un valo


```javascript
 arreglo.map(function(elementoActual, indice, arregloOriginal) {  ... código });
    const products = [
        { id: "1", name: "shirt", category: "clothing" },
        { id: "2", name: "Sports Tennis", category: "accessories" },
        { id: "3", name: "Casual shoes", category: "footwear" },
        { id: "4", name: "skirt", category: "clothing" },
        { id: "5", name: "tie", category: "clothing" }
    ]
    let nameOfProducts = products.map((product, index, array) => {
        // Cómo solo queremos los nombres, retornamos "name".
        return product.name;
    })
    console.log(nameOfProducts2);
```

