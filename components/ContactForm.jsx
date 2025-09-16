import { sendMessage } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  return (
    <div
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm
                 backdrop-blur-sm transition hover:border-indigo-500/30 hover:shadow-lg"
    >
      <form action={sendMessage} className="p-6 md:p-8 space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-slate-300">
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              required
              autoComplete="name"
              className="bg-transparent"
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-slate-300">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
              className="bg-transparent"
            />
          </div>
        </div>

        {/* <div className="grid gap-2">
          <label htmlFor="subject" className="text-sm text-slate-300">
            Subject
          </label>
          <Input
            id="subject"
            name="subject"
            type="text"
            placeholder="What’s this about?"
            required
            className="bg-transparent"
          />
        </div> */}

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm text-slate-300">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me a bit about your idea…"
            rows={6}
            required
            className="bg-transparent resize-y"
          />
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <Button type="submit" variant="myVarient">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
