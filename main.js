
//Calcular el iva de un producto

// Si el producto cuesta entre $20 y $150, tendrá descuento, sino no.
//Productos entre $50 y $80 tienen -$15 de descuento y productos entre $81 y $150, -$20 de descuento

function totalCarrito(producto, iva){

    //Calcular el iva según el precio del producto ingresado por el usuario
    
    let totalIva = parseInt((producto * iva));

        //Mientras el producto sea menor o igual a $150, calculará un posible descuento


        while(totalIva<=150){

             //Para productos mayores o iguales a $80 se aplican -$20 de descuento 
            if(totalIva >= 80){
                console.log(totalIva - 20)
                alert("El costo total del producto es $" + (totalIva - 20) + " Iva incluido" )
                break;
            }

             //Para productos mayores o iguales a $50 se aplican -$15 de descuento
            else if(totalIva >= 50){
               console.log(totalIva - 15)
               alert("El costo total del producto es $" + (totalIva - 15) +" Iva incluido" ) 
               break;
           }  //Para productos menores a $20 no hay descuento y se muestra un mensaje indicandolo.
           
           else{
               console.log(totalIva)
               alert("El costo total del producto es $" + totalIva + " no tiene descuento")
               break;
           }

        }

        if(totalIva>150){
            alert("El costo total del producto es $" + totalIva + " no tiene descuento")
        }   
}

totalCarrito((Number(prompt("Ingrese el valor del producto"))), 1.19);