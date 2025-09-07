import { Link } from "react-router-dom"

export const Hero = () => {

  return (
    <section className="bg-gradient-to-br from-blue-900 to-blue-500 text-white pt-32 pb-20">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-10 md:mb-0">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Hola, Soy <span className="text-blue-200">Jose Bonzano</span></h1>
                    <p className="text-xl mb-8 text-blue-100">Desarrollador Web & Diseñador UI/UX</p>
                    <div className="flex space-x-4">
                        <Link to="/projects" className="bg-white text-blue-800 px-6 py-3 rounded-lg font-medium hover:bg-blue-100 transition duration-300">Ver Proyectos</Link>
                        <Link to="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-800 transition duration-300">Contactame</Link>
                    </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src="/avatar.jpg" alt="Profile" className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-xl"/>
                </div>
            </div>
        </div>
    </section>
  )
}
