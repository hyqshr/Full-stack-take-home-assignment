import React, { useState } from 'react'
import {Form,Button,Row, Container,Col} from 'react-bootstrap'
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

export default function EditScreen() {
  const navigate = useNavigate();
  const location = useLocation()
  const member = location.state.member
  const [firstName, setFirstName] = useState(member.first_name)
  const [lastName, setLastName] = useState(member.last_name)
  const [email, setEmail] = useState(member.email)
  const [phoneNumber, setPhoneNumber] = useState(member.phone_number)
  const [is_admin, setAdmin] = useState(member.is_admin)

  const submitHandler = (e) => {
    e.preventDefault()
    const uploadData = async () => {
      const result = await axios.put(`http://localhost:8000/api/members/update`,
      {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone_number: phoneNumber,
        is_admin:is_admin,
        id:member.id
      })
      navigate("/")

    }
    uploadData();
  }

  const deleteHandler = (e) => {
    e.preventDefault()
    const deleteMember = async () => {
      console.log(member.id)
      const result = await axios.delete("http://localhost:8000/api/members/delete",
       {
        data:{id:member.id}
      })
      navigate("/")

    }
    deleteMember();
  }
  return (
    <div>
      <Row className='py-3'>
        <Col md={5}>
          <Link to='/' style={{ textDecoration: 'none' }}><h3>Team Management Tool</h3></Link>
        </Col>
        <Col> <h2>AddScreen</h2> </Col>
      </Row>   
      <h1>Info</h1>
      
      <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" >
          {/* first name */}
          <Form.Control 
            required
            type="firstName" 
            placeholder = "Enter your first name here" 
            value = {firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
            <Form.Text>
              First Name
            </Form.Text>

            {/* last name */}
          <Form.Control             
            required
            type="lastName" 
            placeholder = "Enter your last name here" 
            value = {lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
            <Form.Text className="text-muted">
              Last Name
            </Form.Text>

          {/* email */}
          <Form.Control             
            required
            type="email" 
            placeholder = "Enter your email here" 
            value = {email}
            onChange={(e) => setEmail(e.target.value)}
          />
            <Form.Text className="text-muted">
              Enter your email above. 
            </Form.Text>

          {/* phone */}
          <Form.Control             
            required
            type="phoneNumber" 
            placeholder = "Enter your phone number name here" 
            value = {phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <Form.Text className="text-muted">
              Enter your phone number above. 
              
              <h5>We'll never share your email with anyone else.</h5>
            </Form.Text>
          </Form.Group>


      <h1>
        Role
      </h1>
          <Form.Check type="radio" label="Regular - can't delete member" name='group1' onChange={(e) => setAdmin(false)} checked={!is_admin} />
          <Form.Check type="radio" label="Admin - can delete member"  name='group1' onChange={(e) => setAdmin(true)} checked={is_admin}/>

        <Button variant="primary" type="add">
          Submit
        </Button>
        </Form>

      {/* delete */}
      <Form  onSubmit={deleteHandler}>
        <Button variant="primary" type="delete" disabled = {!is_admin}>
          Delete
        </Button>
      </Form>
  </div>
    
  )
}
