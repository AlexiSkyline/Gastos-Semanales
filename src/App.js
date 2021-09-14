import React, { useState } from 'react';
import { Formulario } from './components/Formulario';
import { Pregunta } from './components/Pregunta';

function App() {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ restante, setRestante ] = useState(0);
  const [ mostrarpregunta, actualizarPregunta ] = useState(true);
  const [ gastos, setGastos ] = useState([]);

  // * Cuando agregamos un nuevo gasto
  const agregarNuevoGasto = ( gasto ) => {
    setGastos([
      ...gastos,
      gasto
    ]);
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
                             agregarNuevoGasto={ agregarNuevoGasto }
                          />
                        </div>
      
                        <div className="one-half column">
                          2
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
