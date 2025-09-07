export const Info = ({icon, type, content}) => {
  return (
    <div className="flex items-start">
      <div className="bg-blue-100 px-3 py-2 rounded-full mr-4">
        <i className={`${icon} text-blue-800 text-lg`}></i>
      </div>
      <div>
        <h3 className="font-semibold text-gray-800">{type}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};
