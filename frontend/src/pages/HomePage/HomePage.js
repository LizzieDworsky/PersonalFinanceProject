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
    const [categories, setCategories] = useState([]);
    const [rerender, setRerender] = useState(false);
    const [debt, setDebt] = useState([]);
    const [savings, setSavings] = useState([]);
    const [newDebt, setNewDebt] = useState({});

    useEffect(() => {
        getIncome();
        getBudgets();
        getCategories();
        getDebt();
        getSavingsInvestments();
    }, [rerender]);

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
            setNewDebt(response.data);
            console.log(newDebt);
            getDebt();
        } catch (error) {
            console.log(error.response.data);
        }
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
                    budgetsArray={budgets}
                    categoriesArray={categories}
                    income={income}
                    createBudget={createBudget}
                    axiosUpdateBudget={axiosUpdateBudget}
                />
            ) : null}
            {income ? (
                <Debt
                    arrayOfDebts={debt}
                    axiosCreateNewBudget={createNewDebt}
                />
            ) : null}
            {income ? <SavingsInvestments arrayOfSavings={savings} /> : null}
            {income ? <NetWorth /> : null}
            {income ? <FinanceOverTime /> : null}
        </div>
    );
};

export default HomePage;
