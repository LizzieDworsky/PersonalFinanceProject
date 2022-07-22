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
        axiosUpdateSavings(arrayForUpdate);
    }

    return (
        <form onSubmit={(event) => handleCurrentSavingUpdate(event)}>
            <div className="form-individual-input-boxs">
                <label className="form-labels">Today's Date</label>
                <input
                    className="form-inputs"
                    type="date"
                    value={savingInvestDate}
                    onChange={(event) =>
                        setSavingInvestDate(event.target.value)
                    }
                />
            </div>
            <div className="form-individual-input-boxs">
                <label className="form-labels">Name</label>
                <input
                    className="form-inputs"
                    type="text"
                    value={savingInvestName}
                    onChange={(event) =>
                        setSavingInvestName(event.target.value)
                    }
                />
            </div>
            <div className="form-individual-input-boxs">
                <label className="form-labels">Total Saved</label>
                <input
                    className="form-inputs"
                    type="text"
                    value={savingInvestTotal}
                    onChange={(event) =>
                        setSavingInvestTotal(event.target.value)
                    }
                />
            </div>
            <div className="form-checkbox-investment">
                <label className="form-labels">Investment?</label>
                <input
                    type="checkbox"
                    value={savingInvestBool}
                    checked={savingInvestBool}
                    onChange={(event) => setSavingInvestBool(!savingInvestBool)}
                />
            </div>
            <button className="saving-debt-update-button">Update</button>
        </form>
    );
};

export default UpdateSavingInvestment;
