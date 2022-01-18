import React, { useState } from 'react'

import Card from "../common UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter'
import ExpensesChart from './ExpensesChart'
import ExpensesList from './ExpensesList'
import './Expenses.css'
import styled from 'styled-components'

const Expense = styled.div`
  padding: 1rem;
  background-color: rgb(31, 31, 31);
  margin: 2rem auto;
  width: 50rem;
  max-width: 95%;
`

const Expenses = (props) => {
  const [year, setYear] = useState('2019')

  const selectedYearHandler = (year) => {
    setYear(year)
  }

  // render the expenses of selected year, rather than rendering the actual data
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === year)

  return (
    <Expense>
      <Card className="expenses">
        <ExpensesFilter selected={year} onYearSelected={selectedYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </Expense>
  )
}

export default Expenses