import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Question from './components/Question';
import { useState } from 'react';
import Form from './components/Form';
import Listing from './components/Listing';
import RestBudget from './components/RestBudget';

const App = () => {

    //Definiendo el State
    const [ budget, setBudget ] = useState(0);
    const [ rest, setRest ] = useState(0);
    const [ displayQuestion, setDisplayQuestion ] = useState(true);
    const [ expenses, setExpenses ] = useState([]);
    const [ expense, setExpense ] = useState({});
    const [ createExpense, setCreateExpense ] = useState(false);

    //UseEffect para actualizar el resto

    useEffect(
        () => {
            if(createExpense) {
                //Agrega el presupuesto
                setExpenses([
                    ...expenses,
                    expense
                ]);

                // Resta el presupuesto actual
                const budgetRest = rest - expense.amount;
                setRest(budgetRest);

            }

            setCreateExpense(false);
        },
        [expense, createExpense, expenses, rest]
    );

    return ( 
        <div className="container">
            <header>
                <h1>Gasto semanal</h1>
            </header>

            <div className="contenido-principal">
                { displayQuestion ? 
                    (
                        <Question 
                            setBudget={setBudget}
                            setRest={setRest}
                            setDisplayQuestion={setDisplayQuestion}
                        />
                    ) : 

                    (
                        <div className="row">
                            <div className="one-half column">
                                <Form 
                                    setExpense={setExpense}
                                    setCreateExpense={setCreateExpense}
                                />
                            </div>
                            <div className="one-half column">
                                <Listing 
                                    expenses={expenses}
                                />

                                <RestBudget 
                                    budget={budget}
                                    rest={rest}
                                />
                            </div>
                        </div>
                    )
                }
                

                
            </div>
        </div>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);