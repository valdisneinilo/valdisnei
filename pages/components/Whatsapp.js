import Image from 'next/dist/client/image';

const Whatsapp = () => {
  return (
    <div className="whatsapp">
    <a
      href="https://api.whatsapp.com/send?phone=5563991030921&text=Ol%C3%A1%2C%20preciso%20de%20um%20desenvolvedor%20para%20meu%20projeto%2C%20voc%C3%AA%20est%C3%A1%20dispon%C3%ADvel%3F"
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="/Frame.svg"
        alt="Picture of the author"
        width={30}
        height={30}
      />
    </a>
  </div>
  )
}

export default Whatsapp
