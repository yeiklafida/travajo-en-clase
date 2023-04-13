//console.log("hola, mundo")
//console.warn("¡advertencia!")
//console.error("error grandeee")

//console.error(new Error("ocurrio un error"))

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//modulo process

//provee informasion sobre el proceso de node.js
//que se esta ejecutando
//peede tener cierto control sobre el procese
// console.log(process)

//console.log(process.version)

//Módulo os (sistema operativo)

// const os = require('os')
// console.log(os.type())
// console.log(os.homedir())
// console.log(os.uptime())
// console.log(os.userInfo())

//modulos timer 

//setTimeout(funcion, retraso, argumento)

// function sumar(a, b){
// console.log(a+b)
// }

// //setTimeout(sumar, 10000, 1,2)

// //setimmediate()
// // console.log("antes")
// // setImmediate(sumar, 1,2)
// // console.log("despues")

// // setInterval

// setInterval(sumar, 1500, 3,4)

//modulo fs (file sistem)

const fs= require('fs')

//readfile

// fs.readFile('index.html' , 'utf-8' , (err,contenido) =>{
//     if(err){console.log(err)
// }
// else{
//     console.log(contenido)
// }
// })

// fs.rename('index.html' , 'main.html' , (err) =>{
//      if(err){
//         throw err
//     }
// else{
//     console.log("el nombre se cambio exitosamente")
// }
// })

// fs.appendFile('index.html' , '<p> hola, soy yo </p>' , (err) =>{
//     if (err){
//         throw err
//     }
//     else{
//         console.log("archivo actualizado")
//     }
// })

// fs.writeFile('index.html' , 'contenido nuevo', (err)=>{
//     if(err){
// throw err
//     }
//     else{
//         console.log("contenido reemplazado exitosamente")
//     }
// })

fs.unlink('index.html' , (err) => {
    if(err){
        throw err
    }
    else{
        console.log("contenido eliminado exitosamente")
    }
})

































