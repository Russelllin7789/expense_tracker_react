import React from "react";
import Card from '../common UI/Card'

const AddUser = (props) => {
  return (
    <form>
      <label htmlFor="userName">User Name</label>
      <input type="text" />
      <label htmlFor="age">Age</label>
      <input type="number" />
    </form>
  )
}

export default AddUser