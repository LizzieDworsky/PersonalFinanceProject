import React, { useState } from "react";

const UpdateBudget = ({ budgetsArray, income }) => {
    const [firstBudgetLine, setFirstBudgetLine] = useState(
        budgetsArray[0].dollar_amount
    );
    const [secondBudgetLine, setSecondBudgetLine] = useState(
        budgetsArray[1].dollar_amount
    );
    const [thirdBudgetLine, setThirdBudgetLine] = useState(
        budgetsArray[2].dollar_amount
    );
    const [fourthBudgetLine, setFourthBudgetLine] = useState(
        budgetsArray[3].dollar_amount
    );
    const [fifthBudgetLine, setFifthBudgetLine] = useState(
        budgetsArray[4].dollar_amount
    );
    const [sixthBudgetLine, setSixthBudgetLine] = useState(
        budgetsArray[5].dollar_amount
    );
    const [seventhBudgetLine, setSeventhBudgetLine] = useState(
        budgetsArray[6].dollar_amount
    );
    const [eighthBudgetLine, setEighthBudgetLine] = useState(
        budgetsArray[7].dollar_amount
    );
    const [ninthBudgetLine, setNinthBudgetLine] = useState(
        budgetsArray[8].dollar_amount
    );
    const [tenthBudgetLine, setTenthBudgetLine] = useState(
        budgetsArray[9].dollar_amount
    );
    const [eleventhBudgetLine, setEleventhBudgetLine] = useState(
        budgetsArray[10].dollar_amount
    );

    async function handleUserBudgetUlabeldate(event) {
        event.preventDefault();
        let firstMultNumber = parseInt(firstBudgetLine) / income.monthly;
        let firstPercent = firstMultNumber * 100;
        firstPercent = firstPercent.toFixed();
        let secondMultNumber = parseInt(secondBudgetLine) / income.monthly;
        let secondPercent = secondMultNumber * 100;
        secondPercent = secondPercent.toFixed();
        let thirdMultNumber = parseInt(thirdBudgetLine) / income.monthly;
        let thirdPercent = thirdMultNumber * 100;
        thirdPercent = thirdPercent.toFixed();
        let fourthMultNumber = parseInt(fourthBudgetLine) / income.monthly;
        let fourthPercent = fourthMultNumber * 100;
        fourthPercent = fourthPercent.toFixed();
        let fifthMultNumber = parseInt(fifthBudgetLine) / income.monthly;
        let fifthPercent = fifthMultNumber * 100;
        fifthPercent = fifthPercent.toFixed();
        let sixthMultNumber = parseInt(sixthBudgetLine) / income.monthly;
        let sixthPercent = sixthMultNumber * 100;
        sixthPercent = sixthPercent.toFixed();
        let seventhMultNumber = parseInt(seventhBudgetLine) / income.monthly;
        let seventhPercent = seventhMultNumber * 100;
        seventhPercent = seventhPercent.toFixed();
        let eighthMultNumber = parseInt(eighthBudgetLine) / income.monthly;
        let eighthPercent = eighthMultNumber * 100;
        eighthPercent = eighthPercent.toFixed();
        let ninthMultNumber = parseInt(ninthBudgetLine) / income.monthly;
        let ninthPercent = ninthMultNumber * 100;
        ninthPercent = ninthPercent.toFixed();
        let tenthMultNumber = parseInt(tenthBudgetLine) / income.monthly;
        let tenthPercent = tenthMultNumber * 100;
        tenthPercent = tenthPercent.toFixed();
        let eleventhMultNumber = parseInt(eleventhBudgetLine) / income.monthly;
        let eleventhPercent = eleventhMultNumber * 100;
        eleventhPercent = eleventhPercent.toFixed();

        let budgetUpdateArray = [
            {
                dollar_amount: firstBudgetLine,
                personal_percent: firstPercent,
            },
            {
                dollar_amount: secondBudgetLine,
                personal_percent: secondPercent,
            },
            {
                dollar_amount: thirdBudgetLine,
                personal_percent: thirdPercent,
            },
            {
                dollar_amount: fourthBudgetLine,
                personal_percent: fourthPercent,
            },
            {
                dollar_amount: fifthBudgetLine,
                personal_percent: fifthPercent,
            },
            {
                dollar_amount: sixthBudgetLine,
                personal_percent: sixthPercent,
            },
            {
                dollar_amount: seventhBudgetLine,
                personal_percent: seventhPercent,
            },
            {
                dollar_amount: eighthBudgetLine,
                personal_percent: eighthPercent,
            },
            {
                dollar_amount: ninthBudgetLine,
                personal_percent: ninthPercent,
            },
            {
                dollar_amount: tenthBudgetLine,
                personal_percent: tenthPercent,
            },
            {
                dollar_amount: eleventhBudgetLine,
                personal_percent: eleventhPercent,
            },
        ];
        console.log(budgetUpdateArray);
    }

    return (
        <form onSubmit={(event) => handleUserBudgetUlabeldate(event)}>
            <label>{budgetsArray[0].category.name}</label>
            <input
                tylabele="text"
                value={firstBudgetLine}
                onChange={(event) => setFirstBudgetLine(event.target.value)}
            />
            <label>{budgetsArray[1].category.name}</label>
            <input
                tylabele="text"
                value={secondBudgetLine}
                onChange={(event) => setSecondBudgetLine(event.target.value)}
            />
            <label>{budgetsArray[2].category.name}</label>
            <input
                tylabele="text"
                value={thirdBudgetLine}
                onChange={(event) => setThirdBudgetLine(event.target.value)}
            />
            <label>{budgetsArray[3].category.name}</label>
            <input
                tylabele="text"
                value={fourthBudgetLine}
                onChange={(event) => setFourthBudgetLine(event.target.value)}
            />
            <label>{budgetsArray[4].category.name}</label>
            <input
                tylabele="text"
                value={fifthBudgetLine}
                onChange={(event) => setFifthBudgetLine(event.target.value)}
            />
            <label>{budgetsArray[5].category.name}</label>
            <input
                tylabele="text"
                value={sixthBudgetLine}
                onChange={(event) => setSixthBudgetLine(event.target.value)}
            />
            <label>{budgetsArray[6].category.name}</label>
            <input
                tylabele="text"
                value={seventhBudgetLine}
                onChange={(event) => setSeventhBudgetLine(event.target.value)}
            />
            <label>{budgetsArray[7].category.name}</label>
            <input
                tylabele="text"
                value={eighthBudgetLine}
                onChange={(event) => setEighthBudgetLine(event.target.value)}
            />
            <label>{budgetsArray[8].category.name}</label>
            <input
                tylabele="text"
                value={ninthBudgetLine}
                onChange={(event) => setNinthBudgetLine(event.target.value)}
            />
            <label>{budgetsArray[9].category.name}</label>
            <input
                tylabele="text"
                value={tenthBudgetLine}
                onChange={(event) => setTenthBudgetLine(event.target.value)}
            />
            <label>{budgetsArray[10].category.name}</label>
            <input
                tylabele="text"
                value={eleventhBudgetLine}
                onChange={(event) => setEleventhBudgetLine(event.target.value)}
            />
            <button>Update</button>
        </form>
    );
};

export default UpdateBudget;
