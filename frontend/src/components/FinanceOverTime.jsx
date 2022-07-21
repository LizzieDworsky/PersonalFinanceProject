import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const FinanceOverTime = ({
    budgetsArray,
    savingsArray,
    debtArray,
    currentYear,
    monthStrArray,
}) => {
    const [arrayForChart, setArrayForChart] = useState([]);

    useEffect(() => {
        getDates();
    }, [budgetsArray, savingsArray, debtArray]);

    const data = [
        ["Month", "Budget Total", "Total Savings and Invested", "Total Debt"],
        ...arrayForChart,
    ];

    const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
        backgroundColor: "#ffffff",
        colors: ["orange", "000080", "green"],
        vAxis: {
            format: "currency",
            gridlines: {
                color: "grey",
            },
        },
    };

    function getDates() {
        let allBudgetMonthsForCurrentYear = budgetsArray.map((item) => {
            let dateStr = item.date;
            let [year, month, day] = dateStr.split("-");
            if (year == currentYear) {
                month = parseInt(month);
                return month;
            }
        });
        let allSavingsMonthsForCurrentYear = savingsArray.map((item) => {
            let dateStr = item.date;
            let [year, month, day] = dateStr.split("-");
            if (year == currentYear) {
                month = parseInt(month);
                return month;
            }
        });
        let allDebtMonthsForCurrentYear = debtArray.map((item) => {
            let dateStr = item.date;
            let [year, month, day] = dateStr.split("-");
            if (year == currentYear) {
                month = parseInt(month);
                return month;
            }
        });
        let allMonthsCurrentYear = [
            ...allBudgetMonthsForCurrentYear,
            ...allDebtMonthsForCurrentYear,
            ...allSavingsMonthsForCurrentYear,
        ];
        let uniqueMonthsNumber = [...new Set(allMonthsCurrentYear)];
        let uniqueMonthsStr = uniqueMonthsNumber.map((item) => {
            return monthStrArray[item - 1];
        });
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
        let newSavingsArray = savingsArray.map((item) => {
            let dateStr = item.date;
            let [year, month, day] = dateStr.split("-");
            if (year == currentYear) {
                month = parseInt(month);
                let itemMonth = monthStrArray[month - 1];
                let itemMonthArray = [itemMonth, parseInt(item.total)];
                return itemMonthArray;
            }
        });
        let newDebtArray = debtArray.map((item) => {
            let dateStr = item.date;
            let [year, month, day] = dateStr.split("-");
            if (year == currentYear) {
                month = parseInt(month);
                let itemMonth = monthStrArray[month - 1];
                let itemMonthArray = [itemMonth, parseInt(item.total_owed)];
                return itemMonthArray;
            }
        });
        let tempArrayTotals = [];
        uniqueMonthsStr.forEach((element) => {
            let currentMonthBudgetTotal = 0;
            newBudgetsArray.map((item) => {
                if (item[0] === element) {
                    currentMonthBudgetTotal += item[1];
                }
            });
            let currentMonthSavingsTotal = 0;
            newSavingsArray.map((item) => {
                if (item[0] === element) {
                    currentMonthSavingsTotal += item[1];
                }
            });
            let currentMonthDebtTotal = 0;
            newDebtArray.map((item) => {
                if (item[0] === element) {
                    currentMonthDebtTotal -= item[1];
                }
            });
            tempArrayTotals.push([
                element,
                currentMonthBudgetTotal,
                currentMonthSavingsTotal,
                currentMonthDebtTotal,
            ]);
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
