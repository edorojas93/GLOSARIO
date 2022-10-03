# Filter

La cual es utilizada en el ámbito de la programación funcional, para a partir de una secuencia de elementos (por ejemplo, una lista) nos devuelve un objeto iterable, con aquellos elementos de la referida secuencia que cumplen con un determinado criterio establecido previamente.


```javascript
let gente = [
        {nombre: "Fabio", edad: 5},
        {nombre: "Pedro", edad: 2},
        {nombre: "Carlos", edad: 33},
        {nombre: "Federico", edad: 13},
        {nombre: "Elisa", edad: 25},
        {nombre: "Karla", edad: 1},
        {nombre: "Jose", edad: 43},
]
let pequeños = gente.filter(persona => persona.edad <= 3)
console.log(pequeños);
```

