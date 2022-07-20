import React from "react";
import { Chart } from "react-google-charts";

const FinanceOverTime = ({ budgetsArray, savingsArray, debtArray }) => {
    const data = [
        ["Month", "Budget Total", "Total Savings and Invested", "Total Debt"],
        ["April", 1000, 400, 500],
        ["May", 1170, 460, 300],
        ["June", 660, 1120, 600],
        ["July", 1030, 540, 300],
    ];

    const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
        backgroundColor: "#ffffff",
        colors: ["orange", "FFFF00"],
        vAxis: {
            format: "currency",
            gridlines: {
                color: "grey",
            },
        },
    };

    return (
        <div>
            <h2>Your Finances Over Time</h2>
            <Chart
                chartType="LineChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
};

export default FinanceOverTime;
