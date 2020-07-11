import React from 'react'

const Expense = ({ name, amount }) => (
    <li className="gastos">
        <p>
            {name}

            <span className="gasto">$ {amount}</span>
        </p>
    </li>
);

export default Expense;