const Contact = () => {
  return (
    <section id='contact'>
      <div className='container'>
        <h2>Contacto</h2>
        <p>Se realizan entrevistas en zona Tribunales o Caballito.</p>
        <p>
          Envía tu consulta a cualquiera de estos mails y recibirás una
          respuesta a la brevedad:
        </p>
        <div className='contact-item-container'>
          <div className='contact-item'>
            <i className='fa-regular fa-envelope'></i>
            <a href='mailto: bettinaruibal@gmail.com'>
              <p>bettinaruibal@gmail.com</p>
            </a>
          </div>
          <div className='contact-item'>
            <i className='fa-regular fa-envelope'></i>
            <a href='mailto: bettina@jasoc.com.ar'>
              <p>bettina@jasoc.com.ar</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
