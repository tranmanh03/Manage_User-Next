import Image from "next/image";
import { useTranslations } from "next-intl";
interface IProps {
  data: ImageView;
}

export default function SlickItem(props: IProps) {
  const { data } = props;
  const t = useTranslations("HomePage");

  return (
    <div className="hover:cursor-pointer">
      <div className="overflow-hidden w-400 h-225">
        <Image
          src={data.imgView}
          width={400}
          height={225}
          alt={t(data.category)}
          className="transform scale-100 hover:scale-110 transition duration-700 h-full"
        />
      </div>
      <div className="my-3">
        <span className="bg-second text-xs tracking-tight py-1 px-2 text-white rounded my-2">
          {t(data.category)}
        </span>
      </div>
      <h2 className="text-2xl h-[64px]">{t(data.promotionTTL)}</h2>
      <hr style={{ background: "#dcdcdc" }} className="h-[2px] my-3" />
      <p
        className="text-xl overflow-hidden text-ellipsis"
        style={{
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
        }}
      >
        {t(data.promotionCopy)}
      </p>
      <div className="flex flex-col py-3">
        {!!data.promotionDate2 ? (
          <>
            <p className="font-normal text-lg">
              <span className="min-w-[92px] inline-block">{t("Stay")}: </span>
              <span className="text-666 text-lg font-light">
                {t(data.promotionDate1)}
              </span>
            </p>
            <p className="font-normal text-lg">
              <span className="min-w-[92px] inline-block">
                {t("Booking")}:{" "}
              </span>

              <span className="text-666 tex-lg font-light">
                {t(data.promotionDate2)}
              </span>
            </p>
          </>
        ) : (
          <span className="font-normal text-lg mb-7">
            {t("Time")}:{" "}
            <span className="text-666 text-lg font-light">
              {t(data.promotionDate1)}
            </span>
          </span>
        )}
      </div>
      <hr style={{ background: "#dcdcdc" }} className="h-[1px] my-3" />
      <div className="flex justify-between items-center">
        {data.price ? (
          <>
            <span className="uppercase text-lg pt-2">package</span>
            <span className="text-lg">
              From <span className="text-3xl">{data.price}</span>
              VND
            </span>
          </>
        ) : (
          <span className="text-lg uppercase pt-2">EVENT</span>
        )}
      </div>
    </div>
  );
}
