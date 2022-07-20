import React, { useEffect, useState } from "react";

const NetWorth = ({ savingsInvestmentArray, debtArray }) => {
    const [netWorth, setNetWorth] = useState(0);

    useEffect(() => {
        createNetWorth();
    }, [savingsInvestmentArray, debtArray]);

    function createNetWorth() {
        let assetTotal = 0;
        let liabilitiesTotal = 0;
        savingsInvestmentArray.map((item) => {
            assetTotal += parseInt(item.total);
        });
        debtArray.map((item) => {
            liabilitiesTotal += parseInt(item.total_owed);
        });
        let tempNetWorth = assetTotal - liabilitiesTotal;
        console.log(tempNetWorth);
        setNetWorth(tempNetWorth);
    }

    return (
        <div>
            <h2>Your Net Worth</h2>
            <h3>{netWorth}</h3>
        </div>
    );
};

export default NetWorth;
