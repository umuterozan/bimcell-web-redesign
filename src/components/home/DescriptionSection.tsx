import { SearchIcon } from "../icons";
import Image from "next/image";
import DescImage from "../../../public/description_image.png"

export default function DescriptionSection() {
  return (
    <section className="mt-[73px]">
      <div className="container mx-auto flex items-center justify-center gap-x-7">
        <div className="w-[478px]">
          <h1 className="text-text-one text-2xl font-semibold">Neden BİMcell?</h1>
          <p className="mt-6 text-text-one text-[15px] leading-[21px]">Çünkü iletişim kalitenizden ödün vermeden, bugüne kadar ödediğinizden çok daha uygun fiyata konuşacaksınız! BİMcell Türkiye’de %98’i aşan nüfus kapsama oranı ile kesintisiz iletişim sağlamaktadır. BİMcell her yöne 6 saniyesi 0,16 TL'ye konuşturur. Yükleme yapsanız da yapmasanız da aynı fiyata konuşursunuz. Sadece konuştuğunuz saniye kadar ödersiniz. Yani aç / kapa 0,16 TL'dir! 1 GB Paketi 45 TL, 2 GB Paketi 60 TL, 5 GB Paketi 77 TL ve 10GB Paketi 92 TL’dir. Her yöne 1000 SMS Paketi ise 27 TL’dir. Detaylar için tarife ve paketler kısmını inceleyebilirsiniz.</p>
          <button className="mt-6 w-[186px] h-[50px] flex items-center justify-center gap-x-4 bg-brand border-2 border-brand rounded-lg">
            <div><SearchIcon color="white" size="24" /></div>
            <div className="text-white font-medium">Detaylı Bilgi Alın</div>
          </button>
        </div>
        <div><Image src={DescImage} alt="Description Image" /></div>
      </div>
    </section>
  )
}