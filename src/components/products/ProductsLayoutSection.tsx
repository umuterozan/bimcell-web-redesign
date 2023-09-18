'use client'

import { LeftArrowIcon, RightArrowIcon } from "../icons"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useState } from "react"

const mockData = [
  {
    id: 1,
    title: "Popüler Paketler",
    pathname: "/products",
  },
  {
    id: 2,
    title: "SMS Paketleri",
    pathname: "/products/sms-paketleri",
  },
  {
    id: 3,
    title: "Kampanyalar",
    pathname: "/products/kampanyalar",
  },
  {
    id: 4,
    title: "İnternet Paketleri",
    pathname: "/products/internet-paketleri",
  },
  {
    id: 5,
    title: "Dost Konuşan Paketi",
    pathname: "/products/dost-konusan-paketi",
  },
  {
    id: 6,
    title: "Karma Paketler",
    pathname: "/products/karma-paketler",
  },
  {
    id: 7,
    title: "Gençlere Özel Paketler",
    pathname: "/products/genclere-ozel-paketler",
  },
  {
    id: 8,
    title: "BTK Kampanyası",
    pathname: "/products/btk-kampanyasi",
  },
  {
    id: 9,
    title: "Konuşma Paketleri",
    pathname: "/products/konusma-paketleri",
  },
  {
    id: 10,
    title: "Uygulamaya Özel Paketler",
    pathname: "/products/uygulamaya-ozel-paketler",
  },
  {
    id: 11,
    title: "Sil Süpür Kampanyası",
    pathname: "/products/sil-supur-kampanyasi",
  },
]

export default function ProductsLayoutSection({ children }: { children: React.ReactNode }) {

  const pathname = usePathname()
  const currentPage = mockData.find((data) => pathname === data.pathname)

  return (
    <section className="mt-[70px] mb-[170px]">
      <div className="container mx-auto flex gap-x-5">
        <div>
          {mockData.map((data) => (
            <Link href={data.pathname}>
              <div key={data.id} className={`${pathname === data.pathname ? 'bg-brand border-2 text-white' : 'bg-white shadow-[0_2px_10px_-5px_rgba(0,0,0,0.25)] text-text-one hover:bg-brand hover:text-white hover:shadow-none'} transition-all rounded-lg px-[15px] w-[234px] h-[50px] flex items-center justify-between mb-[10px]`}>
                <div className="text-[15px]">{data.title}</div>
                <div><RightArrowIcon color={pathname === data.pathname ? 'white' : '#242424'} size="24" /></div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between h-[65px] px-5 bg-white rounded-xl">
            <div>
              <h2 className="text-2xl font-semibold">{currentPage?.title}</h2>
            </div>
            <div>
              <select className="bg-bg-body px-4 py-[9px] w-[190px] rounded-xl text-text-one text-[15px] outline-none">
                <option value="" selected disabled hidden>Sırala</option>
                <option value="up">Fiyat: Artan</option>
                <option value="down">Fiyat: Azalan</option>
              </select>
            </div>
          </div>
          <div className="mt-5">
            {children}
          </div>
          <div className="mt-[30px] flex items-center justify-center gap-x-[10px]">
            <button className="bg-white text-text-one text-xl font-extrabold w-[44px] h-[42px] py-[9px] px-[10px] flex items-center justify-center rounded-[9px]"><LeftArrowIcon color="#242424" size="24" /></button>
            {[...Array(5).keys()].map((i) => (
              <button className={`${i + 1 === 1 ? 'bg-brand text-white' : 'bg-white text-text-one hover:bg-brand hover:text-white'} transition-all text-xl font-extrabold w-[44px] h-[42px] py-[9px] px-[10px] flex items-center justify-center rounded-[9px]`}>{i + 1}</button>
            ))}
            <button className="bg-white text-text-one text-xl font-extrabold w-[44px] h-[42px] py-[9px] px-[10px] flex items-center justify-center rounded-[9px]"><RightArrowIcon color="#242424" size="24" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}