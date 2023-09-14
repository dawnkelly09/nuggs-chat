// Desc: Header component
import Image from "next/image"
import Nuggs from "../../public/Nuggs.png"

const Header = () => {
  return (
    <div class="header">
        <Image src={Nuggs} width={100} height={100} alt="Nuggs" />
        <h2>Ask Nuggs!</h2>
    </div>

  )
}

export default Header