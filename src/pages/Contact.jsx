import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const refForm = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_c2jo82t";
    const templateId = "template_i5cphej";
    const apiKey = "L73FcZ2AkzIkzLq45";

    emailjs.init("L73FcZ2AkzIkzLq45");

    emailjs
      .sendForm(serviceId, templateId, refForm.current, apiKey)
      .then((res) => {
        console.log(res.text);
        refForm.current.reset();
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-center py-3" id="contact">
        Contact
      </h2>
      <div className="flex flex-col p-3 mx-auto gap-5 justify-center items-center md:flex-row">
        <div className="flex flex-col gap-4 justify-around h-[350px] w-[300px] text-gray-500 font-bold text-xl">
          <div className="flex items-center p-2 gap-6">
            <i className="fa-solid fa-envelope"></i>
            <span>elpeka2294@gmail.com</span>
          </div>
          <div className="flex items-center p-2 gap-6">
            <i className="fa-solid fa-phone"></i>
            <span>+54 9 1133353720</span>
          </div>
          <div className="flex items-center p-2 gap-6">
            <i className="fa-brands fa-linkedin"></i>
            <span>in/jonathan-ezequiel-sosa</span>
          </div>
        </div>
        <form
          ref={refForm}
          onSubmit={handleSubmit}
          className="flex flex-col p-3 gap-3 justify-center items-center"
        >
          <div>
            <label htmlFor="userName" className="font-bold block mb-2">
              Name
            </label>
            <input
              type="text"
              name="userName"
              className="w-[300px] text-gray-500 border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="font-bold block mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="w-[300px] text-gray-500 border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="font-bold block mb-2">
              Message
            </label>
            <textarea
              name="message"
              className="w-[300px] h-[200px] text-gray-500 border border-gray-300 p-2 rounded-md"
              required
            />
          </div>
          <button
            type="submit"
            className="w-[100px] bg-red-600 font-bold text-white px-4 py-2 rounded-md hover:bg-gray-600 mx-auto"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
