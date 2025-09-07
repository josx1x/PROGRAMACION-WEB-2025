export const Skills = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Mis Habilidades
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex justify-center mb-4">
              <i className="bi bi-code-slash text-blue-600 text-5xl"
              style={{ textShadow: '0 0 1px currentColor, 0 0 1px currentColor' }}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Desarrollo Web</h3>
            <p className="text-gray-600">
              HTML, CSS, JavaScript y frameworks modernos
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex justify-center mb-4">
              <i className="bi bi-window-sidebar text-blue-600 text-5xl"
              style={{ textShadow: '0 0 1px currentColor, 0 0 1px currentColor' }}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Diseño UI/UX</h3>
            <p className="text-gray-600">
              Interfaces intuitivas y experiencias de usuario
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex justify-center mb-4">
              <i className="bi bi-phone text-blue-600 text-5xl"
              style={{ textShadow: '0 0 1px currentColor, 0 0 1px currentColor' }}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Responsive Design</h3>
            <p className="text-gray-600">
              Sitios que se adaptan a cualquier dispositivo
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <div className="flex justify-center mb-4">
              <i className="bi bi-database text-blue-600 text-5xl"
              style={{ textShadow: '0 0 1px currentColor, 0 0 1px currentColor' }}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <p className="text-gray-600">Node.js, MongoDB y bases de datos</p>
          </div>
        </div>
      </div>
    </section>
  );
};
