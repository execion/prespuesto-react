import React, { Fragment } from 'react';
import { checkBudget } from '../helper';

const RestBudget = ({ budget, rest }) => {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto: $ {budget}
            </div>

            <div className={checkBudget(budget, rest)}>
                Restante: $ {rest}
            </div>
        </Fragment>
    );
}

export default RestBudget;