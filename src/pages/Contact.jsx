import { Form, Button } from 'react-bootstrap';

export default function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <Form className="w-50">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" required placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mt-3"> 
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" required rows={5} />
        </Form.Group>
        <Button className="mt-3" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
