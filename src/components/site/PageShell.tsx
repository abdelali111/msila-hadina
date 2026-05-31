import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <span className="inline-flex items-center rounded-full border border-primary/30 bg-background/70 px-4 py-1 text-xs font-semibold text-primary backdrop-blur">
          {eyebrow}
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">{description}</p>
      </div>
    </section>
  );
}
