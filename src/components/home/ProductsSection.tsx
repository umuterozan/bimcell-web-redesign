import { RightArrowIcon } from "../icons";
import ProductCard from "../products/ProductCard";

const mockData = [
  {
    id: 1,
    title: "Dost Küçük",
    minute: "750",
    sms: "250",
    internet: "3 GB",
    price: "102"
  },
  {
    id: 2,
    title: "Dost Orta",
    minute: "750",
    sms: "250",
    internet: "6 GB",
    price: "115"
  },
  {
    id: 3,
    title: "Dost Büyük",
    minute: "750",
    sms: "250",
    internet: "9 GB",
    price: "133"
  },
  {
    id: 4,
    title: "Dost Mega",
    minute: "750",
    sms: "250",
    internet: "15 GB",
    price: "159"
  },
]

export default function ProductsSection() {
  return (
    <section className="mt-[70px]">
      <div className="container mx-auto">
        <h1 className="text-text-one text-2xl font-semibold text-center">Tarifeler ve Paketler</h1>
        <div className="mt-7 flex items-center justify-center gap-x-[10px]">
          <div className="bg-white shadow-[0_2px_10px_-5px_rgba(0,0,0,0.25)] rounded-lg text-text-one font-medium px-[15px] py-[10px]">SMS Paketleri</div>
          <div className="bg-white shadow-[0_2px_10px_-5px_rgba(0,0,0,0.25)] rounded-lg text-text-one font-medium px-[15px] py-[10px]">İnternet Paketleri</div>
          <div className="bg-brand border-2 border-brand rounded-lg text-white font-medium px-[15px] py-[10px]">Karma Paketler</div>
          <div className="bg-white shadow-[0_2px_10px_-5px_rgba(0,0,0,0.25)] rounded-lg text-text-one font-medium px-[15px] py-[10px]">Gençlere Özel</div>
        </div>
        <div className="mt-7 flex justify-center gap-x-3">
          {mockData.map((product) => (
            <ProductCard key={product.id} title={product.title} minute={product.minute} sms={product.sms} internet={product.internet} price={product.price} />
          ))}
        </div>
        <button className="flex items-center gap-x-[15px] bg-white border-2 border-brand rounded-lg py-[10px] px-[15px] mt-[30px] mx-auto">
          <div className="text-text-one font-medium">Tüm Paketleri İnceleyin</div>
          <div><RightArrowIcon color="#242424" size="24px" /></div>
        </button>
      </div>
    </section>
  )
}