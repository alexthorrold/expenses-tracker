import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [addExpensePressed, setAddExpensePressed] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setAddExpensePressed(false);
    };

    const cancelHandler = () => {
        setAddExpensePressed(false);
    };

    const addNewExpenseHandler = () => {
        setAddExpensePressed(true);
    };

    let content = (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
    );

    if (addExpensePressed) {
        content = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler} />;
    }

    return <div className="new-expense">{content}</div>;
};

export default NewExpense;
