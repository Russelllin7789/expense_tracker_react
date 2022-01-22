import React, { useState, useRef } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  // can have multiple states for a single component, and handle them separately
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [buttonWasClicked, setButtonWasClicked] = useState(false)
  const [isDisabled, setIsDisabled] = useState(true)
  const titleRef = useRef()
  const amountRef = useRef()
  const dateRef = useRef()

  const titleChangedHandler = (event) => {
    let value = event.target.value
    // value !== '' ? setIsTitleSet(true) : setIsTitleSet(false)
    // isTitleSet && isAmountSet && isDateSet ? setIsDisabled(false) : setIsDisabled(true)
    setTitle(value)
    checkValueSet()
  }

  const amountChangedHandler = (event) => {
    let value = event.target.value
    // value !== '' ? setIsAmountSet(true) : setIsAmountSet(false)
    // isTitleSet && isAmountSet && isDateSet ? setIsDisabled(false) : setIsDisabled(true)
    setAmount(value)
    checkValueSet()
  }

  const dateChangedHandler = (event) => {
    let value = event.target.value
    // value !== '' ? setIsDateSet(true) : setIsDateSet(false)
    // console.log(isTitleSet, isAmountSet, isDateSet)
    // if (isTitleSet && isAmountSet && isDateSet) {
    //   setIsDisabled(false)
    // }
    setDate(value)
    checkValueSet()
  }

  // *** can also set multiple states using only one single useState ***
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })

  const showNewExpenseArea = () => {
    setButtonWasClicked(!buttonWasClicked)
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date)
    }

    props.onExpenseSubmit(expenseData)

    setTitle('')
    setAmount('')
    setDate('')
    setIsDisabled(true)
    // setIsTitleSet(false)
    // setIsDateSet(false)
    // setIsAmountSet(false)
    // setIsDisabled(true)
  }

  const checkValueSet = () => {
    const title = titleRef.current.value
    const amount = amountRef.current.value
    const date = dateRef.current.value

    if (title.trim().length > 0 && amount.trim().length > 0 && date.trim().length > 0) {
      setIsDisabled(false)
      // console.log('isDisabled:', isDisabled)
    }
  }

  if (!buttonWasClicked) {
    return <button onClick={showNewExpenseArea}>Add New Expense</button>
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' ref={titleRef} value={title} onChange={titleChangedHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' ref={amountRef} value={amount} min='0.01' step='0.01' onChange={amountChangedHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' ref={dateRef} value={date} min='2019-01-01' max='2022-12-31' onChange={dateChangedHandler} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button className='submit-button' onClick={showNewExpenseArea}>Cancel</button>
        <button className='submit-button' type='submit' disabled={isDisabled}>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm