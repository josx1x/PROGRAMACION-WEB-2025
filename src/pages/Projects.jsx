import { HeroSection } from "../components/HeroSection"
import { Project } from "../components/projects/Project"

export const Projects = () => {
    const listProjects = [{
        img_url: "http://static.photos/technology/640x360/3",
        title: "Plataforma E-commerce",
        desc: "Tienda online completa con carrito de compras, pasarela de pago y panel de administración.",
        skills: ["React", "Node.js", "MongoDB"]
    },{
        img_url: "http://static.photos/minimal/640x360/4",
        title: "App de Tareas",
        desc: "Aplicación móvil para gestión de tareas con sincronización en la nube y recordatorios.",
        skills: ["Flutter", "Firebase"]
    },{
        img_url: "http://static.photos/office/640x360/5",
        title: "Dashboard Analytics",
        desc: "Panel de control interactivo para visualización de datos empresariales con gráficos personalizados.",
        skills: ["Vue.js", "D3.js", "Express"]
    },{
        img_url: "http://static.photos/education/640x360/6",
        title: "Plataforma Educativa",
        desc: "Sistema de aprendizaje en línea con cursos interactivos, evaluaciones y certificados.",
        skills: ["Laravel", "Vue.js", "MySQL"]
    },{
        img_url: "http://static.photos/health/640x360/7",
        title: "App de Salud",
        desc: "Aplicación para seguimiento de hábitos saludables con integración a wearables.",
        skills: ["React Native", "GraphQL"]
    },{
        img_url: "http://static.photos/finance/640x360/8",
        title: "Sistema Bancario",
        desc: "Interfaz para banca en línea con transacciones seguras y gestión de cuentas.",
        skills: ["Angular", "Java", "PostgreSQL"]
    }]
  return (
    <>
      {/* <!-- Projects Hero --> */}
      <HeroSection firstWord="Mis " lastWord="Proyectos" desc="Explora mi trabajo y descubre cómo puedo ayudarte con tus proyectos"/>

    {/* <!-- Projects Filter --> */}
    <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
            <div className="flex justify-center mb-12">
                <div className="inline-flex rounded-md shadow-sm" role="group">
                    <button type="button" className="px-4 py-2 text-sm font-medium rounded-l-lg bg-blue-800 text-white">
                        Todos
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-100">
                        Web
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium bg-white text-gray-700 hover:bg-gray-100">
                        Móvil
                    </button>
                    <button type="button" className="px-4 py-2 text-sm font-medium rounded-r-lg bg-white text-gray-700 hover:bg-gray-100">
                        Diseño
                    </button>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Projects Grid --> */}
    <section className="py-12 bg-white">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    listProjects.map((project, index) => (
                        <Project 
                            key={index}
                            idx={index + 1}
                            img_url={project.img_url}
                            title={project.title}
                            desc={project.desc}
                            skills={project.skills}
                        />
                    ))
                }
            </div>
            
            <div className="text-center mt-12">
                <button className="bg-blue-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300">
                    Cargar más proyectos
                </button>
            </div>
        </div>
    </section>
    </>
  )
}
