"use client";

import { Input, Button } from "./ui/input";

const ContactForm = () => {
  return (
    <div
      className="max-w-[850px] group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm
                 backdrop-blur-sm transition hover:border-indigo-500/30 hover:shadow-lg"
    >
      <form>
        <div className="grid gap-4">
          <div className="grid gap-2">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="m@example.com"
              required
            />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center"></div>
            <Input id="password" type="password" name="password" required />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
