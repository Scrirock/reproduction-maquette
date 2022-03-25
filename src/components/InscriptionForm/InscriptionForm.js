import './InscriptionForm.css';
import {useForm} from "react-hook-form";

export function InscriptionForm() {
    const {register, handleSubmit} = useForm();

    function onSubmit(formData) {
        console.log(formData);
    }

    return(
        <div className='inscriptionForm'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='username'>Username: </label>
                    <input defaultValue='Username' {...register('username')} />
                </div>
                <div>
                    <label htmlFor='email'>Email: </label>
                    <input defaultValue='Email' {...register('email')} />
                </div>
                <div>
                    <label htmlFor='password'>Mot de passe: </label>
                    <input defaultValue='Password' {...register('password')} />
                </div>

                <input type="submit" value='Ajouter'/>
            </form>
        </div>
    );
}