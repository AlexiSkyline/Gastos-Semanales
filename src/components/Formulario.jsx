import React, { useState } from 'react';
import Proptypes from 'prop-types'; 
import { Error } from './Error';

export const Formulario = ({ setGasto, setCrearGasto }) => {

    const [ nombre, setNombre ] = useState('');
    const [ cantidad, setCantidad ] = useState(0);
    const [error, setError] = useState(false);
    

    // * Cuando el usuario agrega un gasto
    const agregarGasto = ( e ) => {
        e.preventDefault();

        // * Validar
        if( cantidad < 1 || isNaN( cantidad ) || nombre.trim === '' ) {
            setError( true );
            return;
        }

        // * Construir el gasto
        const gasto = {
            nombre,
            cantidad,
            id : Date.now()
        }

        // * Pasar el gasto al componente principal
        setGasto( gasto );
        setCrearGasto( true );
        setError( false );

        // * Resetear el Form
        setNombre('');
        setCantidad(0);

    }
    return (
        <form onSubmit={ agregarGasto }>

            { error ? ( <Error mensaje = "Ambos campos son obligatorios o el Presupuesto es Incorrecto"/> ) : null }

            <h2>Agrega tus gastos aquí</h2>

            <div className="campo">
                <label>Nombre del Gasto</label>
                <input 
                    type="text"
                    className="u-full-width" 
                    placeholder="Ej. Tranporte"
                    value={ nombre }
                    onChange={ e => setNombre( e.target.value ) }
                />
            </div>
            
            <div className="campo">
                <label>Canridad del Gasto</label>
                <input 
                    type="number"
                    className="u-full-width" 
                    placeholder="Ej. 300"
                    value={ cantidad }
                    onChange={ e => setCantidad( e.target.value ) }
                />
            </div>

            <input 
                type="submit" 
                className="button-primary u-full-width"
                value="Agregar Gasto"
            />
        </form>
    );
}

Formulario.propTypes = {
    setGasto: Proptypes.func.isRequired, 
    setCrearGasto: Proptypes.func.isRequired
}