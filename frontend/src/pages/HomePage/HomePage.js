import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";
import Income from "../../components/Income";
import CreateIncome from "../../components/CreateIncome";

const HomePage = () => {
    const [user, token] = useAuth();
    const [income, setIncome] = useState([]);

    useEffect(() => {
        getIncome();
    }, []);

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
            console.log(response.data);
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <div>
            <CreateIncome />
            <h1>Hello World</h1>
            <Income />
        </div>
    );
};

export default HomePage;
