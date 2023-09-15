import { RightArrowIcon } from "../icons";

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
          {[...Array(4).keys()].map(() => (
            <div className="product-card">
              <h2 className="text-text-one text-xl font-extrabold"><span className="text-brand">Dost Küçük</span> Paketi</h2>
              <div className="mt-[30px] grid gap-y-[9px]">
                <div className="text-text-one text-[15px]">HER YÖNE</div>
                <div className="text-text-one text-xl font-extrabold">750 DK</div>
                <div className="text-text-one text-xl font-extrabold">250 SMS</div>
                <div className="text-text-one text-xl font-extrabold"><span className="text-brand">3 GB</span> İNTERNET</div>
              </div>
              <button className="mt-[30px] bg-brand text-white rounded-[10px] text-2xl font-extrabold py-[3px] px-4">102 ₺</button>
              <div className="mt-[22px] text-text-one text-xs">DOST KUCUK yaz 4551'e Gönder!</div>
            </div>
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