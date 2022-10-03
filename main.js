addEventListener('DOMContentLoaded', (e) => {
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
    
    console.log(pequeños)
})

  

   
   