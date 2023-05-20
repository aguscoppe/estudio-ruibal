const Contact = ({ isFullVersion = false }) => {
  return (
    <section id='contact' className={isFullVersion ? 'full-height' : ''}>
      <div className='container'>
        <h2>Contacto</h2>
        <h3>Se realizan entrevistas en zona Tribunales o Caballito.</h3>
        <h3>
          Envía tu consulta a cualquiera de estos mails y recibirás una
          respuesta a la brevedad:
        </h3>
        <h4>bettinaruibal@gmail.com</h4>
        <h4>bettina@jasoc.com.ar</h4>
      </div>
    </section>
  );
};

export default Contact;
