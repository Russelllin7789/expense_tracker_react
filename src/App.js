import React, { useState } from 'react';

import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpenses/NewExpense';
import AddUser from './components/User/AddUser';
import UsersList from './components/User/UsersList';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const [usersList, setUsersList] = useState([])

  const AddExpenseIntoExpenses = (expense) => {
    console.log('expense @ App.js:', expense)
    setExpenses((previousState) => {
      return [expense, ...previousState]
    })
  }

  const AddUserHandler = (userName, userAge) => {
    console.log('user @ App.js:', userName, userAge)
    setUsersList((perviolusList) => {
      return [...perviolusList, { name: userName, age: userAge, id: Math.random().toString() }]
    })
  }

  return (
    <div>
      <AddUser onAddUser={AddUserHandler} />
      <UsersList users={usersList} />
      <NewExpense onAddExpense={AddExpenseIntoExpenses} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
