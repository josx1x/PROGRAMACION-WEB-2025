import { HeroSection } from "../components/HeroSection"

export const About = () => {
    return (
        <>
            <HeroSection firstWord="Sobre " lastWord="Mí" desc="Conoce más sobre mi trayectoria, habilidades y pasiones" />

            {/* <!-- About Content --> */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/3 mb-10 md:mb-0" data-aos="fade-right">
                            <img src="http://static.photos/office/640x360/2" alt="About Me" className="rounded-xl shadow-xl w-full max-w-md" />
                        </div>
                        <div className="md:w-2/3 md:pl-12" data-aos="fade-left">
                            <h2 className="text-3xl font-bold text-blue-800 mb-6">¡Hola! Soy Jose Bonzano</h2>
                            <p className="text-gray-600 mb-6 text-lg">Soy un apasionado desarrollador web y diseñador UI/UX con más de 5 años de experiencia creando soluciones digitales impactantes.</p>
                            <p className="text-gray-600 mb-8 text-lg">Mi enfoque combina la estética visual con la funcionalidad técnica para crear experiencias de usuario memorables y efectivas.</p>

                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <div>
                                    <h3 className="font-semibold text-blue-800">Nombre:</h3>
                                    <p className="text-gray-600">Jose Jesus Bonzano LLancari</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-800">Email:</h3>
                                    <p className="text-gray-600">bonzanollancarijosejesus@gmail.com</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-800">Edad:</h3>
                                    <p className="text-gray-600">20</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-blue-800">De:</h3>
                                    <p className="text-gray-600">Huancavelica, Peru
                                    </p>
                                </div>
                            </div>

                            <a href="proyectos.html" className="inline-block bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">Ver Mis Proyectos</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Experience --> */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-blue-800 mb-12" data-aos="fade-up">Mi Experiencia</h2>

                    <div className="relative max-w-3xl mx-auto">
                        {/* <!-- Timeline --> */}
                        <div className="border-l-2 border-blue-200 pl-8 space-y-12">
                            <div className="relative" data-aos="fade-up">
                                <div className="bg-white p-6 rounded-lg shadow-md timeline-item">
                                    <h3 className="text-xl font-bold text-blue-800 mb-2">Desarrollador Frontend</h3>
                                    <p className="text-blue-600 font-medium mb-2">Empresa ABC | 2020 - Presente</p>
                                    <p className="text-gray-600">Desarrollo de interfaces de usuario responsivas utilizando React.js y Vue.js, colaborando estrechamente con diseñadores para implementar experiencias de usuario óptimas.</p>
                                </div>
                            </div>

                            <div className="relative" data-aos="fade-up" data-aos-delay="100">
                                <div className="bg-white p-6 rounded-lg shadow-md timeline-item">
                                    <h3 className="text-xl font-bold text-blue-800 mb-2">Diseñador UI/UX</h3>
                                    <p className="text-blue-600 font-medium mb-2">Startup XYZ | 2018 - 2020</p>
                                    <p className="text-gray-600">Diseño de interfaces y prototipos interactivos para aplicaciones móviles y web, realizando pruebas de usabilidad y mejorando continuamente los flujos de usuario.</p>
                                </div>
                            </div>

                            <div className="relative" data-aos="fade-up" data-aos-delay="200">
                                <div className="bg-white p-6 rounded-lg shadow-md timeline-item">
                                    <h3 className="text-xl font-bold text-blue-800 mb-2">Desarrollador Web Junior</h3>
                                    <p className="text-blue-600 font-medium mb-2">Agencia Creativa | 2016 - 2018</p>
                                    <p className="text-gray-600">Implementación de sitios web usando HTML, CSS y JavaScript básico, apoyando en proyectos de diseño y desarrollo para diversos clientes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
