import React from "react";

const BudgetMapper = ({ budgetsArray }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Categories</th>
                    <th>Dollar Amount</th>
                    <th>Budgeted %</th>
                    <th>Recommended %</th>
                </tr>
            </thead>
            <tbody>
                {budgetsArray.map((item) => {
                    return (
                        <tr key={item.id}>
                            <td>{item.category.name}</td>
                            <td>{item.dollar_amount}</td>
                            <td>{item.personal_percent}</td>
                            <td>{item.category.recommended_percent}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default BudgetMapper;
