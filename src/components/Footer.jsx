export const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold">MiPortafolio</h2>
                    <p className="mt-2 text-blue-200">© 2023 Todos los derechos reservados</p>
                </div>
                <div className="flex space-x-6 text-2xl">
                    <a href="#" className="transition-all duration-300 ease-in-out text-blue-200 hover:text-white hover:-translate-y-0.5">
                        <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="transition-all duration-300 ease-in-out text-blue-200 hover:text-white hover:-translate-y-0.5">
                        <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="transition-all duration-300 ease-in-out text-blue-200 hover:text-white hover:-translate-y-0.5">
                        <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#" className="transition-all duration-300 ease-in-out text-blue-200 hover:text-white hover:-translate-y-0.5">
                        <i className="bi bi-chat-dots-fill"></i>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  )
}
