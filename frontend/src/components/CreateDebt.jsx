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
        <form onSubmit={(event) => handleCreateDebt(event)}>
            <label>Debt Name</label>
            <input
                type="text"
                value={debtName}
                onChange={(event) => setDebtName(event.target.value)}
            />
            <label>Minimum Payment</label>
            <input
                type="text"
                value={minPayment}
                onChange={(event) => setMinPayment(event.target.value)}
            />
            <label>Total Owed</label>
            <input
                type="text"
                value={totalOwed}
                onChange={(event) => setTotalOwed(event.target.value)}
            />
            <button>Create</button>
        </form>
    );
};

export default CreateDebt;
