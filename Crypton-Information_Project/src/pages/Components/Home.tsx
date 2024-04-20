import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Home = () => 
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
    <>

    <header
    id='topNavBar'
    className='
    area-1
    w-full
    h-[50rem]
    md:h-[58rem]
    lg:h-[60rem]
    overflow-hidden
    '>

    <main className='
    sm:block
    sm:relative
    md:flex
    md:justify-between
    md:items-center
    lg:flex
    lg:justify-between
    lg:items-center
    mb-[2rem]
    overflow-hidden
    '>
        <Link href={'/'}>
        <img
        className='
        rotate-center
        w-[3rem]
        sm:inline
        cursor-pointer
        ' 
        src="favicon.svg" 
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
        rounded-xl'/>
        </a>
    </main>

    <article
    className='
    w-full
    h-full
    text-white
    text-center
    '>
    
    <h1
    className='
    titleAnimation
    sm:block
    relative
    sm:text-[21pt]
    sm:font-semibold
    md:text-[40pt]
    lg:text-[46pt]
    mb-[.4rem]
    md:mt-[12rem]
    tracking-wider
    overflow-hidden
    uppercase
    '>Crypton-information</h1>

    <h2
    className='
    titleAnimation
    block
    relative
    sm:mb-[1.5rem]
    md:text-[16pt]
    lg:text-[17pt]
    uppercase
    '>
        Visualizando o valor das minhas criptomoedas 
        <br className='
        block
        sm:hidden
        '/> de uma forma simples e facil
    </h2>

    <a href={'/Components/Coins'}>
    <button
    id='btnLetsgo'
    className='
    buttonAnimation
    block
    relative
    mx-auto
    w-[21rem]
    h-[3rem]
    text-black
    bg-cyan-300
    rounded-2xl
    sm:mb-[23.2rem]
    md:mb-[21rem]
    uppercase
    '>Let's go</button>
    </a>

    <img
    className='
    w-[10rem]
    absolute
    AnimationIcon
    ' 
    src="rotate_icon.png" 
    alt="" />

    <img
    className='
    w-[10rem]
    absolute
    right-0
    AnimationIcon
    ' 
    src="rotate_icon.png" 
    alt="" />
    </article>
    </header>

    </>
  )
}

export default Home;