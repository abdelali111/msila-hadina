import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Briefcase, ClipboardList, Coins, GraduationCap, Handshake, Megaphone, Scale, Workflow } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "الخدمات المقدمة - حاضنة أعمال جامعة المسيلة" },
      { name: "description", content: "خدمات متكاملة: دراسة جدوى، تكوين، إرشاد، فضاء عمل، ودعم قانوني وإداري." },
      { property: "og:title", content: "الخدمات المقدمة - حاضنة أعمال جامعة المسيلة" },
      { property: "og:description", content: "كل الخدمات التي تحتاجها لإطلاق مشروعك الناشئ." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: ClipboardList, title: "دراسة الجدوى", desc: "تقييم تقني واقتصادي شامل لفكرتك مع توصيات قابلة للتنفيذ." },
  { icon: GraduationCap, title: "التكوين والتدريب", desc: "ورشات وبرامج تأهيلية في ريادة الأعمال والابتكار والتسويق." },
  { icon: Handshake, title: "الإرشاد والمرافقة", desc: "مرشدون وخبراء يرافقونك خطوة بخطوة من الفكرة إلى السوق." },
  { icon: Briefcase, title: "فضاء العمل", desc: "مكاتب وفضاء مشترك مجهّز بكل ما تحتاجه للعمل والإنتاج." },
  { icon: Scale, title: "الدعم القانوني", desc: "استشارات في تأسيس المؤسسة، الملكية الفكرية، والعقود." },
  { icon: Coins, title: "البحث عن التمويل", desc: "ربطك بصناديق الاستثمار، الجهات الداعمة، والمستثمرين." },
  { icon: Workflow, title: "النمذجة الأولية", desc: "تطوير نموذج أولي (Prototype) لاختبار فكرتك في السوق." },
  { icon: Megaphone, title: "التسويق والاتصال", desc: "مساعدتك في بناء هويتك البصرية واستراتيجيتك التسويقية." },
];

function Services() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="الخدمات المقدمة"
        title="كل ما تحتاجه لإطلاق مشروعك"
        description="نقدّم باقة متكاملة من الخدمات المصمّمة خصيصاً لمرافقة حاملي الأفكار والمشاريع من مرحلة التصور إلى مرحلة النجاح في السوق."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <article key={s.title} className="group rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-gradient-hero group-hover:text-primary-foreground">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{s.desc}</p>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
