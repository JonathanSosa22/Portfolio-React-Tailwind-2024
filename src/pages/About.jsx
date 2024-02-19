/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center py-5">About Me</h2>
      <div className="flex flex-col p-3 mx-auto gap-3 justify-center items-center md:flex-row">
        <div className="h-[400px] w-[350px] bg-red-600 min-w-[300px]"></div>
        <div className="flex flex-col p-5 gap-3 text-gray-500 md:max-w-[700px]">
          <p className="py-4 text-lg">
            Hi! I'm passionate about web development and recently completed a
            bootcamp at Academlo where I learned technologies like HTML, CSS,
            JavaScript, React, TailwindCSS, TypeScript, Node.js, Express.js,
            Sequelize, and I also have basic knowledge of Next.js and Angular.
          </p>
          <p className="py-4 text-lg">
            I am excited to keep learning and creating interesting projects in
            the web development world.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
