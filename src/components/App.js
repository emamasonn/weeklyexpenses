import React, { Component } from 'react';
import '../css/App.css';
import Header from './Header';
import Formulario from './Formulario';
import Listado from './Listado'
import {validarPresupuesto} from '../helper'
import ControlPresupuesto from './ControlPresupuesto'
class App extends Component {

  state = {
    presupuesto : '',
    restante: '',
    gastos: {}
  }

  componentDidMount(){
    this.obtenerPresupuesto();
  }

  obtenerPresupuesto = () => {
    let presupuesto = prompt('Cueal es el presupuesto??');
    let resultado = validarPresupuesto(presupuesto);

    if(resultado){
      this.setState({
        presupuesto: presupuesto,
        restante: presupuesto
      });
    }else{
      this.obtenerPresupuesto();
    }
  }
  //agregar gasto en el state
  agregarGastos = (gasto) => {
    //tomar una copia del state actual
    const gastos = {...this.state.gastos}
    
    //agregar el gasto al objete del state
    gastos[`gasto${Date.now()}`] = gasto;

    //restar presupuesto
    this.restarPresupuesto(gasto.cantidadGasto);
    //ponerlo en el state
    this.setState({
      gastos: gastos
    });

  }

  //restar del presupuesto cuanto gaste se cree
  restarPresupuesto = (cantidad) => {
    //leer casto
    console.log(cantidad)
    let restar = Number(cantidad);
    //tomar una copia del state actual
    let restante = this.state.restante;
    //lo restamos
    restante -= restar;
    restante = String(restante);
    //agregamos el nuevo state
    this.setState({
      restante: restante
    });
  }

  render(){
  return (
    <div className="App container">
      <Header
        titulo = 'Gasto Semanal'
      >
      </Header>
      <div className = "contenido-principal contenido">
        <div className = "row">
          <div className = "one-half column">
            <Formulario 
              agregarGastos = {this.agregarGastos}
            />
          </div>
          <div className = "one-half column">
            <Listado 
              gastos={this.state.gastos}
            />
            <ControlPresupuesto
              presupuesto = {this.state.presupuesto}
              restante = {this.state.restante}
            />
          </div>
        </div>
        
      </div>
    </div>
  );
}
}

export default App;
