import React, {  useState } from "react";
import { str } from "../Types/globalTypes";

const Number: React.FC = () => 
{
    
    const [calculadoraValue, setCalculadoraValue] = useState('');

    const handleButtonClick = (value: str)=>
    {
        setCalculadoraValue(calculadoraValue + value);
    }


    const handleCalculator = ()=>
    {
        try 
        {
            const result = eval(calculadoraValue);
            setCalculadoraValue(result);    
        } 
        catch (error) 
        {
            setCalculadoraValue('ERRO');
        }
    }

    const handleClear = ()=>
    {
        setCalculadoraValue('');
    }
    

  return(
    <>
    
    <header
    className="
    text-black
    font-black
    text-[25pt]
    ">

    <form
    className="
    w-full
    h-auto
    overflow-hidden
    ">

    <input 
    value={calculadoraValue}
    type="text"
    disabled 
    placeholder={''}
    className="
    bg-gray-300
    w-full
    h-[8rem]
    text-6xl
    text-end
    "/>
    </form>

    <main
    className="
    grid
    grid-cols-4
    gap-2
    mt-[.6rem]
    ">
    
    <button
    onClick={()=>handleButtonClick('7')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    7
    </button>


    <button
    onClick={()=>handleButtonClick('8')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    8
    </button>

    <button
    onClick={()=>handleButtonClick('9')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    9
    </button>

    <button
    onClick={()=>handleButtonClick('%')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    %
    </button>

    <button
    onClick={()=>handleButtonClick('4')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    4
    </button>

    <button
    onClick={()=>handleButtonClick('5')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    5
    </button>

    <button
    onClick={()=>handleButtonClick('6')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    6
    </button>

    <button
    onClick={()=>handleButtonClick('+')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    +
    </button>

    <button
    onClick={()=>handleButtonClick('1')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    1
    </button>

    <button
    onClick={()=>handleButtonClick('2')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    2
    </button>

    <button
    onClick={()=>handleButtonClick('3')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    3
    </button>

    <button
    onClick={()=>handleButtonClick('-')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    -
    </button>
    
    <button
    onClick={()=>handleButtonClick('.')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    .
    </button>

    <button
    onClick={()=>handleButtonClick('0')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    0
    </button>

    <button
    onClick={()=>handleButtonClick('/')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    \
    </button>

    <button
    onClick={()=>handleButtonClick('*')}
    className="
    cursor-pointer
    w-[5rem]
    h-[5rem]
    relative
    bg-white
    rounded-lg
    mx-auto
    mt-2
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    x
    </button>
    </main>

    <div
    className="
    grid
    grid-cols-2
    gap-2
    ">

    <button
    onClick={handleClear}
    className="
    cursor-pointer
    w-[11rem]
    h-[5rem]
    relative
    bg-slate-800
    text-white
    rounded-lg
    mx-auto
    mt-4
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    RESET
    </button>

    <button
    onClick={handleCalculator}
    className="
    cursor-pointer
    w-[11rem]
    h-[5rem]
    relative
    bg-blue-500
    text-white
    rounded-lg
    mx-auto
    mt-4
    ease-in-out
    transition-all
    hover:opacity-75
    ">
    =
    </button>
    </div>
    </header>
    
    </>
  );
};

export default Number;
