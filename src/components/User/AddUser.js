import React from "react";
import Card from '../common UI/Card'
import classes from './AddUser.module.css'
import Button from "../common UI/Button";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault()
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="userName">User Name</label>
        <input type="text" />
        <label htmlFor="age">Age</label>
        <input type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser