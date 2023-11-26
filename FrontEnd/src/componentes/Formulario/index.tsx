import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import "./Formulario.css"

export {};




function CustomCard() {
  const [value, setValue] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    console.log(`Valor aplicado: ${value}`);
  };

  const handleCancel = () => {
    console.log('Aplicação cancelada');
  };

 

  return (
    <Card className='card'>
      <Card.Body className='corpo'>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formValue">
            <Form.Label className='label'>Valor da Aplicação:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Informe o valor"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Confirma
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancela
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default CustomCard;