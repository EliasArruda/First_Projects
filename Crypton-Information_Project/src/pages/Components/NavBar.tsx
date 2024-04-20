import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa'

const NavBar = () => 
{
    const myFunction = ()=>
    {
        if(typeof window !== 'undefined')
        {
            const listMenu = document.getElementById('listMenu');
            const btnCadastro = document.getElementById('btnCadastro');
            const btnLetsgo = document.getElementById('btnLetsgo');
            listMenu?.classList.toggle('sm:hidden');
            btnCadastro?.classList.toggle('sm:hidden');
            btnLetsgo?.classList.toggle('sm:mb-[8rem]')
        }
    }
    
  return (
    <div>

   <main className='
    sm:block
    sm:relative
    md:flex
    md:justify-between
    md:items-center
    lg:flex
    lg:justify-between
    lg:items-center
    overflow-hidden
    bg-black
    '>
        <Link href={'/'}>
        <img
        className='
        rotate-center
        w-[3rem]
        sm:inline
        cursor-pointer
        ' 
        src="/favicon.svg" 
        alt="Erros Icon" />
        </Link>

        <div
        id='buttonMenu' 
        className="contain md:hidden float-right" 
        onClick={myFunction}>
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        </div>
        
        <nav
        id='listMenu'
        className='
        text-white 
        titleAnimation 
        sm:hidden
        md:block'>
            <ul
            className='
            sm:block
            sm:relative
            sm:text-center
            sm:text-[20pt]
            md:flex
            md:justify-center
            md:gap-3
            sm:left-0
            lg:flex
            lg:items-center
            lg:left-[3.6rem]
            '>
                <li className='sm:p-[1rem]'><Link  href={'/'}>Home</Link></li>
                <li className='sm:p-[1rem]'><a  href={'/Components/Coins'}>Coins</a></li>
            </ul>
        </nav>
        <a href="https://github.com/Sukesp" target={'_blank'}>
        <FaGithub
        id='btnCadastro'
        className='
        sm:hidden
        sm:block
        md:block
        sm:relative
        sm:mx-auto
        md:mx-0
        text-white
        w-[10rem]
        h-[2rem]
        rounded-xl'/>
        </a>
    </main>

    </div>
  )
}

export default NavBar;