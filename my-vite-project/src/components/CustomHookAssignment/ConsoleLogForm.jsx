import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import useLogger from '../Hooks/useLogger';
const ConsoleLogForm = () => {
  const [formData,setFormData]=useState({
    scope:'',
    consoleChoice:'Log',
    message:''
  })
  
  const [logData, setLogData] = useState({});
  
  useLogger(logData.consoleChoice, logData.scope, logData.message);
  
  {/*
    */}
  function handleSubmit(e){
    e.preventDefault()
    setLogData(formData)
  }
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formScope">
        <Form.Label>Scope</Form.Label>
        <Form.Control type="scope" placeholder="Enter scope" value={formData.scope} onChange={e => setFormData({ ...formData, scope: e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId='formConsole'>
        <Form.Label>Console Choice </Form.Label>
        <Form.Select  value={formData.consoleChoice} onChange={e => setFormData({ ...formData, consoleChoice: e.target.value})}>
          <option>Log</option>
          <option>Error</option>
          <option>Warn</option>
          <option>Info</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control type="scope" placeholder="Enter Message" value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value})}/>
      </Form.Group>
      <Button variant="primary" type='submit' >Submit</Button>
    </Form>
  )
}

export default ConsoleLogForm