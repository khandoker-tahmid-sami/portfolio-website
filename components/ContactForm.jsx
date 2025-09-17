"use client";
import { sendMessage } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await sendMessage(formData);
      if (res?.ok) {
        toast.success("Thanks! Your message was sent.");
        form.reset();
      } else {
        toast.error(res?.error || "Something went wrong");
      }
    } catch (err) {
      toast.error("Unable to send right now. Please try again later");
      console.error(err);
    }
  };
  return (
    <div
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm
                 backdrop-blur-sm transition hover:border-indigo-500/30 hover:shadow-lg"
    >
      <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
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
