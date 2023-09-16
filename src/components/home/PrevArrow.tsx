'use client'

import { LeftArrowIcon } from "../icons";

export default function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', background: "#FF290B", width: '50px', height: '50px', borderRadius: '9999px', zIndex: '1', translate: '50%' }}
      onClick={onClick}
    >
      <LeftArrowIcon color="white" />
    </div>
  );
}