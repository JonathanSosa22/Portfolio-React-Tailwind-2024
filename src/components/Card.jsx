/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
const Card = ({ proyect }) => {
  return (
    <>
      <div className="w-[90%] flex flex-col p-3 py-5 border-2 my-2 md:w-[350px] dark:border-none">
        <img src={proyect.img} alt={proyect.name} />
        <h3 className="font-bold py-4">{proyect.name}</h3>
        <p className="text-gray-500">{proyect.descripcion}</p>
        <div className="flex gap-5 justify-center pt-4">
          <button className="w-[100px] py-2 text-white font-bold bg-red-600 rounded-md hover:bg-gray-600">
            Demo
          </button>
          <button className="w-[100px] py-2 text-white font-bold bg-red-600 rounded-md hover:bg-gray-600">
            Repository
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
