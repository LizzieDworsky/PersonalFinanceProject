import React from "react";
import BudgetMapper from "./BudgetMapper";
import CreateNewBudget from "./CreateNewBudget";

const Budget = ({ budgetsArray, categoriesArray, income }) => {
    return (
        <div>
            <h2>Your Budget Matters</h2>
            {budgetsArray[0] ? (
                <BudgetMapper budgetsArray={budgetsArray} />
            ) : (
                <CreateNewBudget
                    categoriesArray={categoriesArray}
                    income={income}
                />
            )}
        </div>
    );
};

export default Budget;
