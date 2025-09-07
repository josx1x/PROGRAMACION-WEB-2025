import { Info } from "../components/contact/Info"
import { HeroSection } from "../components/HeroSection"

export const Contact = () => {
  return (
    <>
      {/* <!-- Contact Hero --> */}
      <HeroSection firstWord="Contácta" lastWord="me" desc="¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!"/>

    {/* <!-- Contact Content --> */}
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row">
                {/* <!-- Contact Info --> */}
                <div className="md:w-1/3 mb-12 md:mb-0">
                    <h2 className="text-2xl font-bold text-blue-800 mb-6">Información de Contacto</h2>
                    
                    <div className="space-y-6">
                        <Info icon="bi bi-envelope-fill" type="Email" content="jesbonzano@gmail.com"/>
                        <Info icon="bi bi-telephone-fill" type="Teléfono" content="+51 957083910"/>
                        <Info icon="bi bi-geo-alt-fill" type="Ubicación" content="Huancavelica,Peru"/>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-blue-800 mt-10 mb-4">Redes Sociales</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="contact-card bg-blue-100 text-blue-800 px-3 py-2 rounded-full hover:bg-blue-200">
                            <i className="bi bi-instagram text-lg"></i>
                        </a>
                        <a href="#" className="contact-card bg-blue-100 text-blue-800 px-3 py-2 rounded-full hover:bg-blue-200">
                            <i className="bi bi-facebook text-lg"></i>
                        </a>
                        <a href="#" className="contact-card bg-blue-100 text-blue-800 px-3 py-2 rounded-full hover:bg-blue-200">
                            <i className="bi bi-twitter-x text-lg"></i>
                        </a>
                        <a href="#" className="contact-card bg-blue-100 text-blue-800 px-3 py-2 rounded-full hover:bg-blue-200">
                            <i className="bi bi-chat text-lg"></i>
                        </a>
                    </div>
                </div>
                
                {/* <!-- Contact Form --> */}
                <div className="md:w-2/3 md:pl-12" data-aos="fade-left">
                    <h2 className="text-2xl font-bold text-blue-800 mb-6">Envíame un Mensaje</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                                <input type="text" id="name" className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300" placeholder="Tu nombre"/>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                <input type="email" id="email" className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300" placeholder="tu@email.com"/>
                            </div>
                        </div>
                        
                        <div>
                            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
                            <input type="text" id="subject" className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300" placeholder="¿Sobre qué quieres hablar?"/>
                        </div>
                        
                        <div>
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                            <textarea id="message" rows="5" className="form-input w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition duration-300" placeholder="Cuéntame más sobre tu proyecto..."></textarea>
                        </div>
                        
                        <button type="submit" className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300 w-full md:w-auto">
                            Enviar Mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
