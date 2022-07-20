import React, { useState } from "react";
import UpdateSavingInvestment from "./UpdateSavingInvestment";

const SavingsInvestmentsMapper = ({ arrayOfSavings, axiosUpdateSavings }) => {
    const [savingsToEdit, setSavingsToEdit] = useState();

    function captureItem(item) {
        setSavingsToEdit(item);
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {arrayOfSavings.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    {item.is_investment
                                        ? "Investment"
                                        : "Saving"}
                                </td>
                                <td>{item.total}</td>
                                <td onClick={(event) => captureItem(item)}>
                                    Update
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {savingsToEdit ? (
                <UpdateSavingInvestment
                    savingToEdit={savingsToEdit}
                    axiosUpdateSavings={axiosUpdateSavings}
                />
            ) : null}
        </div>
    );
};

export default SavingsInvestmentsMapper;
