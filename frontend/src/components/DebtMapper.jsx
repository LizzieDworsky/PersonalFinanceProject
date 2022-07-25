import React, { useState } from "react";
import UpdateDebts from "./UpdateDebts";

const DebtMapper = ({ arrayOfDebts, axiosUpdateDebt }) => {
    const [debtToEdit, setDebtToEdit] = useState();
    const [debtEditBool, setDebtEditBool] = useState(false);

    function captureItem(item) {
        setDebtToEdit(item);
        setDebtEditBool(!debtEditBool);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Minimum Payment</th>
                        <th>Total Owed</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {arrayOfDebts.map((item) => {
                        let currentOwed = item.total_owed
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>${item.min_payment}</td>
                                <td>${currentOwed}</td>
                                <td onClick={(event) => captureItem(item)}>
                                    Update
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {debtEditBool ? (
                <UpdateDebts
                    debtToEdit={debtToEdit}
                    axiosUpdateDebt={axiosUpdateDebt}
                />
            ) : null}
        </div>
    );
};

export default DebtMapper;
