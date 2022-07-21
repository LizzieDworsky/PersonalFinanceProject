import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import Income from "../../components/Income";
import CreateIncome from "../../components/CreateIncome";
import Budget from "../../components/Budget";
import Debt from "../../components/Debt";
import SavingsInvestments from "../../components/SavingsInvestments";
import NetWorth from "../../components/NetWorth";
import FinanceOverTime from "../../components/FinanceOverTime";

const HomePage = () => {
    const [user, token] = useAuth();
    const [income, setIncome] = useState();
    const [budgets, setBudgets] = useState([]);
    const [currentMonthBudget, setCurrentMonthBudget] = useState([]);
    const [categories, setCategories] = useState([]);
    const [rerender, setRerender] = useState(false);
    const [debt, setDebt] = useState([]);
    const [currentMonthDebt, setCurrentMonthDebt] = useState([]);
    const [savings, setSavings] = useState([]);
    const [currentMonthSaving, setCurrentMonthSaving] = useState([]);

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
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

    useEffect(() => {
        getIncome();
        getBudgets();
        getCategories();
        getDebt();
        getSavingsInvestments();
    }, [rerender]);

    useEffect(() => {
        filterBudgetsForCurrentMonthOnly();
        filterDebtForCurrentMonthOnly();
    }, [budgets, debt]);

    async function getIncome() {
        try {
            let response = await axios.get(
                "http://127.0.0.1:8000/api/incomes/",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            setIncome(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function createIncome(newIncome) {
        try {
            let response = await axios.post(
                "http://127.0.0.1:8000/api/incomes/",
                newIncome,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            setIncome(response.data);
            getIncome();
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function updateIncome(newIncome) {
        try {
            let response = await axios.put(
                "http://127.0.0.1:8000/api/incomes/",
                newIncome,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            setIncome(response.date);
            getIncome();
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function getBudgets() {
        try {
            let response = await axios.get(
                "http://127.0.0.1:8000/api/budgets/",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            setBudgets(response.data);
            filterBudgetsForCurrentMonthOnly();
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function getCategories() {
        try {
            let response = await axios.get(
                "http://127.0.0.1:8000/api/categories/all"
            );
            setCategories(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function createBudget(arrayForCreate) {
        axios
            .all(
                arrayForCreate.map((element) =>
                    axios.post(
                        "http://127.0.0.1:8000/api/budgets/" + element[0],
                        element[1],
                        {
                            headers: {
                                Authorization: "Bearer " + token,
                            },
                        }
                    )
                )
            )
            .then((data) => {
                console.log(data);
                setRerender(!rerender);
            });
    }

    async function axiosUpdateBudget(arrayforUpdate, setUpdateBool) {
        axios
            .all(
                arrayforUpdate.map((element) =>
                    axios.put(
                        "http://127.0.0.1:8000/api/budgets/" + element[0],
                        element[1],
                        {
                            headers: {
                                Authorization: "Bearer " + token,
                            },
                        }
                    )
                )
            )
            .then((data) => {
                console.log(data);
                setRerender(!rerender);
                setUpdateBool(false);
            });
    }

    async function getDebt() {
        try {
            let response = await axios.get("http://127.0.0.1:8000/api/debts/", {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            setDebt(response.data);
            filterDebtForCurrentMonthOnly();
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function getSavingsInvestments() {
        try {
            let response = await axios.get(
                "http://127.0.0.1:8000/api/savinginvest/",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            setSavings(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function createNewDebt(tempNewDebt) {
        try {
            let response = await axios.post(
                "http://127.0.0.1:8000/api/debts/",
                tempNewDebt,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            getDebt();
        } catch (error) {
            console.log(error.response.data);
        }
    }
    async function createNewSavingInvest(tempNewSavInvest) {
        try {
            let response = await axios.post(
                "http://127.0.0.1:8000/api/savinginvest/",
                tempNewSavInvest,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            getSavingsInvestments();
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function axiosUpdateDebt(arrayForUpdate) {
        try {
            let response = await axios.put(
                "http://127.0.0.1:8000/api/debts/" + arrayForUpdate[0],
                arrayForUpdate[1],
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            window.location.reload();
        } catch (error) {
            console.log(error.response.data);
        }
    }
    async function axiosUpdateSavings(arrayForUpdate) {
        try {
            let response = await axios.put(
                "http://127.0.0.1:8000/api/savinginvest/" + arrayForUpdate[0],
                arrayForUpdate[1],
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            window.location.reload();
        } catch (error) {
            console.log(error.response.data);
        }
    }

    async function filterBudgetsForCurrentMonthOnly() {
        let tempCurrentMonth = [];
        budgets.map((item) => {
            let dateStr = item.date;
            let [year, month, day] = dateStr.split("-");
            month = parseInt(month - 1);
            if (year == currentYear && month === currentMonth) {
                tempCurrentMonth.push(item);
            }
        });
        setCurrentMonthBudget(tempCurrentMonth);
    }

    async function filterDebtForCurrentMonthOnly() {
        let tempCurrentMonth = [];
        debt.map((item) => {
            let dateStr = item.date;
            let [year, month, day] = dateStr.split("-");
            month = parseInt(month - 1);
            if (year == currentYear && month === currentMonth) {
                tempCurrentMonth.push(item);
            }
        });
        setCurrentMonthDebt(tempCurrentMonth);
    }

    return (
        <div>
            {income ? (
                <Income state={income} updateIncome={updateIncome} />
            ) : (
                <CreateIncome createIncome={createIncome} />
            )}
            {income ? (
                <Budget
                    budgetsArray={currentMonthBudget}
                    categoriesArray={categories}
                    income={income}
                    createBudget={createBudget}
                    axiosUpdateBudget={axiosUpdateBudget}
                />
            ) : null}
            {income ? (
                <Debt
                    arrayOfDebts={currentMonthDebt}
                    createNewDebt={createNewDebt}
                    axiosUpdateDebt={axiosUpdateDebt}
                />
            ) : null}
            {income ? (
                <SavingsInvestments
                    arrayOfSavings={savings}
                    axiosCreateSavings={createNewSavingInvest}
                    axiosUpdateSavings={axiosUpdateSavings}
                />
            ) : null}
            {income ? (
                <NetWorth savingsInvestmentArray={savings} debtArray={debt} />
            ) : null}
            {income ? (
                <FinanceOverTime
                    budgetsArray={budgets}
                    savingsArray={savings}
                    debtArray={debt}
                    currentYear={currentYear}
                    monthStrArray={monthStrArray}
                />
            ) : null}
        </div>
    );
};

export default HomePage;
