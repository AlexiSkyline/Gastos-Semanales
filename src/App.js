import React, { useEffect, useState } from 'react';
import { ControlPresupuesto } from './components/ControlPresupuesto';
import { Formulario } from './components/Formulario';
import { Listado } from './components/Listado';
import { Pregunta } from './components/Pregunta';

function App() {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, setGastos ] = useState([]);
  const [ gasto, setGasto ] = useState([]);
  const [ crearGasto, setCrearGasto ] = useState(false);

  // * usEffect que actualiza el restante
  useEffect( () => {

      // * agregar el nuevo presupuesto
      if( crearGasto ) {
        setGastos([
          ...gastos,
             gasto
        ]);

        // * resta del presupuesto actual
        const presupuestoRestante = restante - gasto.cantidad;
        setRestante( presupuestoRestante );
  
        setCrearGasto( false );
      
      }
    
  }, [ gasto, crearGasto, gastos, restante ]);

  const eliminarGasto = ( id, presupuesto ) => {
      const newGatos = gastos.filter( gasto => gasto.id !== id );
      setGastos( newGatos );
      // * Sumo la cantidad del gasto eliminado al restante total. 
      setRestante( restante + presupuesto );
  }

  return (
    <div className="container">

      <header>
          <h1>Gastos Semanales</h1>

          <div className="contenido-principal contenido">
              
              { mostrarpregunta ? 
                  (
                    <Pregunta 
                        setPresupuesto={ setPresupuesto }
                        setRestante={ setRestante }
                        actualizarPregunta={ actualizarPregunta }
                    />
                  ) 
                  : (
                    <div className="row">
                        <div className="one-half column">
                          <Formulario 
                             setGasto={ setGasto }
                             setCrearGasto={ setCrearGasto }
                          />
                        </div>
      
                        <div className="one-half column">
                          <Listado 
                              gastos={ gastos }
                              eliminarGasto={ eliminarGasto }
                          />

                          <ControlPresupuesto 
                              presupuesto={ presupuesto }
                              restante={ restante }
                          />
                        </div>
                    </div>
                  )
              }
              
          </div>
          
      </header>

    </div>
  );
}

export default App;
