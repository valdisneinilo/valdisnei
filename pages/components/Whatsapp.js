import Image from "next/dist/client/image";
import Link from "next/link";

const Whatsapp = () => {
  return (
    <>
      <div className="whatsapp box">
        <Link
          href="https://api.whatsapp.com/send?phone=5563991030921&text=Ol%C3%A1%2C%20preciso%20de%20um%20desenvolvedor%20para%20meu%20projeto%2C%20voc%C3%AA%20est%C3%A1%20dispon%C3%ADvel%3F"
          rel="noreferrer"
        >
          <a target="_blank"
          rel="noreferrer"
          >
            <Image
              src="/Vector.png"
              alt="Whatsapp Valdisnei Nilo"
              width={20}
              height={20}
            />
          </a>
        </Link>
      </div>
      <div className="WhatsCaixa"/>

    </>
  );
};

export default Whatsapp;
