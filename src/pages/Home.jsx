const Home = () => {
  return (
    <>
      <section className="flex flex-col justify-center items-center md:flex-row mx-auto p-2 gap-5">
        <div className="flex flex-col justify-between p-5">
          <h3 className="text-red-600">Web Developer</h3>
          <h1 className="text-4xl font-bold pb-4">
            Hello, my name is <br /> Sosa Jonathan
          </h1>
          <p className="pb-4 text-lg text-gray-500 max-w-[400px]">
            Brief desciption about my self, my vocational journey, and what I
            engage in professionally
          </p>
          <div className="flex gap-4 pb-4 text-lg">
            <button className="bg-red-600 font-bold text-white px-4 py-2 rounded-md hover:bg-gray-600">
              Contact me
            </button>
            <button className="border-2 font-bold border-red-600 px-4 py-2 rounded-md hover:bg-gray-600">
              Download CV
            </button>
          </div>
          <div className="flex gap-4 text-2xl">
            <i className="fa-brands fa-youtube hover:text-gray-600 cursor-pointer"></i>
            <i className="fa-brands fa-linkedin hover:text-gray-600 cursor-pointer"></i>
            <i className="fa-brands fa-github hover:text-gray-600 cursor-pointer"></i>
            <i className="fa-brands fa-facebook hover:text-gray-600 cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-gray-600 cursor-pointer"></i>
          </div>
        </div>
        <div className="p-5 ">
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="my-img"
            className="w-80 h-80"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
