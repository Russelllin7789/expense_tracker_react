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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearSelected={selectedYearHandler} />
        {
          filteredExpenses.map(
            expense =>
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
          )
        }
      </Card>
    </div>
  )
}

export default Expenses