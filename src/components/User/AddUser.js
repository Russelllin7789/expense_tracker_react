import React, { useState } from "react";
import Card from '../common UI/Card'
import classes from './AddUser.module.css'
import Button from "../common UI/Button";
import ErrorModal from "../common UI/ErrorModal";

const AddUser = (props) => {
  const [userName, setUserName] = useState('')
  const [userAge, setUserAge] = useState('')
  const [usersList, setUsersList] = useState([])

  const addUserHandler = (event) => {
    event.preventDefault()
    // basic validation
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      return
    }
    // use '+' to force string be transformed into number
    if (+userAge < 1) {
      return
    }

    props.onAddUser(userName, userAge)

    setUserName('')
    setUserAge('')
  }

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value)
  }

  const ageChangeHandler = (event) => {
    setUserAge(event.target.value)
  }

  return (
    <div>
      <ErrorModal title="Error Occured!" message="Something went wrong!" buttonKey="Okay though" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="userName">User Name</label>
          <input id="userName" value={userName} type="text" onChange={userNameChangeHandler} />
          <label htmlFor="age">Age</label>
          <input id="age" value={userAge} type="number" onChange={ageChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  )
}

export default AddUser