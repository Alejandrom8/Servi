class Trabajador{
    constructor(nombre, email, ubicacion, descripcion, genero, edad, foto){
        this._nombre = nombre;
        this._email = email;
        this._ubicacion = ubicacion;
        this._descripcion = descripcion;
        this._genero = genero;
        this._edad = edad;
        this._foto = foto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get email(){
        return this._nombre;
    }

    set email(email){
        this._email = email;
    }

    get ubicacion(){
        return this._ubicacion;
    }

    set ubicacion(ubicacion){
        this._ubicacion = ubicacion;
    }

    get descripcion(){
        return this._descripcion;
    }

    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

    get genero(){
        return this._genero;
    }

    set genero(genero){
        this._genero = genero;
    }

    get foto(){
        return this._foto;
    }

    set foto(foto){
        this._foto = foto;
    }

}

module.exports = Trabajador;