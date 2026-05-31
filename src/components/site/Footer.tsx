import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="شعار حاضنة الأعمال" width={48} height={48} className="h-12 w-12 object-contain" />
            <div>
              <p className="text-sm font-bold">حاضنة الأعمال</p>
              <p className="text-xs text-muted-foreground">جامعة محمد بوضياف - المسيلة</p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
            نُرافق الطلبة والباحثين في رحلتهم من الفكرة إلى المؤسسة، عبر برامج تكوين، إرشاد،
            وفضاءات عمل مُجهّزة لإطلاق المشاريع الناشئة.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold">روابط سريعة</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-primary">الخدمات</Link></li>
            <li><Link to="/programs" className="hover:text-primary">البرامج والتكوينات</Link></li>
            <li><Link to="/startups" className="hover:text-primary">الشركات الناشئة</Link></li>
            <li><Link to="/team" className="hover:text-primary">فريق العمل</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold">تواصل معنا</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin size={16} className="mt-0.5 text-primary" /><span>جامعة محمد بوضياف، المسيلة، الجزائر</span></li>
            <li className="flex items-center gap-2"><Phone size={16} className="text-primary" /><span>+213 35 00 00 00</span></li>
            <li className="flex items-center gap-2"><Mail size={16} className="text-primary" /><span>incubator@univ-msila.dz</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} حاضنة أعمال جامعة محمد بوضياف بالمسيلة. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
