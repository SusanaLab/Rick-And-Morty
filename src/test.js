import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChatBox = styled.div`
  background-color: pink;
  padding: 10px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
`;

const ChatForm = () => {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const chatEntry = `${name} - ${dob} - ${contact}`;
    setChatLog([...chatLog, chatEntry]);
    setName("");
    setDob("");
    setContact("");
  };

  return (
    <Container>
      {chatLog.map((entry, index) => (
        <ChatBox key={index}>{entry}</ChatBox>
      ))}
      <Form onSubmit={handleSubmit}>
        <Label>Nombre:</Label>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Label>Fecha de nacimiento:</Label>
        <Input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <Label>Datos de contacto:</Label>
        <Input
          type="text"
          value={contact}
          onChange={(e) => setContact(e.target.value)}
        />
        <Button type="submit">Iniciar</Button>
      </Form>
    </Container>
  );
};

export default ChatForm;