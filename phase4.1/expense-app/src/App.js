import React, {useState} from 'react';
import './App.css';
import data from './mock-data.json'
import { nanoid } from 'nanoid'

function App() {

  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData ] = useState({
    fullName: '', // same as for name
    address: '', // same as form.table name
    phoneNumber: '',  // same as form.table name
    email: '',  // same as form.table name
  })

  //input handling
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name')// this refers to name in the input
    const fieldValue = event.target.value

    //copy/mutaute state
    //update object the user has type 
    const newFormData = {...addFormData} //new forData is an object
    newFormData[fieldName] = fieldValue

    setAddFormData(newFormData)
  }

  const handleAddFormData = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    };

    //new contact array to avoid mutating the state
    const newContacts = [ ...contacts, newContact];
    setContacts(newContacts);
  }

  return (
    <div className="app-container">
     <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((item) => {
          return (
        <tr key={item.id}>
          <td>{item.fullName}</td>
          <td>{item.address}</td>
          <td>{item.phoneNumber}</td>
          <td>{item.email}</td>
        </tr>
          )
        })}
      </tbody>
     </table>

     <h2>Add contact</h2>
     <form onSubmit={handleAddFormData}>
      <input 
        type="text"
        name="fullName"
        required ="required"
        placeholder="enter a name"
        onChange={handleAddFormChange}
        />
      <input 
        type="text"
        name="address"
        required ="required"
        placeholder="enter a address"
        onChange={handleAddFormChange}
        />
      <input 
        type="text"
        name="phoneNumber"
        required ="required"
        placeholder="enter a phone number"
        onChange={handleAddFormChange}
        />
      <input 
        type="email"
        name="email"
        required ="required"
        placeholder="enter a phone email"
        onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
     </form>
    </div>
  );
}

export default App;
