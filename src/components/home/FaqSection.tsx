'use client'

import { DownArrowIcon } from "../icons";
import { useState } from "react";

interface IFaq {
  id: number;
  question: string;
  answer: string;
  isOpen: boolean;
}

const mockData: IFaq[] = [
  {
    id: 1,
    question: 'Simkart değişiklik ücreti ne kadardır?',
    answer: 'Cevabı burada...',
    isOpen: false,
  },
  {
    id: 2,
    question: 'BİMcell’e abone olmak için hangi evraklar gereklidir?',
    answer: 'Cevabı burada...',
    isOpen: false,
  },
  {
    id: 3,
    question: 'Hattıma nasıl TL yükleyebilirim?',
    answer: 'Cevabı burada...',
    isOpen: false,
  },
  {
    id: 4,
    question: 'Faturasız hatlardan alınan Telsiz Kullanım Ücreti nedir?',
    answer: 'Cevabı burada...',
    isOpen: false,
  },
  {
    id: 5,
    question: 'Hattımda ne kadar TL kaldığını nasıl öğrenebilirim?',
    answer: 'Cevabı burada...',
    isOpen: false,
  },
  {
    id: 6,
    question: 'Hattımın numarasını nasıl değiştirebilirim?',
    answer: 'Cevabı burada...',
    isOpen: false,
  },
  {
    id: 7,
    question: 'BİMcell müşteri hizmetlerini aradığımda nasıl ücretlendirilir?',
    answer: 'Cevabı burada...',
    isOpen: false,
  },
  {
    id: 8,
    question: 'Hattımı nasıl iptal ettirebilirim?',
    answer: 'Cevabı burada...',
    isOpen: false,
  },
]

export default function FaqSection() {
  const [data, setData] = useState<IFaq[]>(mockData)

  const openAnswer = (id: number) => {
    const newData = [...data];
    const foundIndex = newData.findIndex((faq) => faq.id === id);
    if (newData[foundIndex].isOpen) {
      newData[foundIndex].isOpen = false
    } else {
      newData[foundIndex].isOpen = true
    }
    setData(newData)
  }

  return (
    <section className="mt-[70px]">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-center">Sıkça Sorulan Sorular</h1>
        <div className="mt-[30px] grid grid-cols-2 gap-x-[10px] gap-y-[15px]">
          {data.map((faq) => (
            <div key={faq.id}>
              <button onClick={() => openAnswer(faq.id)} className={`${faq.isOpen ? 'bg-brand' : 'bg-white'} w-full flex items-center justify-between px-5 h-[60px] rounded-2xl`}>
                <div className={`${faq.isOpen ? 'text-white' : 'text-text-one'} text-[15px]`}>Simkart değişiklik ücreti ne kadardır?</div>
                <div className={`${faq.isOpen ? 'rotate-180' : ''} transition-all`}><DownArrowIcon color={faq.isOpen ? 'white' : '#242424'} size="25" /></div>
              </button>
              <div className={`${faq.isOpen ? 'max-h-[300px] p-5' : 'max-h-0 p-0'} mt-[5px] overflow-hidden transition-[max-height] bg-white rounded-2xl shadow-[0_2px_10px_-5px_rgba(0,0,0,0.25)] text-text-one text-xs`}>
                Kimlik fotokopiniz ile en yakın BİM mağazasına uğrayınız, ilgili formları doldurup simkartınızı alınız. BİMcell Bireysel Abonelik Sözleşmesi için tıklayınız.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}