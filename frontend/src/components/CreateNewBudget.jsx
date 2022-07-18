import React, { useState } from "react";

const CreateNewBudget = ({ categoriesArray, income }) => {
    async function createUserBudget(event) {
        categoriesArray.map((item) => {
            let itemPercent = item.recommended_percent;
            let multiplicationNumber = itemPercent / 100;
            let itemAmount = income.monthly * multiplicationNumber;
            let currentBudgetLine = {
                dollar_amount: itemAmount,
                personal_percent: itemPercent,
            };
            return console.log(currentBudgetLine);
        });
    }

    return (
        <div>
            <button onClick={(event) => createUserBudget(event)}>
                Create New Budget
            </button>
        </div>
    );
};

export default CreateNewBudget;
