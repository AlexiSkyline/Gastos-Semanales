import React from 'react'
import Proptypes from 'prop-types';

export const Gasto = ({ gasto, eliminarGasto }) => (
    
    <li className="gastos">
        <p>
            { gasto.nombre }

            <span className="gasto">$ {gasto.cantidad } </span>
            <button 
                className="boton-eliminar"
                onClick={ () => eliminarGasto( gasto.id, parseInt( gasto.cantidad )  ) }
            >
                Borrar
            </button>
        </p>
    </li>

);

Gasto.propTypes = {
    gasto: Proptypes.object.isRequired,
    eliminarGasto: Proptypes.func.isRequired
}
