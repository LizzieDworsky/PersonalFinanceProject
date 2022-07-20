import React from "react";
import CreateSavings from "./CreateSavings";
import SavingsInvestmentsMapper from "./SavingsInvestmentsMapper";

const SavingsInvestments = ({
    arrayOfSavings,
    axiosCreateSavings,
    axiosUpdateSavings,
}) => {
    return (
        <div>
            <h2>Your Saving Matters</h2>
            {arrayOfSavings[0] ? (
                <SavingsInvestmentsMapper
                    arrayOfSavings={arrayOfSavings}
                    axiosUpdateSavings={axiosUpdateSavings}
                />
            ) : null}
            <CreateSavings axiosCreateSavings={axiosCreateSavings} />
        </div>
    );
};

export default SavingsInvestments;
