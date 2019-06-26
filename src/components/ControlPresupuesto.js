import React, {Component} from 'react'
import Presupuesto from './Presupuesto';
import Restante from './Restante';
import PropTypes from 'prop-types';

class ControlPresupuesto extends Component{

    render(){
        return(
            <React.Fragment>
                <Presupuesto 
                    presupuesto = {this.props.presupuesto}
                />
                <Restante
                    presupuesto = {this.props.presupuesto}
                    restante = {this.props.restante}
                />
            </React.Fragment>
        );
    }
}

ControlPresupuesto.protoType = {
    presupuesto: PropTypes.string.isRequired,
    restante: PropTypes.string.isRequired
}
export default ControlPresupuesto;