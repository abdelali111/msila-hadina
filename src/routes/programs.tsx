import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Calendar, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "البرامج والتكوينات - حاضنة أعمال جامعة المسيلة" },
      { name: "description", content: "برامج تكوينية متخصصة في ريادة الأعمال، الابتكار، التسويق الرقمي، والإدارة المالية." },
      { property: "og:title", content: "البرامج والتكوينات - حاضنة أعمال جامعة المسيلة" },
      { property: "og:description", content: "اكتشف برامج التكوين المتاحة للطلبة والباحثين." },
    ],
  }),
  component: Programs,
});

const programs = [
  {
    title: "برنامج الانطلاقة",
    duration: "8 أسابيع",
    desc: "للمبتدئين الذين يملكون فكرة مشروع ويرغبون في تطويرها إلى نموذج عمل واضح.",
    modules: ["مبادئ ريادة الأعمال", "تحليل السوق", "نموذج العمل (Business Model)", "العرض التقديمي (Pitch)"],
  },
  {
    title: "برنامج التسريع",
    duration: "12 أسبوع",
    desc: "للمشاريع التي اجتازت مرحلة النموذج الأولي وتسعى للوصول إلى السوق.",
    modules: ["استراتيجيات النمو", "التمويل والاستثمار", "التسويق الرقمي", "إدارة الفريق"],
  },
  {
    title: "ورشات الابتكار التقني",
    duration: "أسبوع مكثف",
    desc: "ورشات عملية في التقنيات الحديثة: الذكاء الاصطناعي، إنترنت الأشياء، تطوير الويب.",
    modules: ["مدخل إلى الذكاء الاصطناعي", "تطوير تطبيقات الجوال", "تحليل البيانات", "الأمن السيبراني"],
  },
  {
    title: "أكاديمية القيادة",
    duration: "6 أسابيع",
    desc: "تطوير المهارات القيادية والإدارية لقادة المشاريع الناشئة.",
    modules: ["القيادة والتأثير", "اتخاذ القرار", "إدارة الأزمات", "التفاوض"],
  },
];

function Programs() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="البرامج والتكوينات"
        title="برامج مصمّمة لكل مرحلة من رحلتك"
        description="مهما كان مستوى مشروعك، لدينا برنامج تكويني يناسبك. تعرّف على البرامج المتاحة وانضم إلى الدفعة القادمة."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((p) => (
            <article key={p.title} className="rounded-2xl border border-border bg-card p-7 shadow-card transition-all hover:border-primary/40">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent">
                  <Calendar size={12} /> {p.duration}
                </span>
              </div>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{p.desc}</p>
              <ul className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {p.modules.map((m) => (
                  <li key={m} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 size={16} className="text-primary" />
                    {m}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
