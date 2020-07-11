import React, { useState } from 'react';
import Error from './Error';
import shortid from 'shortid';

const Form = ({ setExpense, setCreateExpense }) => {
    const [ name, setName ] = useState("");
    const [ amount, setAmount ] = useState(0);
    const [ error, setError ] = useState(false);

    //Agrega el gasto
    const addCost = e => {
        e.preventDefault();

        //validar
        if(amount < 1 || isNaN(amount) || name.trim() === ""){
            setError(true);
            return;
        }
        setError(false);

        // Construir gasto

        const expense = {
            name,
            amount,
            id: shortid.generate()
        }

        //Establecer gasto en la app principal
        setExpense(expense);
        setCreateExpense(true);

        //Resetear formulario
        setName("");
        setAmount(0);
    };

    return (
        <form
            onSubmit={addCost}
        >
            <h2>Agrega tus gastos</h2>

            { error ? <Error message="Ambos campos son obligatorios o Presupuesto incorrecto" /> : null }

            <div className="campo">
                <label>Ingrese su gasto</label>
                <input 
                    type="text" 
                    className="u-full-width"
                    placeholder="e.g. Transport"
                    value={ name }
                    onChange={ e => setName(e.target.value) }
                />
            </div>

            <div className="campo">
                <label>Ingrese la cantidad</label>
                <input 
                    type="number" 
                    className="u-full-width"
                    placeholder="e.g. 200"
                    value={ amount }
                    onChange= { e => setAmount(parseInt(e.target.value, 10)) }
                />
            </div>

            <input 
                type="submit" 
                className="button-primary u-full-width"
                value="Add expense"
            />
        </form>
    );
}

export default Form;
