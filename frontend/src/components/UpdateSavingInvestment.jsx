import React, { useState } from "react";

const UpdateSavingInvestment = ({ savingToEdit, axiosUpdateSavings }) => {
    const [savingInvestName, setSavingInvestName] = useState(savingToEdit.name);
    const [savingInvestTotal, setSavingInvestTotal] = useState(
        savingToEdit.total
    );
    const [savingInvestBool, setSavingInvestBool] = useState(
        savingToEdit.is_investment
    );
    const [savingInvestDate, setSavingInvestDate] = useState(savingToEdit.date);

    return (
        <form>
            <label>Saving</label>
        </form>
    );
};

export default UpdateSavingInvestment;
