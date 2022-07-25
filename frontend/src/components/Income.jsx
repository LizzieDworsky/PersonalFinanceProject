import React, { useState } from "react";

const Income = ({ state, updateIncome }) => {
    const [yearly, setYearly] = useState();
    const [monthly, setMonthly] = useState();
    const currentYearly = state.yearly
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const currentMonthly = state.monthly
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    async function handleUpdate(event) {
        event.preventDefault();
        let tempIncome = {
            yearly: yearly,
            monthly: monthly,
        };
        await updateIncome(tempIncome);
    }

    return (
        <div className="income-comp-container">
            <h2>Your Income Matters</h2>
            <p className="income-script">Yearly: ${currentYearly}</p>
            <p className="income-script">Monthly: ${currentMonthly}</p>
            <form onSubmit={(event) => handleUpdate(event)}>
                <input
                    className="update-income-input"
                    type="text"
                    value={yearly}
                    onChange={(event) => setYearly(event.target.value)}
                />
                <label className="update-income-label">Gross</label>
                <input
                    className="update-income-input"
                    type="text"
                    value={monthly}
                    onChange={(event) => setMonthly(event.target.value)}
                />
                <label className="update-income-label">Net</label>
                <br />
                <button className="update-buttons">Update</button>
            </form>
        </div>
    );
};

export default Income;
