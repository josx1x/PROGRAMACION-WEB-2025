export const Project = ({idx, img_url, title, desc, skills}) => {
  return (
    <div
      className="transition-all duration-300 ease-in-out bg-white rounded-xl overflow-hidden shadow-md"
    >
      <img
        src={img_url}
        alt={`Proyecto ${idx}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-blue-800 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill, index) => (
            <span key={index} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
              {skill}
            </span>
          ))}
        </div>
        <a
          href="#"
          className="text-blue-600 font-medium hover:text-blue-800 flex items-center"
        >
          Ver detalles <i className="bi bi-arrow-right ml-2"></i>
        </a>
      </div>
    </div>
  );
};
