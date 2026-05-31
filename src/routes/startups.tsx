import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { ExternalLink, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/startups")({
  head: () => ({
    meta: [
      { title: "الشركات الناشئة - حاضنة أعمال جامعة المسيلة" },
      { name: "description", content: "تعرّف على المشاريع والشركات الناشئة التي احتضنتها حاضنة جامعة محمد بوضياف بالمسيلة." },
      { property: "og:title", content: "الشركات الناشئة - حاضنة أعمال جامعة المسيلة" },
      { property: "og:description", content: "قصص نجاح وشركات ناشئة انطلقت من الحاضنة." },
    ],
  }),
  component: Startups,
});

const startups = [
  { name: "AgriTech DZ", sector: "تكنولوجيا فلاحية", desc: "حلول ذكية لري المحاصيل وتحليل التربة باستخدام إنترنت الأشياء.", stage: "النمو", color: "from-emerald-500/20 to-emerald-500/5" },
  { name: "EduSpark", sector: "تعليم رقمي", desc: "منصة تعليمية تفاعلية للطلبة الجامعيين باللغة العربية.", stage: "الإطلاق", color: "from-blue-500/20 to-blue-500/5" },
  { name: "MediCare AI", sector: "صحة", desc: "تطبيق ذكاء اصطناعي لمساعدة الأطباء في تشخيص الأمراض المزمنة.", stage: "النموذج الأولي", color: "from-cyan-500/20 to-cyan-500/5" },
  { name: "GreenLogix", sector: "لوجستيك مستدام", desc: "حلول لوجستية صديقة للبيئة لتوصيل البضائع داخل المدن.", stage: "النمو", color: "from-teal-500/20 to-teal-500/5" },
  { name: "Hirafi", sector: "تجارة إلكترونية", desc: "سوق رقمي للمنتجات الحرفية الجزائرية الأصيلة.", stage: "الإطلاق", color: "from-indigo-500/20 to-indigo-500/5" },
  { name: "DataMine", sector: "تحليل بيانات", desc: "خدمات تحليل البيانات الضخمة للمؤسسات الصغيرة والمتوسطة.", stage: "التسريع", color: "from-sky-500/20 to-sky-500/5" },
];

function Startups() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="فضاء المشاريع"
        title="شركات ناشئة وُلدت في الحاضنة"
        description="نفخر بمرافقة عدد من المشاريع الواعدة التي تحوّلت إلى شركات ناشئة فعّالة في مختلف القطاعات."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {startups.map((s) => (
            <article key={s.name} className={`group relative overflow-hidden rounded-2xl border border-border bg-gradient-to-br ${s.color} p-6 transition-all hover:-translate-y-1 hover:shadow-card`}>
              <div className="flex items-start justify-between">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-background text-lg font-extrabold text-primary shadow-soft">
                  {s.name.charAt(0)}
                </div>
                <span className="inline-flex items-center gap-1 rounded-full bg-background/80 px-3 py-1 text-[11px] font-semibold text-foreground backdrop-blur">
                  <TrendingUp size={11} /> {s.stage}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.name}</h3>
              <p className="text-xs font-medium text-primary">{s.sector}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{s.desc}</p>
              <button className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-foreground opacity-70 transition-opacity hover:opacity-100">
                المزيد عن المشروع <ExternalLink size={12} />
              </button>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
