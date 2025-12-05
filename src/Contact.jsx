import { section } from "framer-motion/client";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const contacts = [
  { icon: FaPhone, text: "+91 9876543210" },
  { icon: FaEnvelope, text: "info@bitestreet.com" },
  { icon: FaInstagram, text: "@bitestreet" },
  { icon: FaFacebook, text: "/bitestreet" },
  { icon: FaTwitter, text: "@bitestreet" },
];

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-40 w-full mt-52">
      <h1 data-aos="fade-up" className="md:text-5xl text-4xl mx-auto w-[85%] whitetext text-mybutter font-pacifico ">Bite <span className="text-myash font-quicksand font-bold tracking-tight">Street</span></h1>
      <div className=" w-[85%] mx-auto mt-12 text-myash flex flex-col md:flex-row gap-12 mb-20">


        <div className="order-2 md:order-1 w-3/5 flex flex-col gap-6 ">


          <div className=" flex mt-2 flex-col md:flex-row gap-12 md:gap-0">

            <div className="flex-1">
              <h2 data-aos="fade-up" className="text-2xl whitetext font-semibold mb-4">Get in Touch</h2>
              <ul data-aos="fade-up" className="flex flex-col gap-3">
                {contacts.map((c, idx) => {
                  const Icon = c.icon;
                  return (
                    <li key={idx} className="whitetext flex items-center gap-3">
                      <Icon /> <span>{c.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

          
            <div className="flex-1">
              <h2 data-aos="fade-up" className="whitetext text-2xl font-semibold mb-4">Opening Hours</h2>
              <ul data-aos="fade-up" className="whitetext flex flex-col gap-2">
                <li>Mon-Tue: 10:00 AM - 10:00 PM</li>
                <li>Thu-Fri: 10:00 AM - 10:00 PM</li>
                <li>Sat-Sun: 11:00 AM - 11:00 PM</li>
              </ul>

              <h2 data-aos="fade-up" className="text-2xl font-semibold mt-6 whitetext mb-4">Address</h2>
              <p data-aos="fade-up" className="whitetext">123 Bite Street Lane, Kolkata, West Bengal, India</p>
            </div>
          </div>
        </div>

      
        <div className="flex-1 order-1 md:order-2  flex justify-center flex-col">
          <h2 data-aos="fade-up" className="md:text-3xl text-2xl font-bold mb-4 md:mt-6 lg:mt-0 whitetext">Contact Us</h2>
          <p data-aos="fade-up" className="whitetext text-lg">
            We'd love to hear from you! Whether it's feedback, questions, or collaborations, reach out and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;