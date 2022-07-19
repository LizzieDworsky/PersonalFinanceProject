import React from "react";

const DebtMapper = ({ arrayOfDebts }) => {
    return (
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
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.min_payment}</td>
                            <td>{item.total_owed}</td>
                            <td>Update</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default DebtMapper;
