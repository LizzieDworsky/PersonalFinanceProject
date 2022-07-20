import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const FinanceOverTime = ({ budgetsArray, savingsArray, debtArray }) => {
    const [arrayForChart, setArrayForChart] = useState([]);

    useEffect(() => {
        getDates();
    }, []);

    const currentYear = new Date().getFullYear();
    const monthStrArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const data = [
        ["Month", "Budget Total", "Total Savings and Invested", "Total Debt"],
        ["April", 1000, 400, 500],
        ["May", 1170, 460, 300],
        ["June", 660, 1120, 600],
        ...arrayForChart,
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

    function getDates() {
        let uniqueBudgetMonths = budgetsArray.map((item) => {
            let dateStr = item.date;
            let [year, month, day] = dateStr.split("-");
            if (year == currentYear) {
                month = parseInt(month);
                let itemMonth = monthStrArray[month - 1];
                return itemMonth;
            }
        });
        uniqueBudgetMonths = [...new Set(uniqueBudgetMonths)];
        let newBudgetsArray = budgetsArray.map((item) => {
            let dateStr = item.date;
            let [year, month, day] = dateStr.split("-");
            if (year == currentYear) {
                month = parseInt(month);
                let itemMonth = monthStrArray[month - 1];
                let itemMonthArray = [itemMonth, parseInt(item.dollar_amount)];
                return itemMonthArray;
            }
        });
        let tempArrayTotals = [];
        uniqueBudgetMonths.forEach((element) => {
            let currentMonthBudgetTotal = 0;
            newBudgetsArray.map((item) => {
                if (item[0] === element) {
                    currentMonthBudgetTotal += item[1];
                }
            });
            tempArrayTotals.push([element, currentMonthBudgetTotal, 0, 0]);
        });
        setArrayForChart(tempArrayTotals);
    }

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
