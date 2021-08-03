class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
    }
}

function entregarDinero() {
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (var bi of caja) {
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor)//la función floor redondea -
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            }
            else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if (dinero > 0) {
        resultado.innerHTML = "Cajero sin fondos";
    } else {
        for (var e of entregado) {
            if (e.cantidad > 0) {
                resultado.innerHTML += e.cantidad + " Billetes de $ " + e.valor + "<br/>";
            }
        }
    }

}

function mostrar() {
    var totalI = 0;
    var totalF =0;
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for (var bi of caja) {
        totalI = totalI + bi.cantidad*bi.valor;
        if (dinero > 0) {
            div = Math.floor(dinero / bi.valor)//la función floor redondea -
            console.log(totalI )
            if (div > bi.cantidad) {
                papeles = bi.cantidad;
            }
            else {
                papeles = div;
            }
            mostrado.push(new Billete(bi.valor, (bi.cantidad - papeles)));
            dinero = dinero - (bi.valor * papeles);
            totalF = totalF +( bi.valor * papeles);
            console.log(mostrado);
        }
    }
    var resultadoT= totalI - totalF;
            alert("La cantidad actual de dinero en el cajero es $ " + resultadoT );
}
var caja = [];
var entregado = [];
var mostrado = [];

caja.push(new Billete(50, 3));
caja.push(new Billete(20, 2));
caja.push(new Billete(10, 2));

var dinero = 0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("res");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

var m = document.getElementById("mostrar");
m.addEventListener("click", mostrar);

