import Image from "next/image";

interface IProps {
    data: ImageView;
}

export default function SlickItem(props: IProps) {
    const { data } = props;

    return (
        <div className="hover:cursor-pointer">
            <div className="overflow-hidden w-400 h-225">
                <Image
                    src={data.imgView}
                    width={400}
                    height={225}
                    alt="Picture of the author"
                    className="transform scale-100 hover:scale-110 transition duration-700 h-full"
                />
            </div>
            <div className="my-3">
                <span className="bg-second text-xs tracking-tight py-1 px-2 text-white rounded my-2">
                    {data.category}
                </span>
            </div>
            <h2 className="text-2xl">{data.promotionTTL}</h2>
            <hr style={{ background: "#dcdcdc" }} className="h-[2px] my-3" />
            <p
                className="text-xl overflow-hidden text-ellipsis"
                style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                }}
            >
                {data.promotionCopy}
            </p>
            <div className="flex flex-col py-3">
                {!!data.promotionDate2 ? (
                    <>
                        <span className="font-normal text-lg">
                            Ở lại:{" "}
                            <span className="text-666 text-lg font-light">
                                {data.promotionDate1}
                            </span>
                        </span>
                        <span className="font-normal text-lg">
                            Đặt phòng:{" "}
                            <span className="text-666 tex-lg font-light">
                                {data.promotionDate2}
                            </span>
                        </span>
                    </>
                ) : (
                    <span className="font-normal text-lg mb-7">
                        Thời gian:{" "}
                        <span className="text-666 text-lg font-light">
                            {data.promotionDate1}
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
                    <span className="text-lg uppercase pt-2">
                        EVENT
                    </span>
                )}
            </div>
        </div>
    );
}
