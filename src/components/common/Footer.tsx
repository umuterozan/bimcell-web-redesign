import Image from "next/image"
import BottomLogo from "../../../public/bottom_logo.png"

export default function Footer() {
  return (
    <footer className="mt-[70px] bg-text-one border-t-[7px] border-brand py-10">
      <div className="container mx-auto">
        <div><Image className="mx-auto" src={BottomLogo} alt="Bottom Logo" /></div>
        <p className="mt-[30px] w-[429px] mx-auto text-text-two text-center text-[15px]">©2011-2022 | Bu hizmet TT Mobil İletişim Hizmetleri A.Ş. tarafından sunulmakta olup, tüketici memnuniyetine ilişkin her türlü husustan TT Mobil İletişim Hizmetleri A.Ş. sorumludur.</p>
        <ul className="mt-[50px] text-white flex items-center justify-center gap-x-5 text-[15px]">
          <li>Hakkımızda</li>
          <li>Gizlilik ve Güvenlik</li>
          <li>Tüketici Şikayetleri</li>
          <li>Tüketici Bilgilendirme Rehberi</li>
          <li>Duyurular</li>
        </ul>
      </div>
    </footer>
  )
}