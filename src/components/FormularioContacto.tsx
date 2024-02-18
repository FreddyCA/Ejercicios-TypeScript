import React, { useState } from "react";
import CampoTexto from "./CampoTexto";
import CampoAreaTexto from "./CampoAreaTexto";

const FormularioContacto: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [mesagge, setMesagge] = useState<string>("");

  const handleNameChange = (valor: string) => {
    setName(valor);
  };

  const handleEmailChange = (valor: string) => {
    setEmail(valor);
  };

  const handleMessageChange = (valor: string) => {
    setMesagge(valor);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, mesagge);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CampoTexto label="Nombre" valor={name} onChange={handleNameChange} />
      <CampoTexto label="Email" valor={email} onChange={handleEmailChange} />
      <CampoAreaTexto
        label="Mensaje"
        valor={mesagge}
        onChange={handleMessageChange}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormularioContacto;
