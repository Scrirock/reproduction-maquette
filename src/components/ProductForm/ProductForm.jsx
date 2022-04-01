import "./ProductForm.css";
import { useForm } from "react-hook-form";

export function ProductForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(formData) {
    console.log(formData);
  }

  return (
    <div className="addProductForm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Nom: </label>
          <input defaultValue="Name" {...register("name")} />
        </div>
        <div>
          <label htmlFor="stock">Stock: </label>
          <input defaultValue="Stock" {...register("stock")} />
        </div>
        <div>
          <label htmlFor="price">Prix: </label>
          <input defaultValue="Price" {...register("price")} />
        </div>
        <div>
          <label htmlFor="category">Categorie: </label>
          <input defaultValue="Category" {...register("category")} />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input defaultValue="Description" {...register("description")} />
        </div>
        <div>
          <label htmlFor="image">Image: </label>
          <input defaultValue="Image" {...register("image")} />
        </div>

        <input type="submit" value="Ajouter" />
      </form>
    </div>
  );
}
