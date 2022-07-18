import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import Income from "../../components/Income";
import CreateIncome from "../../components/CreateIncome";
import Budget from "../../components/Budget";

const HomePage = () => {
    const [user, token] = useAuth();
    const [income, setIncome] = useState();
    const [budgets, setBudgets] = useState([]);
    const [categories, setCategories] = useState([]);
    const [rerender, setRerender] = useState(false);

    useEffect(() => {
        getIncome();
        getBudgets();
        getCategories();
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

    async function createBudget(arrayOfStuff) {
        axios
            .all(
                arrayOfStuff.map((element) =>
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
                />
            ) : null}
            {income ? <h1>Debt Here</h1> : null}
            {income ? <h1>Saving/Investment Here</h1> : null}
            {income ? <h1>Net Worth Here</h1> : null}
            {income ? <h1>Finance Over Time Chart Here</h1> : null}
        </div>
    );
};

export default HomePage;
