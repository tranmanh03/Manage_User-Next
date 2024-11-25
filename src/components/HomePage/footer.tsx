import { useTranslations } from "next-intl";
export default function Footer() {
  const t = useTranslations();
  return (
    <div className="bg-slate-800 text-center text-white py-2 mt-4">
      <span>&#169; {t("Footer")}</span>
    </div>
  );
}
