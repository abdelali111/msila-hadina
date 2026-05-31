import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Lightbulb, Users, Rocket, BookOpen, Building2, Phone, Sparkles, Target, Trophy } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import heroImg from "@/assets/hero-incubator.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "حاضنة أعمال جامعة محمد بوضياف - المسيلة" },
      { name: "description", content: "من الفكرة إلى المؤسسة: نحتضن مشاريع الطلبة والباحثين ونرافقهم بالتكوين والإرشاد." },
      { property: "og:title", content: "حاضنة أعمال جامعة محمد بوضياف - المسيلة" },
      { property: "og:description", content: "احتضان، تكوين، ومرافقة المشاريع الناشئة في جامعة المسيلة." },
    ],
  }),
  component: Home,
});

const highlights = [
  { icon: Lightbulb, title: "تطوير الأفكار", text: "نُحوّل الأفكار الواعدة إلى نماذج أعمال قابلة للتنفيذ." },
  { icon: BookOpen, title: "تكوين متخصص", text: "ورشات وبرامج تكوينية في ريادة الأعمال والابتكار." },
  { icon: Users, title: "إرشاد ومرافقة", text: "خبراء يرافقونك في كل مرحلة من مراحل مشروعك." },
  { icon: Building2, title: "فضاء عمل مجهّز", text: "مكاتب وفضاء عمل مشترك لاحتضان مشروعك الناشئ." },
];

const stats = [
  { value: "+120", label: "مشروع مُحتضن" },
  { value: "+45", label: "شركة ناشئة" },
  { value: "+30", label: "خبير ومرافق" },
  { value: "+15", label: "شراكة فعّالة" },
];

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-soft" />
        <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-8 lg:px-8">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur">
              <Sparkles size={14} /> جامعة محمد بوضياف - المسيلة
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] md:text-6xl">
              من <span className="text-gradient-hero">الفكرة</span> إلى
              <br />
              مؤسسة <span className="text-gradient-hero">ناجحة</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-muted-foreground">
              حاضنة الأعمال بجامعة محمد بوضياف بالمسيلة ترافق الطلبة والباحثين في تجسيد أفكارهم
              المبتكرة وتحويلها إلى شركات ناشئة عبر برامج تكوين، إرشاد، وفضاءات عمل متكاملة.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-gradient-hero px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105">
                ابدأ مشروعك <ArrowLeft size={16} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted">
                اكتشف خدماتنا
              </Link>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="text-2xl font-extrabold text-foreground md:text-3xl">{s.value}</dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-3xl bg-gradient-hero opacity-30 blur-2xl" />
            <img
              src={heroImg}
              alt="فريق من رواد الأعمال يعملون في حاضنة الأعمال"
              width={1600}
              height={1024}
              className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
            />
            <div className="absolute bottom-5 right-5 max-w-[220px] rounded-2xl bg-background/95 p-4 shadow-soft backdrop-blur">
              <div className="flex items-center gap-2 text-primary">
                <Trophy size={18} />
                <span className="text-xs font-bold">رؤية 2030</span>
              </div>
              <p className="mt-1.5 text-xs text-muted-foreground">دعم الابتكار وريادة الأعمال الجامعية في الجزائر.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights grid */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold text-primary">لماذا نحن؟</span>
          <h2 className="mt-2 text-3xl font-bold md:text-4xl">منظومة متكاملة لاحتضان مشروعك</h2>
          <p className="mt-3 text-muted-foreground">
            نوفّر للطلبة والباحثين كل ما يحتاجونه لتحويل أفكارهم إلى مؤسسات ناشئة قادرة على المنافسة.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <article key={h.title} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-gradient-hero group-hover:text-primary-foreground">
                <h.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{h.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{h.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* About strip */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 md:grid-cols-2 lg:px-8">
          <div>
            <span className="text-sm font-semibold text-accent">من نحن</span>
            <h2 className="mt-2 text-3xl font-bold md:text-4xl">تعريف بحاضنة الأعمال</h2>
            <p className="mt-4 leading-9 text-muted-foreground">
              تأسست حاضنة الأعمال بجامعة محمد بوضياف بالمسيلة لتكون جسراً بين البحث العلمي
              والمحيط الاقتصادي، حيث نُقدّم بيئة محفّزة للابتكار ونحتضن المشاريع الواعدة من
              فكرتها الأولى وحتى تأسيس مؤسسة قانونية فعّالة في السوق.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {["تشخيص الأفكار ودراسة الجدوى", "إرشاد قانوني وإداري", "ربط بشبكة المستثمرين والشركاء", "متابعة ما بعد الإطلاق"].map((t) => (
                <li key={t} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-soft text-primary">
                    <Target size={12} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <Rocket className="text-primary" />
              <p className="mt-4 text-3xl font-extrabold">+975</p>
              <p className="mt-1 text-xs text-muted-foreground">عدد المشاريع المحتضنة</p>
            </div>
            <div className="mt-8 rounded-2xl border border-border bg-gradient-hero p-6 text-primary-foreground shadow-card">
              <Users />
              <p className="mt-4 text-3xl font-extrabold">+15</p>
              <p className="mt-1 text-xs opacity-90">وسم لابل مؤسسة ناشئة</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <BookOpen className="text-accent" />
              <p className="mt-4 text-3xl font-extrabold">+645</p>
              <p className="mt-1 text-xs text-muted-foreground">عدد المشاريع ضمن القرار 1275
</p>
            </div>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6 shadow-card">
              <Trophy className="text-primary" />
              <p className="mt-4 text-3xl font-extrabold">+73</p>
              <p className="mt-1 text-xs text-muted-foreground">وسم لابل مشروع مبتكر</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-hero p-10 text-primary-foreground md:p-16">
          <div className="absolute -top-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-3xl font-bold md:text-4xl">عندك فكرة مشروع؟ نحن هنا لدعمك.</h2>
              <p className="mt-3 max-w-xl opacity-90">
                قدّم فكرتك اليوم وانضم لعائلة من رواد الأعمال الشباب الذين يبنون مستقبل الجزائر.
              </p>
            </div>
            <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-bold text-foreground hover:scale-105 transition-transform">
              <Phone size={16} /> تواصل مع الحاضنة
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
