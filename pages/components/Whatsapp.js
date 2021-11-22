import Image from 'next/dist/client/image';
import Link from 'next/link'

const Whatsapp = () => {
  return (
    <div className="whatsapp">
    <Link
      href="https://api.whatsapp.com/send?phone=5563991030921&text=Ol%C3%A1%2C%20preciso%20de%20um%20desenvolvedor%20para%20meu%20projeto%2C%20voc%C3%AA%20est%C3%A1%20dispon%C3%ADvel%3F"
      rel="preconnect"
    ><a target="_blank">
        <Image
          src="/Frame.svg"
          alt="Picture of the author"
          width={30}
          height={30}
        />
      </a>
    </Link>
  </div>
  )
}

export default Whatsapp
