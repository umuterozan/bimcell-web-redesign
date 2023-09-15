import { PhoneIcon } from "../icons";

export default function Header() {
  return (
    <header className="h-14 bg-brand">
      <div className="h-full container mx-auto flex items-center justify-between text-white">
        <div className="flex items-center gap-x-4 text-[15px]">
          <div>Hakkımızda</div>
          <div>Tüketici Şikayetleri</div>
          <div>Duyurular</div>
        </div>
        <div className="flex items-center gap-x-3 font-medium">
          <div><PhoneIcon color="white" /></div>
          <div>Müşteri Hizmetleri 444 4 551</div>
        </div>
      </div>
    </header>
  )
}