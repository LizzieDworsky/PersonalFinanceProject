import React, { useState } from "react";
import UpdateSavingInvestment from "./UpdateSavingInvestment";

const SavingsInvestmentsMapper = ({ arrayOfSavings, axiosUpdateSavings }) => {
    const [savingsToEdit, setSavingsToEdit] = useState();
    const [savingEditBool, setSavingEditBool] = useState(false);

    function captureItem(item) {
        setSavingsToEdit(item);
        setSavingEditBool(!savingEditBool);
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
                        let currentSaved = item.total
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                        return (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>
                                    {item.is_investment
                                        ? "Investment"
                                        : "Saving"}
                                </td>
                                <td>${currentSaved}</td>
                                <td onClick={(event) => captureItem(item)}>
                                    Update
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {savingEditBool ? (
                <UpdateSavingInvestment
                    savingToEdit={savingsToEdit}
                    axiosUpdateSavings={axiosUpdateSavings}
                />
            ) : null}
        </div>
    );
};

export default SavingsInvestmentsMapper;
