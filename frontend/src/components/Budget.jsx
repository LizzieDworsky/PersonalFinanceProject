import React from "react";
import BudgetMapper from "./BudgetMapper";
import CreateNewBudget from "./CreateNewBudget";

const Budget = ({
    budgetsArray,
    categoriesArray,
    income,
    createBudget,
    axiosUpdateBudget,
}) => {
    return (
        <div className="budget-comp-container">
            <h2>Your Budget Matters</h2>
            <hr />
            {budgetsArray[0] ? (
                <BudgetMapper
                    budgetsArray={budgetsArray}
                    income={income}
                    axiosUpdateBudget={axiosUpdateBudget}
                />
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
