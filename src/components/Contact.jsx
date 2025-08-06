import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="animate-slide-section ml-60 w-[calc(100%-15rem)] min-h-screen py-10 px-4 bg-[#f2f2fc]" id="contact">
     <div className="section-title flex-none w-full max-w-full mb-[60px]">
        <h2 className="text-[40px] text-[#302E4D] font-bold relative ">
          Contact Me
        </h2>
        </div>
         <div className="mb-10 text-center">
          <h3 className="font-bold text-center text-[25px] text-[#ec1839] mb-5">Do You Have Any Questions?</h3>
          <h4 className="font-semibold text-center text-lg text-[#302e4d] mb-[60px] mt-2">You can reach me anytime via the following platforms:</h4>
        </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-10">
          <div className="flex flex-col items-center bg-white p-4 rounded shadow-lg">
            <FaPhoneAlt className="text-xl text-[#ec1839] mb-2" />
            <h4 className="font-semibold">Call Me</h4>
            <p className="text-gray-600">+91 9566194164</p>
          </div>
            <div className="flex flex-col items-center bg-white p-4 rounded shadow-sm">
            <FaEnvelope className="text-xl text-[#ec1839] mb-2" />
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-600">mariaashwini06@gmail.com</p>
          </div>
          <div className="flex flex-col items-center bg-white p-4 rounded shadow-sm">
            <FaLinkedin className="text-xl text-[#ec1839] mb-2" />
            <h4 className="font-semibold">LinkedIn</h4>
             <a href="https://linkedin.com/in/maria-ashwini" target="_blank" className="hover:underline">
              linkedin.com/in/maria-ashwini
            </a>
          </div>
        
          <div className="flex flex-col items-center bg-white p-4 rounded shadow-sm">
            <FaGithub className="text-xl text-[#ec1839] mb-2" />
            <h4 className="font-semibold">Github</h4>
              <a href="https://github.com/mariaashwini" target="_blank" rel="noreferrer" className="hover:underline">
              github.com/mariaashwini
            </a>
          </div>
        </div>

        
    
    </section>
  );
};

export default Contact;
