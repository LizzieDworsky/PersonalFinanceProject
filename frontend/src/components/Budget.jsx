import React from "react";
import BudgetMapper from "./BudgetMapper";
import CreateNewBudget from "./CreateNewBudget";

const Budget = ({ budgetsArray, categoriesArray, income, createBudget }) => {
    return (
        <div>
            <h2>Your Budget Matters</h2>
            {budgetsArray[0] ? (
                <BudgetMapper budgetsArray={budgetsArray} income={income} />
            ) : (
                <CreateNewBudget
                    categoriesArray={categoriesArray}
                    income={income}
                    createBudget={createBudget}
                />
            )}
        </div>
    );
};

export default Budget;
