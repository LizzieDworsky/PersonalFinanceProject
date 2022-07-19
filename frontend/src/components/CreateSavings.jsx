import React, { useState } from "react";

const CreateSavings = ({ axiosCreateSavings }) => {
    const [savingName, setSavingName] = useState("");
    const [totalSaved, setTotalSaved] = useState("");
    const [isInvestment, setIsInvestment] = useState(false);

    async function handleCreateSavings(event) {
        event.preventDefault();
        let tempSavings = {
            name: savingName,
            total: totalSaved,
            is_investment: isInvestment,
        };
        axiosCreateSavings(tempSavings);
    }

    return (
        <form onSubmit={(event) => handleCreateSavings(event)}>
            <label>Name</label>
            <input
                type="text"
                value={savingName}
                onChange={(event) => setSavingName(event.target.value)}
            />
            <label>Total Saved</label>
            <input
                type="text"
                value={totalSaved}
                onChange={(event) => setTotalSaved(event.target.value)}
            />
            <label>Investment?</label>
            <input
                type="checkbox"
                value={isInvestment}
                onChange={(event) => setIsInvestment(!isInvestment)}
            />
            <button>Add New</button>
        </form>
    );
};

export default CreateSavings;
