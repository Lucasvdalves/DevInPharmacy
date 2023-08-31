import React from 'react';
import '../../componentes/NavbarTelaDeCadastro/NavbarTelaDeCadastro';
import MinhaImagem from '../../componentes/NavbarTelaDeCadastro/imagem.png'; 

const Navbar = () => {
  const imageStyle = {
    width: '50px', 
    height: 'auto', 
    marginRight: '1px', 
  };

  return (
    <div className="navbar">
      <div className="left-section">
        <div className="contact-info">
          <img src={MinhaImagem} alt="Minha Imagem" style={imageStyle} />
        </div>
        <p><b>DevInPharmacy</b></p>
      </div>
    </div>
  );
}

export default Navbar;
