import Number from "./Number";

const Calculadora = () => 
{
  return(
    <>
    
    <header
    style=
    {{
        backgroundImage: 'url("fundo.jpg")',
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }}
    className="
    flex
    justify-center
    items-center
    h-screen
    ">

    <main
    className="
    w-[25rem]
    h-[42rem]
    bg-black
    bg-opacity-75
    rounded-3xl
    ">

    <div
    className="
    w-full
    h-[3.5rem]
    bg-black
    bg-opacity-60
    rounded-t-3xl
    text-center
    text-[20pt]
    text-white
    font-black
    ">

    <article
    className="
    relative
    top-[.3rem]
    ">
    
    <span
    className="
    text-lime-300
    ">
    CALC
    </span>
    -
    <span
    className="
    text-teal-400
    ">
    GENIUS
    </span>
    </article>
    </div>

    <Number/>

    </main>
    </header>
    
    </>
  );
};

export default Calculadora;
