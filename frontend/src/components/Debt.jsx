import React from "react";
import DebtMapper from "./DebtMapper";

const Debt = ({ arrayOfDebts }) => {
    return (
        <div>
            <h2>Your Debt Matters</h2>
            {arrayOfDebts[0] ? (
                <DebtMapper arrayOfDebts={arrayOfDebts} />
            ) : null}
        </div>
    );
};

export default Debt;
