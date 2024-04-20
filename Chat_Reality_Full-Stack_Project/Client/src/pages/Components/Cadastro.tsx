import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Cadastro = () => 
{

  const [cadastro,setCadastro] = useState
  (
    {
      Usuario: '' ,
      Email: '',
      Senha: '',
      requestInfo: 'ok'
    }
  )

  const [login, setLogin] = useState
  (
    {
      Email: '',
      Senha: ''
    }
  )

  const handleLogin = async ()=>
  {
    if(typeof window !== 'undefined')
    {
      const formCadastro = document.getElementById('Cadastro');
      const formLogin = document.getElementById('form--login');
      const inpClear = document.getElementsByClassName('inpClear');

      await formCadastro?.classList.add('hidden');
      formLogin?.classList.remove('hidden')
    }
  }

  const handleCadastro = async ()=>
  {
    if(typeof window !== 'undefined')
    {
      const formCadastro = document.getElementById('Cadastro');
      const formLogin = document.getElementById('form--login');

      await formLogin?.classList.add('hidden');
      formCadastro?.classList.remove('hidden');
    }
  }

  let regxValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let funValidation = cadastro.Email.match(regxValidation);

  const handleSendInfo = ()=>
  {
    try 
    {
      if(funValidation && cadastro.Senha.length > 4 && cadastro.Usuario.trim())
      {
        axios.post('http://localhost:3000/api/Send_info',
        {
          requestInfo: 'ok',
          User:`${cadastro.Usuario}`,
          email:`${cadastro.Email}`,
          senha:`${cadastro.Senha}`,
        })
        .then(()=>
        {
          Swal.fire({
            title: 'Sucess!',
            text: 'CADASTRO EFETUADO COM SUCESSO',
            icon: 'success',
            confirmButtonText: `Continuar`,
            confirmButtonAriaLabel: `${handleLogin()}`,
          })
        })
      }

      else if(!funValidation)
      {
        Swal.fire({
          title: 'Error!',
          text: 'Insira um email valido para continuar',
          icon: 'error',
          confirmButtonText: 'Okey'
        })
      }

      else if(cadastro.Senha.length < 5)
      {
        Swal.fire({
          title: 'Senha error!',
          icon: 'warning',
          html:
            'Insira uma senha maior que 5 caracteres',
          focusConfirm: false,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: 'Okey',
        })
      }

      else
      {
        Swal.fire({
          title: 'Error!',
          text: 'Preencha o Nome de Usuario',
          icon: 'error',
          confirmButtonText: 'Okey'
        })
      }
    } 
    catch (error) 
    {
      console.log(error)
    }
  }

  const handleReqLogin = ()=>
  {
    try 
    {
      fetch('http://localhost:3000/api/Request_info',
      {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({email: `${login.Email}` , senha: `${login.Senha}`})
      })
      .then(()=>window.location.href = 'http://localhost:3000/api/Request_info')
    } 
    catch (error) 
    {
      console.log(error)
    }

    // Caso Houver algum tipo de erro
    setTimeout(()=>
    {
      
      Swal.fire({
        title: 'Error!',
        text: 'EMAIL OU SENHA INCORRETOS',
        icon: 'error',
        confirmButtonText: 'Okey'
      })

    },2000)
  }

  return (
    <>

    <main
    className='
    sm:w-[23rem]
    sm:h-[40rem]
    sm:top-[3rem]
    relative
    block
    mx-auto
    transition-all
    ease-in-out
    text-center
    md:top-[2.3rem]
    md:w-[40rem]
    md:h-[42rem]
    rounded-3xl
    bg-black
    bg-opacity-70
    '>

    {/* Cadastro */}
    
    <div
    className='' 
    id="Cadastro">

    <form
    onSubmit=
    {(e)=>
      {
        e.preventDefault();
      }
    } 
    ></form>
    
    <h1
    className='
    sm:text-[2rem]
    FormAnimation
    relative
    block
    transition-all
    ease-in-out
    mb-[4rem]
    top-[1rem]
    text-white
    text-center
    lg:text-[30pt]
    '>
      Cadastro
    </h1>

    <input
    value={cadastro.Usuario}
    onChange={(e)=>setCadastro({...cadastro , Usuario: e.target.value})}
    placeholder='Nome'
    required
    type="text" 
    className='
    overflow-scroll
    sm:w-[19rem]
    relative
    block
    mx-auto
    transition-all
    ease-in-out
    md:w-[25rem]
    md:h-[3rem]
    text-white
    text-center
    bg-transparent
    outline-none
    mb-[3rem]
    border-b
    '
    />

    <input
    value={cadastro.Email}
    onChange={(e)=>setCadastro({...cadastro , Email: e.target.value})}
    placeholder='Email' 
    type="email" 
    className='
    sm:w-[19rem]
    relative
    block
    mx-auto
    transition-all
    ease-in-out
    md:w-[25rem]
    md:h-[3rem]
    text-white
    text-center
    bg-transparent
    outline-none
    mb-[3rem]
    border-b
    '
    />

    <input
    value={cadastro.Senha}
    onChange={(e)=>setCadastro({...cadastro , Senha: e.target.value})}
    placeholder='Senha'
    required
    type="password" 
    className='
    sm:w-[19rem]
    relative
    block
    mx-auto
    transition-all
    ease-in-out
    md:w-[25rem]
    md:h-[3rem]
    text-white
    text-center
    bg-transparent
    outline-none
    mb-[3rem]
    border-b
    '
    />


    <button
    onClick={handleSendInfo}
    type="button"
    className='
    btnConfirm
    rounded-lg
    hover:translate-y-[-.3vw]
    text-center
    text-white
    transition-all
    ease-in-out
    w-[20rem]
    h-[3rem]
    border
    mb-[2rem]
    ' 
    >Confirmar</button>
    
    <h2
    className='
    text-white
    border-b
    text-center
    mx-auto
    w-[20rem]
    mb-[2rem]
    '>OR</h2>

    <button
    onClick={handleLogin}
    id='BTN--Login'
    className='
    btnConfirm
    hover:translate-y-[-.3vw]
    transition-all
    ease-in-out
    text-white
    w-[20rem]
    h-[3rem]
    border
    '>Login</button>
    </div>
    {/* END Cadastro */}
    




    {/* Login */}
    <div
    id='form--login'
    className='hidden'>
    
    <h1
    className='
    sm:text-[2rem]
    FormAnimation
    relative
    block
    transition-all
    ease-in-out
    mb-[4rem]
    top-[1rem]
    text-white
    text-center
    lg:text-[30pt]
    '>
      Login
    </h1>

    <input
    value={login.Email}
    onChange={(e)=>setLogin({...login , Email: e.target.value})}
    placeholder='EMAIL' 
    type="email" 
    className='
    sm:w-[19rem]
    relative
    block
    mx-auto
    transition-all
    ease-in-out
    md:w-[25rem]
    md:h-[3rem]
    text-white
    text-center
    bg-transparent
    outline-none
    mb-[3rem]
    border-b
    '
    />

    <input
    value={login.Senha}
    onChange={(e)=>setLogin({...login , Senha: e.target.value})}
    placeholder='SENHA' 
    type="password" 
    className='
    sm:w-[19rem]
    relative
    block
    mx-auto
    transition-all
    ease-in-out
    md:w-[25rem]
    md:h-[3rem]
    text-white
    text-center
    bg-transparent
    outline-none
    mb-[3rem]
    border-b
    '
    />

    <button
    onClick={handleReqLogin}
    type="button"
    className='
    btnConfirm
    overflow-hidden
    rounded-lg
    hover:translate-y-[-.3vw]
    text-center
    text-white
    transition-all
    ease-in-out
    w-[20rem]
    h-[3rem]
    border
    mb-[2rem]
    ' 
    >Confirmar</button>

    <h2
    className='
    text-white
    border-b
    text-center
    mx-auto
    w-[20rem]
    mb-[2rem]
    '>OR</h2>

    <button
    onClick={handleCadastro}
    className='
    btnConfirm
    hover:translate-y-[-.3vw]
    transition-all
    ease-in-out
    text-white
    w-[20rem]
    h-[3rem]
    border
    '>Cadastrar</button>
    </div>

    </main>
    </>
  )
}

export default Cadastro;