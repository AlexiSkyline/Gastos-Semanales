import React from 'react'
import { Gasto } from './Gasto';
import Proptypes from 'prop-types';

export const Listado = ({ gastos, eliminarGasto }) => (

    <div className="gastos-realizados">
        <h2>Listado</h2>
        { gastos.map( gasto => (
            <Gasto 
                key={ gasto.id }
                gasto={ gasto } 
                eliminarGasto={ eliminarGasto }
            />
        ))}
    </div>

);

Listado.propTypes = {
    gastos: Proptypes.array.isRequired,
    eliminarGasto: Proptypes.func.isRequired
}