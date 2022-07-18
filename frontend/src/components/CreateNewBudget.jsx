import React from "react";

const CreateNewBudget = ({ categoriesArray, income, createBudget }) => {
    async function callCreateBudget(event) {
        await createUserBudget(event);
        //refreshPage();
    }

    async function createUserBudget(event) {
        let result = categoriesArray.map((item) => {
            let itemPercent = item.recommended_percent;
            let multiplicationNumber = itemPercent / 100;
            let itemAmount = income.monthly * multiplicationNumber;
            let currentBudgetLine = {
                dollar_amount: itemAmount,
                personal_percent: itemPercent,
            };
            return [item.id, currentBudgetLine];
        });
        createBudget(result);
    }

    async function refreshPage() {
        window.location.reload();
    }

    return (
        <div>
            <button onClick={(event) => callCreateBudget(event)}>
                Create New Budget
            </button>
        </div>
    );
};

export default CreateNewBudget;
