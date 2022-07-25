import React, { useState } from "react";
import UpdateBudgets from "./UpdateBudgets";

const BudgetMapper = ({ budgetsArray, income, axiosUpdateBudget }) => {
    const [updateBool, setUpdateBool] = useState(false);
    return (
        <div>
            {updateBool ? (
                <UpdateBudgets
                    budgetsArray={budgetsArray}
                    income={income}
                    axiosUpdateBudget={axiosUpdateBudget}
                    setUpdateBool={setUpdateBool}
                />
            ) : (
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Categories</th>
                                <th>Amount</th>
                                {/* <th></th> */}
                                <th>Budgeted</th>
                                <th>Recommended</th>
                            </tr>
                        </thead>
                        <tbody>
                            {budgetsArray.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.category.name}</td>
                                        <td>{`$${item.dollar_amount}`}</td>
                                        {/* <td
                                            onClick={() =>
                                                setUpdateBool(!updateBool)
                                            }
                                        >
                                            Update
                                        </td> */}
                                        <td>{`${item.personal_percent}%`}</td>
                                        <td>
                                            {`${item.category.recommended_percent}%`}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <button
                        className="update-buttons"
                        onClick={() => setUpdateBool(!updateBool)}
                    >
                        Update
                    </button>
                </div>
            )}
        </div>
    );
};

export default BudgetMapper;
