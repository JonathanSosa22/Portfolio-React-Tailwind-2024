const Skills = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center py-3" id="about">
        Skills
      </h2>

      <div className="flex flex-col gap-12 justify-center pb-5 md:flex-row md:gap-20">
        <div>
          <h2 className="text-center text-2xl font-bold py-5 text-red-500">
            Font-End
          </h2>
          <div className="flex gap-20 justify-center">
            <div className="flex flex-col gap-3">
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">HTML</span>
              </div>
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">CSS</span>
              </div>
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">JavaScript</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">ReactJs</span>
              </div>
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">Tailwind</span>
              </div>
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">Boostrap</span>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-center text-2xl font-bold py-5 text-red-500">
            Back-End
          </h2>
          <div className="flex gap-20 justify-center">
            <div className="flex flex-col gap-3">
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">SQL</span>
              </div>
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">Git</span>
              </div>
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">NodeJs</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">ExpressJs</span>
              </div>
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">Sequelize</span>
              </div>
              <div>
                <i className="fa-solid fa-certificate text-yellow-300"></i>
                <span className="text-gray-500 pl-3">MongoDb</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
