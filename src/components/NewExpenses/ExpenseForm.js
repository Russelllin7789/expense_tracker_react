import React, { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {
  // can have multiple states for a single component, and handle them separately
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  // const [isDisabled, setIsDisabled] = useState(true)
  // const [isTitleSet, setIsTitleSet] = useState(false)
  // const [isAmountSet, setIsAmountSet] = useState(false)
  // const [isDateSet, setIsDateSet] = useState(false)

  const titleChangedHandler = (event) => {
    let value = event.target.value
    // value !== '' ? setIsTitleSet(true) : setIsTitleSet(false)
    // isTitleSet && isAmountSet && isDateSet ? setIsDisabled(false) : setIsDisabled(true)
    setTitle(value)
  }

  const amountChangedHandler = (event) => {
    let value = event.target.value
    // value !== '' ? setIsAmountSet(true) : setIsAmountSet(false)
    // isTitleSet && isAmountSet && isDateSet ? setIsDisabled(false) : setIsDisabled(true)
    setAmount(value)
  }

  const dateChangedHandler = (event) => {
    let value = event.target.value
    // value !== '' ? setIsDateSet(true) : setIsDateSet(false)
    // isTitleSet && isAmountSet && isDateSet ? setIsDisabled(false) : setIsDisabled(true)
    setDate(value)
  }

  // *** can also set multiple states using only one single useState ***
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date)
    }

    console.log('expense data here:', expenseData)
    setTitle('')
    setAmount('')
    setDate('')
    // setIsTitleSet(false)
    // setIsDateSet(false)
    // setIsAmountSet(false)
    // setIsDisabled(true)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={title} onChange={titleChangedHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value={amount} min='0.01' step='0.01' onChange={amountChangedHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value={date} min='2019-01-01' max='2022-12-31' onChange={dateChangedHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button className='submit-button' type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm