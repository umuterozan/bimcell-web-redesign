import ProductCard from "@/components/products/ProductCard"

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
  {
    id: 5,
    title: "Dost Ultra",
    minute: "750",
    sms: "250",
    internet: "20 GB",
    price: "175"
  },
  {
    id: 6,
    title: "Dost Full",
    minute: "750",
    sms: "250",
    internet: "50 GB",
    price: "300"
  },
]

export default function İnternetPaketleri() {
  return (
    <div className="grid grid-cols-3 gap-5">
      {mockData.map((product) => (
        <ProductCard key={product.id} title={product.title} minute={product.minute} sms={product.sms} internet={product.internet} price={product.price} />
      ))}
    </div>
  )
}