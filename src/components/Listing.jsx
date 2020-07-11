import React from 'react'
import Expense from './Expense';

const Listing = ({ expenses }) => ( 
    <div className="gastos-realizados">
        <h2>Listado</h2>

        { 
            expenses.map( 
                e =><Expense key={e.id} name={e.name} amount={e.amount}/>
            ) 
        }
    </div>
);

export default Listing;