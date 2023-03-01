let menuVisible = false;
//funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = false;
    }
}
function seleccionar(){
    //oculta el menu una vez que seleccione una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

