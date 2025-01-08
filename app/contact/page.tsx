export default function Contact() {
  return (
    <>
      <div className="mt-24 px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl text-cyan-600 font-thin">
            Contact Us
          </h3>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 px-4 sm:px-8 lg:px-16 py-10">
          <div className="flex-1 min-w-[250px] text-center">
            <h3 className="text-xl sm:text-2xl font-thin">Customer Service</h3>
            <div className="text-gray-400 mt-6">
              <p>Tel: +91 9999999999</p>
              <p>gmailId@gmail.com</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] text-center">
            <h3 className="text-xl sm:text-2xl font-thin">
              Visit Our Showroom
            </h3>
            <div className="text-gray-400 mt-6">
              <p>Place of the showroom,</p>
              <p>District, State</p>
            </div>
          </div>

          <div className="flex-1 min-w-[250px] text-center">
            <h3 className="text-xl sm:text-2xl font-thin">Opening Hours</h3>
            <div className="text-gray-400 mt-6">
              <p>Mon-Fri: 10 AM - 9 PM</p>
              <p>Sat-Sun: 10 AM - 11 PM</p>
            </div>
          </div>

        </div>

      </div>

      <div className="w-full h-[450px] p-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251482.575965194!2d76.13612007395902!3d9.98251603042852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d514abec6bf%3A0xbd582caa5844192!2sKochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1736331949170!5m2!1sen!2sin"
          width="100%"
          height="100%"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen 
          className="rounded-sm"
        ></iframe>
      </div>
    </>
  );
}
