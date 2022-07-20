import React, { useState } from "react";

const UpdateSavingInvestment = ({ savingToEdit, axiosUpdateSavings }) => {
    const [savingInvestName, setSavingInvestName] = useState(savingToEdit.name);
    const [savingInvestTotal, setSavingInvestTotal] = useState(
        savingToEdit.total
    );
    const [savingInvestBool, setSavingInvestBool] = useState(
        savingToEdit.is_investment
    );
    const [savingInvestDate, setSavingInvestDate] = useState(savingToEdit.date);

    async function handleCurrentSavingUpdate(event) {
        event.preventDefault();
        let tempSaving = {
            name: savingInvestName,
            total: savingInvestTotal,
            is_investment: savingInvestBool,
            date: savingInvestDate,
        };
        let arrayForUpdate = [savingToEdit.id, tempSaving];
        console.log(arrayForUpdate);
    }

    return (
        <form onSubmit={(event) => handleCurrentSavingUpdate(event)}>
            <label>Name</label>
            <input
                type="text"
                value={savingInvestName}
                onChange={(event) => setSavingInvestName(event.target.value)}
            />
            <label>Total Saved</label>
            <input
                type="text"
                value={savingInvestTotal}
                onChange={(event) => setSavingInvestTotal(event.target.value)}
            />
            <label>Investment?</label>
            <input
                type="checkbox"
                value={savingInvestBool}
                checked={savingInvestBool}
                onChange={(event) => setSavingInvestBool(!savingInvestBool)}
            />
            <label>Today's Date</label>
            <input
                type="date"
                value={savingInvestDate}
                onChange={(event) => setSavingInvestDate(event.target.value)}
            />
            <button>Update</button>
        </form>
    );
};

export default UpdateSavingInvestment;
