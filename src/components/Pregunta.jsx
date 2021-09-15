import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Error } from './Error';

export const Pregunta = ({ setPresupuesto, setRestante, actualizarPregunta }) => {

    const [ cantidad, setCantidad ] = useState(0);
    const [error, setError] = useState(false);

    // * Función que lee el presupuesto 
    const definirPresupuesto = ( e ) => {
        setCantidad( parseInt( e.target.value ) );
    }

    const agregarPresupuesto = ( e ) => {
        e.preventDefault();

        // * Validar
        if( cantidad < 1 || isNaN( cantidad ) ) {
            setError( true );
            return;
        }

        // * Si pasa la validación
        setError( false );
        setPresupuesto( cantidad );
        setRestante( cantidad );
        actualizarPregunta( false );
    } 

    return (
        <>
            <h2>Coloca tu Presupuesto</h2>

            { error ? <Error mensaje="El Presupuesto es Incorrecto"/> : null }

            <form onSubmit={ agregarPresupuesto }>
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={ definirPresupuesto }
                />

                <input 
                    type="submit" 
                    className="button-primary u-full-width"
                    values="Definir Presupuesto"
                />
            </form>  
        </>
    )
}

Pregunta.propTypes = {
    setPresupuesto: Proptypes.func.isRequired, 
    setRestante: Proptypes.func.isRequired, 
    actualizarPregunta: Proptypes.func.isRequired
}