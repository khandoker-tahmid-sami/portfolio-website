import ContactForm from "./ContactForm";
const ContactSection = () => {
  return (
    <section className="max-w-3xl mx-auto">
      <h4 className="text-3xl font-semibold text-center">
        <span>Get in touch</span>
      </h4>
      <p className="max-w-1xl mx-auto text-center">
        Got a project, collaboration idea, or just want to say hello? I’d love
        to hear from you. Share a few details and I’ll get back within 24–48
        hours. Prefer email? Drop a line at{" "}
      </p>
      <ContactForm />
    </section>
  );
};

export default ContactSection;
