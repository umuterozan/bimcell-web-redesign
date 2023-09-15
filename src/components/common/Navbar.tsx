import Image from "next/image"
import Logo from "../../../public/logo.png"

export default function Navbar() {
  return (
    <nav className="py-5">
      <div className="container mx-auto flex items-center justify-between">
        <div><Image src={Logo} alt="Logo" /></div>
        <ul className="flex items-center gap-x-8 font-medium">
          <li>Neden BİMcell?</li>
          <li>Nasıl BİMcell’i Olunur?</li>
          <li>Tarife ve Paketler</li>
          <li>Servisler</li>
          <li>Sıkça Sorulan Sorular</li>
        </ul>
      </div>
    </nav>
  )
}