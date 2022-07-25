import React, { useState } from "react";

const CreateIncome = ({ createIncome }) => {
    const [yearly, setYearly] = useState();
    const [monthly, setMonthly] = useState();

    async function handleCreateIncome(event) {
        event.preventDefault();
        let tempIncome = {
            yearly: yearly,
            monthly: monthly,
        };
        createIncome(tempIncome);
    }

    return (
        <div className="create-income-container">
            <h2>Your Money Matters</h2>
            <p className="add-income-paragraph">Add Your Income</p>
            <form
                className="budget-update-form"
                onSubmit={(event) => handleCreateIncome(event)}
            >
                <div className="form-individual-input-boxs">
                    <label className="form-labels">Yearly(gross)</label>
                    <input
                        className="form-inputs"
                        type="text"
                        value={yearly}
                        onChange={(event) => setYearly(event.target.value)}
                    />
                </div>
                <div className="form-individual-input-boxs">
                    <label className="form-labels">Monthly(net)</label>
                    <input
                        className="form-inputs"
                        type="text"
                        value={monthly}
                        onChange={(event) => setMonthly(event.target.value)}
                    />
                </div>
                <button className="create-income-button">Create</button>
            </form>
        </div>
    );
};

export default CreateIncome;
