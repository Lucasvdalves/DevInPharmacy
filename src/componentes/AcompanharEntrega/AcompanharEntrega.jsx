import React, { useState } from 'react';
import Navbar from '../NavbarTelaDeCadastro/NavbarTelaDeCadastro'

const rastreio = () => {
  const [formData, setFormData] = useState({
    name: '',
    CPF: '',
    CodigoRastreio: '',
    request: ''
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAlert(true);
  };

  const handleReturnButtonClick = () => {
    window.location.href = "/main";
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
            <Navbar/>
        <h1> Rastrei aqui suas compras</h1>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              placeholder="Seu nome"
            />
          </label>
          <label>
            <input
              type="text"
              name="CPF"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              placeholder="Seu CPF"
            />
          </label>
          <label>
            <input
              type="CodigoRastreio"
              name="CodigoRastreio"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="Codigo Rastreio"
            />        
          </label>
          <button type="submit" style={styles.button}>
            Enviar
          </button>
          <button
            onClick={handleReturnButtonClick}
            style={{ ...styles.linkButton, ...styles.buttonHover }}
          >
            Voltar para a Página Inicial
          </button>
        </form>
        {showAlert && (
          <div style={styles.alert}>
           Em breve você receberá um e-mail, com as informações do seu pedido !
          </div>
        )}
      </div>
      <div style={styles.imageContainer}>
        <img
src="https://dclogisticsbrasil.com/wp-content/uploads/2019/09/Blog_Saiba-o-que-%C3%A9-a-log%C3%ADstica-integrada-e-como-ela-pode-ser-ben%C3%A9fica-ao-seu-neg%C3%B3cio.png"          
style={{
            maxWidth: '100%',
            maxHeight: 'calc(100vh - 20px)',
            width: 'auto',
          }}
        />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  formContainer: {
    flex: 1,
    padding: '20px',
    textAlign: 'center',
  },
  form: {
    backgroundColor: 'white',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginBottom: '8px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    minHeight: '100px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  linkButton: {
    width: '100%',
    padding: '8px',
    backgroundColor: 'transparent',
    color: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
  imageContainer: {
    flex: 1,
    padding: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    maxHeight: 'calc(100vh - 20px)',
  },
  alert: {
    backgroundColor: 'yellow',
    padding: '10px',
    margin: '10px',
    borderRadius: '4px',
  },
};

export default rastreio;
