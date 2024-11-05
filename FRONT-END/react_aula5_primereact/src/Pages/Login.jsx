import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

export const Login = () => {

    const [mostrarSenha, setMostrarSenha] = useState(false)

    const {register, handleSubmit} = useForm();

    const { setLogado } = useContext(Context);
    const navigate = useNavigate();

    function logar(dados){
        if(dados.email == "vitormelofreitas01@gmail.com" && dados.senha == "123456"){
            setLogado(true);
            navigate('/home');
        }
    }

    return (
        <div className='bg-primary-500 h-screen flex align-items-center justify-content-center px-3'>
            <form onSubmit={handleSubmit(logar)} className='col-12 md:col-5 surface-0 p-4 border-round-md shadow-2'>
                <h3 className='text-center text-4xl mb-4'>Seja Bem-Vindo!</h3>
                <div className='field'>
                    <label htmlFor="email" className='block uppercase font-bold text-sm mb-2'>Email</label>
                    <InputText 
                        id='email'
                        type='email'
                        placeholder='email@email.com'
                        className='w-full mb-3'
                        {...register('email', {required: true})}
                    />
                </div>
                <div className='field'>
                    <label htmlFor="senha" className='block uppercase font-bold text-sm mb-2'>Senha</label>
                    <div className='p-inputgroup'>
                        <InputText 
                            id='senha'
                            type={mostrarSenha ? 'text' : 'password'}
                            placeholder='*********'
                            className='w-full'
                            {...register('senha', {required: true})}
                        />
                        <span className="p-inputgroup-addon cursor-pointer" onClick={
                            () => setMostrarSenha(!mostrarSenha)
                        } >
                            <i className="pi pi-eye"></i>
                        </span>
                    </div>
                </div>
                <Button 
                    label="Entrar" 
                    type='submit'
                    className='w-full mt-4'   
                />
            </form>
        </div>
    );
}

export default Login;


