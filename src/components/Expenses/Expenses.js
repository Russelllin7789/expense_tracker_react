import React, { useState } from 'react'

import Card from "../common UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'
import './Expenses.css'

const Expenses = (props) => {
  const [year, setYear] = useState('2019')

  const selectedYearHandler = (year) => {
    setYear(year)
  }

  // render the expenses of selected year, rather than rendering the actual data
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === year)

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearSelected={selectedYearHandler} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  )
}

export default Expenses