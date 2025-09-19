import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="px-4 py-16" id="contact">
      <h4 className="text-center text-3xl md:text-7xl font-semibold tracking-tight">
        <span className="text-white bg-clip-text">
          Get in touch
        </span>
      </h4>

      <p className="mt-4 max-w-2xl mx-auto text-[1.2rem] text-center text-slate-400">
        Got a project, collaboration idea, or just want to say hello? I’d love
        to hear from you. Share a few details and I’ll get back within 24–48
        hours.
      </p>

      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  );
};

export default ContactSection;
