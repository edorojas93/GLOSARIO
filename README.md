#  Clausula

Una cláusula es una función que tiene acceso al ambito de su función padre, incluso después de que la función padre haya terminado de ejecutar.

```javascript
const miFuncion = () => {
     let miValor = 2;
     console.log(miValor);
     const funcionHija = () => {
          console.log(miValor += 1);
     }
     return funcionHija;
}
const resultado = miFuncion();
console.log(resultado);
resultado();
resultado();
resultado();
```

