import { Footer, NavBar, Contact } from '../sections';

const ContactPage = () => {
  return (
    <div className='full-height-container'>
      <NavBar />
      <Contact isFullVersion />
      <Footer />
    </div>
  );
};

export default ContactPage;
