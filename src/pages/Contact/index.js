import Header from '../Header';
import Footer from '../Footer';


const Contact = () => {
  function onSubmit(event){
    event.preventDefault();
  }

  return (
    <>
      <div className="bg-section">
        <Header />
        <section className="container">
            <div className="row">
              <div className="grid-6">
                <h3 className="color-primary">Entre em contato</h3>
                <form>
                  <input type="text" name="name" className="mt-2" placeholder="Nome" />
                  <input type="email" name="email" className="mt-2"placeholder="E-mail" />
                  <textarea name="content" rows="8" className="mt-2"placeholder="Mensagem"></textarea>
                  <button className="btn mt-2">Enviar</button>
                </form>
              </div>
              <div className="grid-1 disappear"></div>
              <div className="grid-5">
                <h5 className="mt-4 color-primary">Algumas informações</h5>
                <h6 className="color-primary mt-4">Info.</h6>
                <p>O RocketBlog Foi desenvolvido para dar uma push nas habilidades de desenvolvimento no Desafio Marmitech</p>
                <h6 className="color-primary mt-4">Address</h6>
                <p>Minas Gerais, MG.</p>
                <h6 className="color-primary mt-4">E-mail</h6>
                <p>gomidesprogrammer@gmail.com</p>
              </div>
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
  
export default Contact;
  