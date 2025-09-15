import ContactForm from "./ContactForm";

const ContactSection = () => {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16">
      <h4 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">
        <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
          Get in touch
        </span>
      </h4>

      <p className="mt-4 mx-auto max-w-2xl text-center text-slate-400">
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
