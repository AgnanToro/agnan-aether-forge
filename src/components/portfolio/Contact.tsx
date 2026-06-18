import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { SOCIALS } from "../../lib/portfolio-data";
import { MagneticButton, Reveal, SectionHeading } from "./ui";

function Field({
  id,
  label,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={id}
          rows={4}
          required
          placeholder=" "
          className="peer w-full resize-none rounded-xl border border-border bg-secondary/20 px-4 pb-2 pt-6 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:bg-secondary/40 focus:shadow-[var(--shadow-glow)]"
        />
      ) : (
        <input
          id={id}
          type={type}
          required
          placeholder=" "
          className="peer w-full rounded-xl border border-border bg-secondary/20 px-4 pb-2 pt-6 text-sm text-foreground outline-none transition-all duration-300 focus:border-primary focus:bg-secondary/40 focus:shadow-[var(--shadow-glow)]"
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-4 text-sm text-muted-foreground transition-all duration-200 peer-focus:top-2 peer-focus:text-xs peer-focus:text-primary peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Pesan terkirim! Terima kasih, saya akan segera membalas.");
    }, 1100);
  };

  return (
    <section id="contact" className="relative px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Build Something Amazing Together"
          subtitle="Terbuka untuk peluang magang, kolaborasi proyek, freelance, maupun diskusi seputar software development dan AI."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-4">
            <a
              href={`mailto:${SOCIALS.email}`}
              className="group flex items-center gap-4 rounded-2xl glass p-5 transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--gradient-primary)] text-primary-foreground">
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                <p className="text-sm font-semibold">{SOCIALS.email}</p>
              </div>
            </a>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl glass p-5 transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/60 text-primary">
                <Github className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</p>
                <p className="text-sm font-semibold">@agnantoro</p>
              </div>
            </a>
            <a
              href={SOCIALS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl glass p-5 transition-shadow hover:shadow-[var(--shadow-glow)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/60 text-primary">
                <Linkedin className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</p>
                <p className="text-sm font-semibold">Agnan Toro</p>
              </div>
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl glass p-6">
              <Field id="name" label="Name" />
              <Field id="email" label="Email" type="email" />
              <Field id="message" label="Message" textarea />
              <MagneticButton type="submit" className="w-full" disabled={sending}>
                {sending ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </MagneticButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
