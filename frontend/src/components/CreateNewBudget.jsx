import React, { useState } from "react";

const CreateNewBudget = ({ categoriesArray }) => {
    async function createUserBudget(event) {
        categoriesArray.map((item) => {
            return console.log(item.name);
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
