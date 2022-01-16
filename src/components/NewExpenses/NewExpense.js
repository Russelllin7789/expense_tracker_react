import React from "react";

import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const expenseSubmitHandler = (expense) => {
    const expenseData = {
      ...expense,
      id: Math.random().toString()
    }
    props.onAddExpense(expenseData)
  }

  return (
    <div className="new-expense">
      <ExpenseForm onExpenseSubmit={expenseSubmitHandler} />
    </div>
  )
}

export default NewExpense