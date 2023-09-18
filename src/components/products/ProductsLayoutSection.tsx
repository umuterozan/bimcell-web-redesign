import { LeftArrowIcon, RightArrowIcon } from "../icons"

const mockData = [
  {
    id: 1,
    title: "SMS Paketleri",
  },
  {
    id: 2,
    title: "Kampanyalar",
  },
  {
    id: 3,
    title: "İnternet Paketleri",
  },
  {
    id: 4,
    title: "Dost Konuşan Paketi",
  },
  {
    id: 5,
    title: "Karma Paketleri",
  },
  {
    id: 6,
    title: "SMS Paketler",
  },
  {
    id: 7,
    title: "Gençlere Özel Paketler",
  },
  {
    id: 8,
    title: "BTK Kampanyası",
  },
  {
    id: 9,
    title: "Konuşma Paketleri",
  },
  {
    id: 10,
    title: "Uygulamaya Özel Paketler",
  },
  {
    id: 11,
    title: "Sil Süpür Kampanyası",
  },
]

export default function ProductsLayoutSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="mt-[70px] mb-[170px]">
      <div className="container mx-auto flex gap-x-5">
        <div>
          {mockData.map((data) => (
            <div key={data.id} className="mb-[10px] bg-white shadow-[0_2px_10px_-5px_rgba(0,0,0,0.25)] rounded-lg px-[15px] w-[234px] h-[50px] flex items-center justify-between">
              <div className="text-[15px] text-text-one">{data.title}</div>
              <div><RightArrowIcon color="#242424" size="24" /></div>
            </div>
          ))}
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between h-[65px] px-5 bg-white rounded-xl">
            <div>
              <h2 className="text-2xl font-semibold">Karma Paketler</h2>
            </div>
            <div>
              <select className="bg-bg-body px-4 py-[9px] w-[190px] rounded-xl text-text-one text-[15px] outline-none">
                <option>Fiyat: Artan</option>
                <option>Fiyat: Azalan</option>
                <option>En Yeniler</option>
                <option>Çok Satanlar</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            {children}
          </div>
          <div className="mt-[30px] flex items-center justify-center gap-x-[10px]">
            <div className="bg-white text-text-one text-xl font-extrabold w-[44px] h-[42px] py-[9px] px-[10px] flex items-center justify-center rounded-[9px]"><LeftArrowIcon color="#242424" size="24" /></div>
            <div className="bg-brand text-white text-xl font-extrabold w-[44px] h-[42px] py-[9px] px-[10px] flex items-center justify-center rounded-[9px]">1</div>
            <div className="bg-white text-text-one text-xl font-extrabold w-[44px] h-[42px] py-[9px] px-[10px] flex items-center justify-center rounded-[9px]">2</div>
            <div className="bg-white text-text-one text-xl font-extrabold w-[44px] h-[42px] py-[9px] px-[10px] flex items-center justify-center rounded-[9px]">3</div>
            <div className="bg-white text-text-one text-xl font-extrabold w-[44px] h-[42px] py-[9px] px-[10px] flex items-center justify-center rounded-[9px]">4</div>
            <div className="bg-white text-text-one text-xl font-extrabold w-[44px] h-[42px] py-[9px] px-[10px] flex items-center justify-center rounded-[9px]">5</div>
            <div className="bg-white text-text-one text-xl font-extrabold w-[44px] h-[42px] py-[9px] px-[10px] flex items-center justify-center rounded-[9px]"><RightArrowIcon color="#242424" size="24" /></div>
          </div>
        </div>
      </div>
    </section>
  )
}