import React from "react";
import CreateSavings from "./CreateSavings";
import SavingsInvestmentsMapper from "./SavingsInvestmentsMapper";

const SavingsInvestments = ({
    arrayOfSavings,
    axiosCreateSavings,
    axiosUpdateSavings,
}) => {
    return (
        <div className="debt-savings-internal-container">
            <h2>Your Saving Matters</h2>
            <hr />
            {arrayOfSavings[0] ? (
                <SavingsInvestmentsMapper
                    arrayOfSavings={arrayOfSavings}
                    axiosUpdateSavings={axiosUpdateSavings}
                />
            ) : null}
            <hr />
            <CreateSavings axiosCreateSavings={axiosCreateSavings} />
        </div>
    );
};

export default SavingsInvestments;
