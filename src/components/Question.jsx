import React, { Fragment , useState} from 'react';
import Error from './Error';

const Question = ( { setBudget, setRest, setDisplayQuestion } ) => {
    const [ amount, setAmount ] = useState(0);

    const [ error, setError ] = useState(false);

    const definirPresupuesto = e => {
        setAmount( parseInt(e.target.value), 10 );
    }

    const agregarPresupuesto = e => {
        e.preventDefault();

        //Validar
        if ( amount < 1 || isNaN(amount) ) {
            setError(true);
            return;
        }
        // En caso de valor aceptado
        setError(false);
        setBudget(amount);
        setRest(amount);
        setDisplayQuestion(false);
    }
    return ( 
        <Fragment>
            <h2>Ingresa tu presupuesto</h2>

            { error ? <Error message="Valor ingresado no válido"/> :  null}

            <form
                onSubmit={agregarPresupuesto}
            >
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ingresa tu presupuesto"
                    onChange={definirPresupuesto}
                />

                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                />
            </form>
        </Fragment>
    );
}

export default Question;