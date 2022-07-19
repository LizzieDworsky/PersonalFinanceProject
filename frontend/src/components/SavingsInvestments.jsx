import React from "react";
import SavingsInvestmentsMapper from "./SavingsInvestmentsMapper";

const SavingsInvestments = ({ arrayOfSavings, axiosCreateSavings }) => {
    return (
        <div>
            <h2>Your Saving Matters</h2>
            {arrayOfSavings[0] ? (
                <SavingsInvestmentsMapper arrayOfSavings={arrayOfSavings} />
            ) : null}
        </div>
    );
};

export default SavingsInvestments;
