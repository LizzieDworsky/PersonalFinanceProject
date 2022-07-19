import React, { useState } from "react";

const Income = ({ state, updateIncome }) => {
    const [yearly, setYearly] = useState();
    const [monthly, setMonthly] = useState();

    async function handleUpdate(event) {
        event.preventDefault();
        let tempIncome = {
            yearly: yearly,
            monthly: monthly,
        };
        await updateIncome(tempIncome);
    }

    return (
        <div>
            <h2>Your Income Matters</h2>
            <p>Yearly: {state.yearly}</p>
            <p>Monthly: {state.monthly}</p>
            <form onSubmit={(event) => handleUpdate(event)}>
                <input
                    type="text"
                    value={yearly}
                    onChange={(event) => setYearly(event.target.value)}
                />
                <input
                    type="text"
                    value={monthly}
                    onChange={(event) => setMonthly(event.target.value)}
                />
                <button>Update</button>
            </form>
        </div>
    );
};

export default Income;
