import React from "react";

const SavingsInvestmentsMapper = ({ arrayOfSavings }) => {
    return (
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
                                {item.is_investment ? "Investment" : "Saving"}
                            </td>
                            <td>{item.total}</td>
                            <td>Update</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default SavingsInvestmentsMapper;
