import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHeader } from "@/components/site/PageShell";
import { Linkedin, Mail } from "lucide-react";

export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "فريق العمل - حاضنة أعمال جامعة المسيلة" },
      { name: "description", content: "تعرّف على فريق حاضنة أعمال جامعة محمد بوضياف بالمسيلة." },
      { property: "og:title", content: "فريق العمل - حاضنة أعمال جامعة المسيلة" },
      { property: "og:description", content: "خبراء ومرافقون لدعم رواد الأعمال." },
    ],
  }),
  component: Team,
});

const team = [
  {
    name: "بن التومي سارة",
    role: "مديرة حاضنة الأعمال",
    bio: "تشرف على استراتيجية الحاضنة وتوجيه فريق العمل، وتقود مسيرة دعم رواد الأعمال وتطوير بيئة الابتكار بالجامعة.",
    image: "/images/team/bentomi-sara.png",
  },
  {
    name: "د. فضيلي سمية",
    role: "مسؤول برامج التكوين والشهادات",
    bio: "متخصصة في تصميم وتنفيذ برامج التكوين والإرشاد وإدارة الشهادات المهنية.",
    image: "/images/team/fdhili-samia.png",
  },
  {
    name: "جناوي عبد اللطيف",
    role: "مسؤول مخبر تكنولوجيا المعلومات",
    bio: "خبير في تكنولوجيا المعلومات، يشرف على البنية التقنية ومخبر الحاضنة الرقمي.",
    image: "/images/team/djennaoui-abdellatif.png",
  },
  {
    name: "بعلي سلمى",
    role: "مسؤول مخبر التصنيع",
    bio: "متخصصة في الإشراف على مخبر التصنيع ودعم مشاريع الإنتاج والنماذج الأولية.",
    image: "/images/team/baali-salma.png",
  },
  {
    name: "قندوز أمين",
    role: "مسؤول الفضاء المشترك",
    bio: "يدير الفضاء المشترك للحاضنة ويؤطّر بيئة العمل التعاونية لرواد الأعمال.",
    image: "/images/team/kandouz-amine.png",
  },
  {
    name: "بوسكرة فائزة",
    role: "مسؤول مخبر البيولوجيا",
    bio: "متخصصة في الإشراف على مخبر البيولوجيا ودعم المشاريع العلمية والبيوتكنولوجية.",
    image: "/images/team/bouskra-faiza.png",
  },
];

function Team() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="فريق العمل"
        title="خبراء يرافقونك في كل خطوة"
        description="فريقنا يجمع بين الأكاديميين، الخبراء التقنيين، والمستشارين المتخصصين، لتقديم دعم شامل لمشروعك."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((m) => (
            <article
              key={m.name}
              className="group rounded-2xl border border-border bg-card p-7 text-center transition-all hover:-translate-y-1 hover:shadow-card"
            >
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-primary/10 shadow-soft">
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold">{m.name}</h3>
              <p className="text-sm font-semibold text-primary">{m.role}</p>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{m.bio}</p>
              <div className="mt-5 flex justify-center gap-2">
                <button
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={15} />
                </button>
                <button
                  className="grid h-9 w-9 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-primary-soft hover:text-primary"
                  aria-label="Email"
                >
                  <Mail size={15} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}