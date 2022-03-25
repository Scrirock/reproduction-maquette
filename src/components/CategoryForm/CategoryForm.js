import './CategoryForm.css';
import {useForm} from "react-hook-form";

export function CategoryForm() {
    const {register, handleSubmit} = useForm();

    function onSubmit(formData) {
        console.log(formData);
    }

    return(
        <div className='CategoryForm'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor='name'>Nom: </label>
                    <input defaultValue='Name' {...register('name')} />
                </div>

                <input type="submit" value='Ajouter'/>
            </form>
        </div>
    );
}