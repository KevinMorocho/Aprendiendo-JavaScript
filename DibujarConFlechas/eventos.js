var tecla = {
    UP: 38,
    DOWN:40,
    LEFT:37,
    RIGHT:39
};
document.addEventListener("keyup", dibujarTeclado);
var cuadrito = document.getElementById("area_dibujo");
var papel = cuadrito.getContext("2d");

dibujarLinea("blue", 149,149,151,151,papel);
var x=150;
var y=150;

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth =3;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarTeclado(event)
{
    var colorcito = "red";
    var movimiento = 10;
    if(event.keyCode == tecla.UP)
    {
        dibujarLinea(colorcito, x, y, x, y-movimiento,papel);
        y = y - movimiento;

    } 
    
    if(event.keyCode == tecla.DOWN)
    {
        dibujarLinea(colorcito, x, y, x, y+movimiento,papel);
        y = y + movimiento;

    }  
    
    if(event.keyCode == tecla.LEFT)
    {
        dibujarLinea(colorcito, x, y, x-movimiento, y,papel);
        x = x - movimiento;

    }  
    
    if(event.keyCode == tecla.RIGHT)
    {
        dibujarLinea(colorcito, x, y, x+movimiento, y, papel);
        x = x + movimiento;

    }

}
