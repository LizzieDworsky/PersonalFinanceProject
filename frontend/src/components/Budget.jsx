import React from "react";
import BudgetMapper from "./BudgetMapper";

const Budget = ({ budgetsArray }) => {
    return (
        <div>
            <h2>Your Budget Matters</h2>
            <BudgetMapper budgetsArray={budgetsArray} />
        </div>
    );
};

export default Budget;
