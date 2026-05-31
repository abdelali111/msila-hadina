import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا - حاضنة أعمال جامعة المسيلة" },
      { name: "description", content: "تواصل مع حاضنة أعمال جامعة محمد بوضياف بالمسيلة لتقديم مشروعك أو الاستفسار." },
      { property: "og:title", content: "تواصل معنا - حاضنة أعمال جامعة المسيلة" },
      { property: "og:description", content: "نحن هنا للإجابة على استفساراتك." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHeader
        eyebrow="تواصل معنا"
        title="نحن هنا للإجابة على استفساراتك"
        description="عندك فكرة مشروع، تستفسر عن برامجنا، أو تبحث عن شراكة؟ راسلنا وسنرد عليك في أقرب وقت."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-4">
            {[
              { icon: MapPin, title: "العنوان", text: "جامعة محمد بوضياف،  المسيلة 28000، الجزائر" },
              { icon: Phone, title: "الهاتف", text: "+213 35 13 38 49" },
              { icon: Mail, title: "البريد الإلكتروني", text: "incubator@univ-msila.dz" },
            ].map((c) => (
              <div key={c.title} className="flex gap-4 rounded-2xl border border-border bg-card p-5">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                  <c.icon size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold">{c.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-7 shadow-card"
          >
            <h3 className="text-xl font-bold">أرسل لنا رسالة</h3>
            <p className="mt-1 text-sm text-muted-foreground">سنرد عليك خلال 48 ساعة عمل.</p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field label="الاسم الكامل" name="name" required />
              <Field label="البريد الإلكتروني" type="email" name="email" required />
              <Field label="رقم الهاتف" name="phone" className="sm:col-span-2" />
              <Field label="الموضوع" name="subject" className="sm:col-span-2" required />
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-semibold">الرسالة</span>
              <textarea
                required
                rows={5}
                className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="اكتب رسالتك هنا..."
              />
            </label>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
            >
              <Send size={15} /> إرسال الرسالة
            </button>

            {sent && (
              <p className="mt-4 rounded-xl bg-primary-soft p-3 text-sm font-semibold text-primary">
                شكراً لتواصلك! تم استلام رسالتك وسنرد عليك قريباً.
              </p>
            )}
          </form>
        </div>
      </section>
    </PageShell>
  );
}

function Field({ label, className = "", ...rest }: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold">{label}</span>
      <input
        {...rest}
        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
    </label>
  );
}
