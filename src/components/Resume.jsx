const Resume = () => {
  return (
    <section
      id="resume"
      className="animate-slide-section ml-60 w-[calc(100%-15rem)] min-h-screen py-10 px-4 bg-[#f2f2fc]"
    >
      <div className="section-title flex-none w-full max-w-full mb-[60px]">
        <h2 className="text-[40px] text-[#302E4D] font-bold relative ">
          Resume
        </h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="mb-6 text-[#504e70] text-xl">Click below to download my resume in PDF format.</p>
        <a
          href="/Maria_Ashwini_CV.docx"
          download
          className="inline-block bg-[#ec1839] text-white text-base font-medium py-[12px] px-[35px] rounded-[40px] transition-all duration-300 ease-in-out hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;
