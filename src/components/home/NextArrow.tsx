'use client'

import { RightArrowIcon } from "../icons";

export default function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", alignItems: 'center', justifyContent: 'center', background: "#FF290B", width: '50px', height: '50px', borderRadius: '9999px', translate: '-50%' }}
      onClick={onClick}
    >
      <RightArrowIcon color="white" />
    </div>
  );
}