import SlickItem from "./slick-item";
import Hell from "../../../public/images/img1.jpg";
import Hell2 from "../../../public/images/img2.jpg";
import Hell3 from "../../../public/images/img3.jpg";

const fakeData: ImageView[] = [
  {
    imgView: Hell,
    category: "Khách sạn LOTTE Hà Nội",
    promotionTTL: "Gói nghỉ dưỡng Mùa đông ngập tràn yêu thương",
    promotionCopy: "Phòng Deluxe | Bánh ngọt miễn phí | Rượu vang sủi tặng kèm | Giảm 20% dịch vụ spa",
    promotionDate1: "Oct 18, 2024 - Dec 31, 2024",
    promotionDate2: "Oct 18, 2024 - Dec 31, 2024",
    price: "3,530,000"
  },
  {
    imgView: Hell2,
    category: "Khách sạn LOTTE Hà Nội",
    promotionTTL: "Khám phá ngay không gian giải trí Sports Bar!",
    promotionCopy: "Khu vực Upper quen thuộc đã được biến hóa thành một sân chơi tràn đầy năng lượng với nhiều trò chơi hấp dẫn và cực kỳ sống động.",
    promotionDate1: "Oct 10, 2024 - Dec 31, 2025",
    promotionDate2: null,
    price: null
  },
  {
    imgView: Hell3,
    category: "Khách sạn LOTTE Hà Nội",
    promotionTTL: "Thực đơn Love Is In The Air tại Grill63",
    promotionCopy: "Hãy để Grill63 trở thành thiên đường ghi dấu hành trình hạnh phúc của bạn và người ấy.",
    promotionDate1: "Oct 7, 2024 - Dec 31, 2024",
    promotionDate2: null,
    price: null
  }
]

export default function HomeBody() {
  return (
    <div className='flex justify-center flex-col items-center mt-8'>
        <div className='w-1250 flex justify-center flex-col text-4xl text-center py-12'>
              <span>Ưu đãi đặc biệt từ</span>
              <span className="uppercase">KHÁCH SẠN LOTTE HÀ NỘI</span>
        </div>
        <div className='w-1250 grid grid-cols-3 gap-6'>
          {fakeData.map((item, index) => {
            return (
              <SlickItem key={index} data={item} />
            )
          })}
        </div>
    </div>
  )
}
