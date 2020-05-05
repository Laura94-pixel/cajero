var imagenes = [];
imagenes["cincuentamil"] = "50000.jpg";
imagenes["veintemil"] = "20000.jpg";
imagenes["diezmil"] = "10000.jpg";

class Billete
{
    constructor(n,v,c)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.valor = v;
        this.cantidad = c;

        this.imagen.src = imagenes[this.nombre];

    }
}


function entregarDinero()
{
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    d = dinero;

    resultado.innerHTML = "" ;
    var total_disponible= calcular_disponible(caja);
    var total_gastado= calcular_gastado (entregado);

    var total_disponible= total_disponible - total_gastado ;

    for(var bi of caja)
    {
        if(dinero > 0)
        {
            div = Math.floor(dinero/ bi.valor);
            if(div > bi.cantidad)
            {
                papeles = bi.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push( new Billete(bi.nombre,bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        
        }

    }
    if(dinero > 0)
    {

        resultado.innerHTML = "La cantidad de dinero que usted solicita no está disponible.";

    }
    else
    {
        for(var e of entregado)
        {
            if(e.cantidad > 0)
            {

                for(var i=0; i < e.cantidad; i++)
                {

                    resultado.appendChild (e.imagen.cloneNode(true));


                }               
            }           
        }
    }
    
    saldo_disponible.innerHTML = "Saldo disponible: " + total_disponible;
    historial.innerHTML += "Transacciòn por el valor de: " + d + "<br />";
    




}


function calcular_disponible(caja)
{
    disponible = 0;

    for(var bi of caja)
    {
    disponible = disponible + bi.valor*bi.cantidad;
    }
    return disponible;
}

function calcular_gastado(entregado)
{
    gasto= 0;

    for(var e of entregado)
    {
        gasto= gasto + e.valor*e.cantidad;
    }
    return gasto;
}



var caja = [];
var entregado =[];

caja.push( new Billete("cincuentamil", 50, 4));
caja.push( new Billete("veintemil", 20, 5));
caja.push( new Billete("diezmil", 10, 10));



var dinero = 0;
var div = 0;
var papeles = 0;


var saldo_disponible = document.getElementById("saldo_disponible");
var historial = document.getElementById("historial");
var resultado = document.getElementById("resultado");

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
b.addEventListener("click", historial);



