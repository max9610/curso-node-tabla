const {crearArchivo}=require('./helpers/multiplicar')

const colors=require('colors')
const argv=require('./config/yargs')

console.clear()
// console.log(process.argv)
console.log(argv)

// const[,,argv3='base=5']=process.argv
// const[,base=5]=argv3.split('=')


// const base=6;


crearArchivo(argv.b,argv.l,argv.h)
    .then(nombreArchivo=>console.log(nombreArchivo.rainbow,' creado'))
    .catch(err=>console.log(err))