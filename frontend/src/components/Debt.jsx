import React from "react";
import CreateDebt from "./CreateDebt";
import DebtMapper from "./DebtMapper";

const Debt = ({ arrayOfDebts, createNewDebt }) => {
    return (
        <div>
            <h2>Your Debt Matters</h2>
            {arrayOfDebts[0] ? (
                <DebtMapper arrayOfDebts={arrayOfDebts} />
            ) : null}
            <CreateDebt createNewDebt={createNewDebt} />
        </div>
    );
};

export default Debt;
