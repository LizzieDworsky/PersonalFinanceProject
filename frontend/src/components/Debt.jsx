import React from "react";
import CreateDebt from "./CreateDebt";
import DebtMapper from "./DebtMapper";

const Debt = ({ arrayOfDebts, createNewDebt, axiosUpdateDebt }) => {
    return (
        <div>
            <h2>Your Debt Matters</h2>
            {arrayOfDebts[0] ? (
                <DebtMapper
                    arrayOfDebts={arrayOfDebts}
                    axiosUpdateDebt={axiosUpdateDebt}
                />
            ) : null}
            <CreateDebt createNewDebt={createNewDebt} />
        </div>
    );
};

export default Debt;
