import { ArrowUpRight, Mail } from "lucide-react";
import Container from "../ui/Container";
import { site } from "@/data/site";
export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <div className="rounded-[2rem] border border-black/10 bg-[#e8e8e0] p-7 sm:p-12 lg:p-16">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/40">
            Contact
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Have a product to build or an interface to improve?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-black/55">
                I am open to frontend opportunities, collaborations and
                interesting product work.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href={site.email}
                className="flex items-center justify-between rounded-2xl bg-black px-5 py-4 text-sm font-medium text-white"
              >
                <span className="flex items-center gap-2">
                  <Mail size={16} />
                  Email me
                </span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm font-medium"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
