/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center py-3" id="about">
        About Me
      </h2>
      <div className="flex flex-col p-3 mx-auto gap-3 justify-center items-center md:flex-row">
        <div className="h-[400px] w-[350px] bg-red-600 min-w-[300px]"></div>
        <div className="flex flex-col p-5 gap-3 text-gray-500 md:max-w-[700px]">
          <p className="py-4 text-lg">
            Hi! With a strong background in web development, I embarked on a
            journey a year ago to pursue a career in technology. I successfully
            completed a comprehensive web development bootcamp, where I honed my
            skills in both front-end and back-end technologies. My
            specialisation lies in creating dynamic and responsive user
            interfaces using React.js for the front-end, and building robust
            server-side applications with Node.js for the back-end. I'm also
            actively expanding my expertise by delving into TypeScript, Angular
            and Python.
          </p>
          <p className="py-4 text-lg">
            I am passionate about leveraging my technical knowledge to
            contribute to innovative projects and am eager to take on new
            challenges in the field of web development.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
