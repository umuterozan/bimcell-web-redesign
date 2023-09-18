import Image from "next/image"
import Logo from "../../../public/logo.png"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="py-5">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/"><div><Image src={Logo} alt="Logo" /></div></Link>
        <ul className="flex items-center gap-x-8 font-medium text-text-one">
          <Link href="#"><li className="hover:text-brand transition-all">Neden BİMcell?</li></Link>
          <Link href="#"><li className="hover:text-brand transition-all">Nasıl BİMcell’i Olunur?</li></Link>
          <Link href="/products"><li className="hover:text-brand transition-all">Tarife ve Paketler</li></Link>
          <Link href="#"><li className="hover:text-brand transition-all">Servisler</li></Link>
          <Link href="#"><li className="hover:text-brand transition-all">Sıkça Sorulan Sorular</li></Link>
        </ul>
      </div>
    </nav>
  )
}