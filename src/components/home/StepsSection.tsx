import { RightArrowIcon } from "../icons";

export default function StepsSection() {
  return (
    <section className="mt-[70px]">
      <div className="container mx-auto">
        <h1 className="text-text-one font-semibold text-2xl text-center">
          Nasıl BİMcell'li Olunur?
        </h1>
        <div className="py-12 flex justify-center gap-x-3 relative">
          <div className="w-[326px] h-[250px] p-6 bg-white rounded-3xl flex flex-col items-center">
            <div className="bg-brand w-[60px] h-[60px] flex items-center justify-center text-white text-3xl font-semibold rounded-full px-5 py-[11px]">
              1
            </div>
            <div className="mt-12 text-text-one text-lg font-medium text-center">
              Size en yakın BİM şubesine nüfus cüzdanınız ile birlikte gidin.
            </div>
          </div>
          <div className="w-[326px] h-[250px] p-6 bg-white rounded-3xl flex flex-col items-center">
            <div className="bg-brand w-[60px] h-[60px] flex items-center justify-center text-white text-3xl font-semibold rounded-full px-5 py-[11px]">
              2
            </div>
            <div className="mt-12 text-text-one text-lg font-medium text-center">
              Kasada bulunan bimcell sim kartlarından birini satın alıp
              aboneliğinizi aktif edin.
            </div>
          </div>
          <div className="w-[326px] h-[250px] p-6 bg-white rounded-3xl flex flex-col items-center">
            <div className="bg-brand w-[60px] h-[60px] flex items-center justify-center text-white text-3xl font-semibold rounded-full px-5 py-[11px]">
              3
            </div>
            <div className="mt-12 text-text-one text-lg font-medium text-center">
              Sevdiklerinizle sınırsız bir şekilde doyasıya konuşun.
            </div>
          </div>
          <div className="absolute left-[350px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="295"
              height="46"
              viewBox="0 0 295 46"
              fill="none"
            >
              <path
                d="M1.5 44C60.3333 12.6667 201 -31.2 293 44"
                stroke="#FF290B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
            </svg>
          </div>
          <div className="absolute right-[355px] top-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="294"
              height="60"
              viewBox="0 0 294 60"
              fill="none"
            >
              <path
                d="M292.255 32.7973C230.441 57.7395 85.927 86.499 2.38685 2.00002"
                stroke="#FF290B"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="6 6"
              />
            </svg>
          </div>
        </div>
        <button className="flex items-center justify-center gap-x-4 w-[212px] h-[50px] text-text-one font-medium border-2 border-brand rounded-lg bg-white mx-auto">
          <div>Tarifeler ve Paketler</div>
          <div>
            <RightArrowIcon color="#242424" size="24" />
          </div>
        </button>
      </div>
    </section>
  );
}
