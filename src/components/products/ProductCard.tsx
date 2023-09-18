interface IProduct {
  title: string;
  minute: string;
  sms: string;
  internet: string;
  price: string;
}

export default function ProductCard(props: IProduct) {
  return (
    <div className="product-card">
      <h2 className="text-text-one text-xl font-extrabold"><span className="text-brand">{props.title}</span> Paketi</h2>
      <div className="mt-[30px] grid gap-y-[9px]">
        <div className="text-text-one text-[15px]">HER YÖNE</div>
        <div className="text-text-one text-xl font-extrabold">{props.minute} DK</div>
        <div className="text-text-one text-xl font-extrabold">{props.sms} SMS</div>
        <div className="text-text-one text-xl font-extrabold"><span className="text-brand">{props.internet}</span> İNTERNET</div>
      </div>
      <button className="mt-[30px] bg-brand text-white rounded-[10px] text-2xl font-extrabold py-[3px] px-4">{props.price} ₺</button>
      <div className="mt-[22px] text-text-one text-xs">{props.title.toUpperCase()} yaz 4551'e Gönder!</div>
    </div>
  )
}