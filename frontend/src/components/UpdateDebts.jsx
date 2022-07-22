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
            <div className="form-individual-input-boxs">
                <label className="form-labels">Today's Date</label>
                <input
                    className="form-inputs"
                    type="date"
                    value={currentDebtDate}
                    onChange={(event) => setCurrentDebtDate(event.target.value)}
                />
            </div>
            <div className="form-individual-input-boxs">
                <label className="form-labels">Name</label>
                <input
                    className="form-inputs"
                    type="text"
                    value={currentDebtName}
                    onChange={(event) => setCurrentDebtName(event.target.value)}
                />
            </div>
            <div className="form-individual-input-boxs">
                <label className="form-labels">Total Owed</label>
                <input
                    className="form-inputs"
                    type="text"
                    value={currentDebtOwed}
                    onChange={(event) => setCurrentDebtOwed(event.target.value)}
                />
            </div>
            <div className="form-individual-input-boxs">
                <label className="form-labels">Minimum Payment</label>
                <input
                    className="form-inputs"
                    type="text"
                    value={currentDebtMinPayment}
                    onChange={(event) =>
                        setCurrentDebtMinPayment(event.target.value)
                    }
                />
            </div>
            <button className="debt-add-update-button saving-debt-update-button">
                Update
            </button>
        </form>
    );
};

export default UpdateDebts;
