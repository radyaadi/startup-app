import ContactForm from "../../molecules/form/contact-form";
import contactLogo from "../../../assets/contact.svg";

export default function ContactContainer() {
  return (
    <section id="contact" className="py-20">
      <div className="box-container flex flex-col items-center gap-20 lg:flex-row lg:items-start">
        <div className="flex-1">
          <div className="mb-16 text-center lg:text-start">
            <h1 className="mb-5 text-4xl font-bold text-[#6C63FF]">
              Contact Us
            </h1>
            <p className="font-medium">
              Start Your Digital Transformation Journey
            </p>
          </div>
          <div className="min-w-[23rem] max-w-[27rem]">
            <img src={contactLogo} alt="Logo" className="h-full w-full" />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
