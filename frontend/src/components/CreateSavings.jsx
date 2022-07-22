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
        <form
            className="budget-update-form"
            onSubmit={(event) => handleCreateSavings(event)}
        >
            <div className="form-individual-input-boxs">
                <label className="form-labels">Name</label>
                <input
                    className="form-inputs"
                    type="text"
                    value={savingName}
                    onChange={(event) => setSavingName(event.target.value)}
                />
            </div>
            <div className="form-individual-input-boxs">
                <label className="form-labels">Total Saved</label>
                <input
                    className="form-inputs"
                    type="text"
                    value={totalSaved}
                    onChange={(event) => setTotalSaved(event.target.value)}
                />
            </div>
            <div className="form-checkbox-investment">
                <label className="form-labels">Investment?</label>
                <input
                    type="checkbox"
                    value={isInvestment}
                    onChange={(event) => setIsInvestment(!isInvestment)}
                />
            </div>
            <button>Add New</button>
        </form>
    );
};

export default CreateSavings;
