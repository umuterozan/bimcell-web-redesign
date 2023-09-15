import { DownArrowIcon } from "../icons";

export default function FaqSection() {
  return (
    <section className="mt-[70px]">
      <div className="container mx-auto">
        <h1 className="text-2xl font-semibold text-center">Sıkça Sorulan Sorular</h1>
        <div className="mt-[30px] grid grid-cols-2 gap-x-[10px] gap-y-[15px]">
          {[...Array(8).keys()].map(() => (
            <button className="flex items-center justify-between px-5 h-[60px] bg-white rounded-2xl">
              <div className="text-text-one text-[15px]">Simkart değişiklik ücreti ne kadardır?</div>
              <div><DownArrowIcon color="#242424" size="25" /></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}