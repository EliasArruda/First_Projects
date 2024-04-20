import { FaStar } from  'react-icons/fa';
import { FcFlashOn } from 'react-icons/fc';
import { AiFillHeart } from 'react-icons/ai';

export const Content = () => 
{
  return (
    <>

    <header
    className='
    area-2
    w-full
    h-full
    '>

    <main
    className='
    relative
    w-full
    h-full
    mx-auto
    sm:grid
    sm:grid-rows-3
    md:grid-cols-3
    md:grid-rows-none
    md:gap-[1rem]
    bg-[#121212]
    text-white
    '>

    {/* Facilidade Card */}

    <div
    className='
    sm:block
    sm:relative
    sm:mx-auto
    '>
    
    <article
    className='
    sm:w-[21rem]
    md:w-[15rem]
    lg:w-[22rem]
    sm:block
    sm:mt-[.3rem]
    sm:rounded-2xl
    sm:mb-[.2rem]
    '>
    <FaStar
    className='
    text-yellow-400
    sm:relative
    sm:block
    sm:mx-auto
    sm:border-b-2
    sm:sm:mb-[1rem]
    sm:top-[.3rem]
    sm:text-[28pt]
    '/>

    <h1
    className='
    sm:text-center
    sm:text-[20pt]
    sm:mb-[.3rem]
    '>
    FACILIDADE
    </h1>

    <p
    className='text-center'>
    Temos como objetivo, ser uma aplicação
    <strong> 100%</strong> <br /> fácil e simples de ser utilizado
    </p>
    </article>
    </div>

    {/* Agilidade */}
    
    
    <div
    className='
    sm:block
    sm:relative
    sm:mx-auto
    '>
    
    <article
    className='
    sm:w-[21rem]
    md:w-[15rem]
    lg:w-[22rem]
    sm:block
    sm:mt-[.5rem]
    sm:rounded-2xl
    sm:mb-[.2rem]
    '>
    <FcFlashOn
    className='
    sm:relative
    sm:block
    sm:mx-auto
    sm:border-b-2
    sm:sm:mb-[1rem]
    sm:top-[.3rem]
    sm:text-[28pt]
    '/>

    <h1
    className='
    sm:text-center
    sm:text-[20pt]
    sm:mb-[.3rem]
    '>
    AGILIDADE
    </h1>

    <p
    className='text-center'>
    Iremos te mostrar uma grande variedade de criptomoedas , e seu respectivo valor
    </p>
    </article>
    </div>

    {/* SEGURANÇA */}

    <div
    className='
    sm:block
    sm:relative
    sm:mx-auto
    '>
    
    <article
    className='
    sm:w-[21rem]
    md:w-[15rem]
    lg:w-[22rem]
    sm:block
    sm:mt-[.5rem]
    sm:rounded-2xl
    sm:mb-[.2rem]
    '>
    <AiFillHeart
    className='
    text-red-500
    sm:relative
    sm:block
    sm:mx-auto
    sm:border-b-2
    sm:sm:mb-[1rem]
    sm:top-[.3rem]
    sm:text-[28pt]
    '/>

    <h1
    className='
    sm:text-center
    sm:text-[20pt]
    sm:mb-[.3rem]
    '>
    SEGURANÇA
    </h1>

    <p
    className='text-center'>
    Todas as informações passadas aqui, são <strong>100% </strong>
    seguras é pode ser ultilizada para estudos
    </p>
    </article>
    </div>

   

    </main>
    </header>

    </>
  )
}
