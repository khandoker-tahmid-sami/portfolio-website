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
      className="max-w-6xl mx-auto group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm
                 backdrop-blur-sm transition hover:border-indigo-500/30 hover:shadow-lg"
    >
      <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6 md:p-8 space-y-5">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="name" className="text-md text-slate-300">
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
            <label htmlFor="email" className="text-md text-slate-300">
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
          <label htmlFor="message" className="text-md text-slate-300">
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




// "use client";
// import { sendMessage } from "@/app/actions/contact";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { toast } from "sonner";

// const ContactForm = () => {
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const formData = new FormData(form);
//     const res = await sendMessage(formData);
//     if (res?.ok) {
//       toast.success("Thanks! Your message was sent.");
//       form.reset();
//     } else {
//       toast.error(res?.error || "Something went wrong");
//     }
//   };

//   const fieldClass =
//     "h-12 rounded-xl bg-white/5 border border-white/15 px-4 text-white " +
//     "placeholder:text-slate-400 placeholder:text-[15px] md:placeholder:text-base " +
//     "focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent " +
//     "transition";

//   const areaClass =
//     "rounded-xl bg-white/5 border border-white/15 p-4 text-white " +
//     "placeholder:text-slate-400 placeholder:text-[15px] md:placeholder:text-base " +
//     "focus:outline-none focus:ring-2 focus:ring-indigo-500/60 focus:border-transparent " +
//     "resize-y transition";

//   return (
//     <div className="max-w-6xl mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm backdrop-blur-sm">
//       <form onSubmit={handleSubmit} className="max-w-5xl mx-auto p-6 md:p-8 space-y-5">
//         <div className="grid gap-4 md:grid-cols-2">
//           <div className="grid gap-2">
//             <label htmlFor="name" className="text-base text-slate-300">Your Name</label>
//             <Input id="name" name="name" type="text" placeholder="John Doe" required autoComplete="name" className={fieldClass} />
//           </div>

//           <div className="grid gap-2">
//             <label htmlFor="email" className="text-base text-slate-300">Email</label>
//             <Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" className={fieldClass} />
//           </div>
//         </div>

//         <div className="grid gap-2">
//           <label htmlFor="message" className="text-base text-slate-300">Message</label>
//           <Textarea id="message" name="message" placeholder="Tell me a bit about your idea…" rows={6} className={areaClass} />
//         </div>

//         <div className="flex items-center justify-between gap-3 pt-2">
//           <Button type="submit" variant="myVarient">Send Message</Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;

