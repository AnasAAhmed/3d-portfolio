import { styles } from "../styles";
import { github, insta, linkedin } from "../assets";
import { logo, menu, close } from "../assets";
const Footer = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center justify-between py-5 z-10 bg-primary   `}
    >
    <div className='flex items-center gap-2'>

    <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Anas .
          </p>
    </div>
    <div className="hidden md:flex text-center">
        Made by Anas | Ahmed
    </div>
    <div className='  flex flex-row  rounded-full'>

<a href="https://github.com/AnasAAhmed" target="main" className='bg-white rounded-lg h-7 w-7'><img src={insta}  alt="insta" /></a>
<a href="https://github.com/AnasAAhmed" target="main" className='bg-white rounded-lg mx-7 h-7 w-7'><img src={linkedin}  alt="linkedin" /></a>
<a href="https://github.com/AnasAAhmed" target="main" className='bg-white rounded-full h-7 w-7'><img src={github}  alt="github" /></a>
</div>
    </nav>
  )
}

export default Footer
