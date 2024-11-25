import SlickItem from "./slick-item";
import Hell from "../../../public/images/img1.jpg";
import Hell2 from "../../../public/images/img2.jpg";
import Hell3 from "../../../public/images/img3.jpg";
import { useTranslations } from "next-intl";

const fakeData: ImageView[] = [
  {
    imgView: Hell,
    category: "khachSanLotte",
    promotionTTL: "promotion1",
    promotionCopy: "promotionCopy1",
    promotionDate1: "promotionDate1",
    promotionDate2: "promotionDate2",
    price: "3,530,000",
  },
  {
    imgView: Hell2,
    category: "khachSanLotte",
    promotionTTL: "promotion2",
    promotionCopy: "promotionCopy2",
    promotionDate1: "promotionDate2",
    promotionDate2: null,
    price: null,
  },
  {
    imgView: Hell3,
    category: "khachSanLotte",
    promotionTTL: "promotion3",
    promotionCopy: "promotionCopy3",
    promotionDate1: "promotionDate2",
    promotionDate2: null,
    price: null,
  },
];

export default function HomeBody() {
  const t = useTranslations("HomePage");
  return (
    <div className="flex justify-center flex-col items-center mt-8">
      <div className="w-1250 flex justify-center flex-col text-4xl text-center py-12">
        <span>{t("titleH1_1")}</span>
        <span className="uppercase">{t("titleH1_2")}</span>
      </div>
      <div className="w-1250 grid grid-cols-3 gap-6">
        {fakeData.map((item, index) => {
          return <SlickItem key={index} data={item} />;
        })}
      </div>
    </div>
  );
}
