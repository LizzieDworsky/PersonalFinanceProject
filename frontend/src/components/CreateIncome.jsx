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
        <div>
            <h2>Your Money Matters</h2>
            <p>Add Your Income</p>
            <form onSubmit={(event) => handleCreateIncome(event)}>
                <label>Yearly(gross)</label>
                <input
                    type="text"
                    value={yearly}
                    onChange={(event) => setYearly(event.target.value)}
                />
                <label>Monthly(net)</label>
                <input
                    type="text"
                    value={monthly}
                    onChange={(event) => setMonthly(event.target.value)}
                />
                <button>Create</button>
            </form>
        </div>
    );
};

export default CreateIncome;
