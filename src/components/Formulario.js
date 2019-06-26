import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormularioGastos extends Component{

    nombreGasto = React.createRef();
    cantidadGasto = React.createRef();

    crearGastos = (e) => {
        //prevenir el default 
        e.preventDefault();
        //crear el objeto con los datos
        const gasto = {
            nombreGasto: this.nombreGasto.current.value,
            cantidadGasto: this.cantidadGasto.current.value 
        }
        console.log(gasto);
        //agregarlo y enviarlo por props
        this.props.agregarGastos(gasto);
        //resetear el formulario
        e.currentTarget.reset();
    }
    render(){
        return(
            <form onSubmit={ this.crearGastos }>
                <h2>Agrega tus gastos aqui</h2>
                <div className="campo">
                    <label>Nombre Gasto</label>
                    <input ref = {this.nombreGasto} className="u-full-width" type="text" placeholder="Ej. Transporte" />
                </div>

                <div className="campo">
                    <label>Cantidad</label>
                    <input ref = {this.cantidadGasto} className="u-full-width" type="text" placeholder="Ej. 300" />
                </div>

                <input className="button-primary u-full-width" type="submit" value="Agregar" />
            </form>
        );
    }
}

FormularioGastos.protoType = {
    agregarGastos: PropTypes.func.isRequired
}

export default FormularioGastos;