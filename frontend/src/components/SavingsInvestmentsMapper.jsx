import React, { useState } from "react";

const SavingsInvestmentsMapper = ({ arrayOfSavings, axiosUpdateSavings }) => {
    const [savingsToEdit, setSavingsToEdit] = useState();

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
                                <td>Update</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {}
        </div>
    );
};

export default SavingsInvestmentsMapper;
