import { leerTeclado } from "./util/EntradaTeclado"

class Skate {
    private x: string
    private y: number 
    private z: number 
    private _o: number 
    constructor(){
        this.x= ""
        this.y= 0
        this.z= 0
        this._o= 0
    }
    gama(x:string){
        if (x='family') {
            this.z = 0.4
        }
        else if (x='enjoy') {
            this.z = 0.10
        }
        else {
            this.z = 0.21
        }
    }
    ancho(y:number){
        if (y > 8.5) {
            this.y = 100
        }
        else if (y > 7.5) {
            this.y = 80
        }
        else {
            this.y = 50
        }
    }
    precio(){
        this._o = this.y*this.z + this.y
    }
    get O (){
        return this._o
    }
 }  
 let main = async () => {
const gama1 = await leerTeclado('¿De que marca es tu skate?')
const ancho1 = parseInt(await leerTeclado('¿Cual es el ancho?'))
 let S1 : Skate
 S1= new Skate () 
S1.gama(gama1)
S1.ancho(ancho1)
S1.precio()
console.log(`mamahuevo tu tabla vale: ${S1.O}`)

 }
main()















/*

let main = async () => {
    const A = parseInt (await leerTeclado('dame tres numeros distintos'))
    const B = parseInt (await leerTeclado('dame otro'))
    const C = parseInt (await leerTeclado('dame last one'))

        if (A>B && B>C) {
                console.log (`El numero ${A} es mayor que ${B} 
                que a la vez es mayor que ${C}`)
        }
       else if (B>C && C>A) {
                console.log (`El numero ${B} es mayor que ${C} 
                que a la vez es mayor que ${A}`)
       }
       else if (C>B && B>A) {
        console.log (`El numero ${C} es mayor que ${B} 
        que a la vez es mayor que ${A}`)
}
        else if (C>A && A>B) {
            console.log (`El numero ${C} es mayor que ${A} 
            que es mayor que ${B}`)
        }
        else if (B>A && A>C) {
            console.log (`El numero ${B} es mayor que ${A} 
                que a la vez es mayor que ${C}`)
        }
        else if (A>C && C>B) {
            console.log (`El numero ${B} es mayor que ${A} 
                que a la vez es mayor que ${C}`)
        }
        
        else if (B==A && A==C) {
            console.log (`Los tres numero son iguales`)}} 
 main()*/
    /*
    const num1 = parseInt (await leerTeclado('dame un numero'))
    let primo = 1
        if (num1 == 1 || num1 == 0){

            console.log('Este numero es primo');}
        else   {

             for (var i = 2 ; i<num1 ; i++){

                if (num1%i==0){
                      primo = 0      
                }
            }
        }
        if (primo==1){
                console.log('su numero es primo')
            }
        else {
                console.log('su numero no es primo')
        }
        
        */
