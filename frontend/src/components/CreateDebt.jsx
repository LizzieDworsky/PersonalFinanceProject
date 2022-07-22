import React, { useState } from "react";

const CreateDebt = ({ createNewDebt }) => {
    const [debtName, setDebtName] = useState("");
    const [totalOwed, setTotalOwed] = useState("");
    const [minPayment, setMinPayment] = useState("");

    async function handleCreateDebt(event) {
        event.preventDefault();
        let tempDebt = {
            name: debtName,
            total_owed: totalOwed,
            min_payment: minPayment,
        };
        createNewDebt(tempDebt);
    }

    return (
        <form
            className="budget-update-form"
            onSubmit={(event) => handleCreateDebt(event)}
        >
            <div className="form-individual-input-boxs">
                <label className="form-labels">Debt Name</label>
                <input
                    className="form-inputs"
                    type="text"
                    value={debtName}
                    onChange={(event) => setDebtName(event.target.value)}
                />
            </div>
            <div className="form-individual-input-boxs">
                <label className="form-labels">Minimum Payment</label>
                <input
                    className="form-inputs"
                    type="text"
                    value={minPayment}
                    onChange={(event) => setMinPayment(event.target.value)}
                />
            </div>
            <div className="form-individual-input-boxs">
                <label className="form-labels">Total Owed</label>
                <input
                    className="form-inputs"
                    type="text"
                    value={totalOwed}
                    onChange={(event) => setTotalOwed(event.target.value)}
                />
            </div>
            <button className="budget-update-button">Add New</button>
        </form>
    );
};

export default CreateDebt;
