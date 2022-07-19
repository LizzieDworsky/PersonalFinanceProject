import React, { useState } from "react";

const UpdateDebts = ({ debtToEdit, axiosUpdateDebt }) => {
    const [currentDebtName, setCurrentDebtName] = useState(debtToEdit.name);
    const [currentDebtOwed, setCurrentDebtOwed] = useState(
        debtToEdit.total_owed
    );
    const [currentDebtMinPayment, setCurrentDebtMinPayment] = useState(
        debtToEdit.min_payment
    );
    const [currentDebtDate, setCurrentDebtDate] = useState(debtToEdit.date);

    async function handleCurrentDebtUpdate(event) {
        event.preventDefault();
        let tempDebt = {
            name: currentDebtName,
            total_owed: currentDebtOwed,
            min_payment: currentDebtMinPayment,
            date: currentDebtDate,
        };
        let arrayForUpdate = [debtToEdit.id, tempDebt];
        axiosUpdateDebt(arrayForUpdate);
    }

    return (
        <form onSubmit={(event) => handleCurrentDebtUpdate(event)}>
            <label>Name</label>
            <input
                type="text"
                value={currentDebtName}
                onChange={(event) => setCurrentDebtName(event.target.value)}
            />
            <label>Total Owed</label>
            <input
                type="text"
                value={currentDebtOwed}
                onChange={(event) => setCurrentDebtOwed(event.target.value)}
            />
            <label>Minimum Payment</label>
            <input
                type="text"
                value={currentDebtMinPayment}
                onChange={(event) =>
                    setCurrentDebtMinPayment(event.target.value)
                }
            />
            <label>Today's Date</label>
            <input
                type="date"
                value={currentDebtDate}
                onChange={(event) => setCurrentDebtDate(event.target.value)}
            />
            <button>Update</button>
        </form>
    );
};

export default UpdateDebts;
