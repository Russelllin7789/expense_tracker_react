import React, { useState } from 'react'

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import Card from "../common UI/Card";

const Expenses = (props) => {
  const [year, setYear] = useState('2019')

  const selectedYearHandler = (year) => {
    setYear(year)
  }

  // render the expenses of selected year, rather than rendering the actual data
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === year)

  let expensesContent = <p>Oops! No related expense at all!</p>

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map(
      expense =>
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
    )
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearSelected={selectedYearHandler} />
        {expensesContent}
      </Card>
    </div>
  )
}

export default Expenses