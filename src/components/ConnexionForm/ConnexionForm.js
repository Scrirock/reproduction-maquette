import './ConnexionForm.css';
import {useForm} from "react-hook-form";

export function ConnexionForm() {
    const {register, handleSubmit} = useForm();

    function onSubmit(formData) {
        console.log(formData);
    }

    return(
        <div className='ConnexionForm'>
            <form onSubmit={handleSubmit(onSubmit)}>
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