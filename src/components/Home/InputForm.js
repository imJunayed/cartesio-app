import { useState } from "react"
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/products/actions";

export default function InputForm() {
    const [formData, setFormData] = useState({})
    const dispatch = useDispatch()

    const handleChange = (event) =>{
        const name = event.target.name
        const value = event.target.value

        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addProduct(formData))
    }

  return (
   
    <div class="formContainer">
      <h4 class="formTitle">Add New Product</h4>
      <form class="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleSubmit}>
        
        <div class="space-y-2">
          <label for="lws-inputName">Product Name</label>
          <input class="addProductInput" id="lws-inputName" type="text" required name="title" onChange={handleChange}/>
        </div>
       
        <div class="space-y-2">
          <label for="lws-inputCategory">Category</label>
          <input class="addProductInput" id="lws-inputCategory" type="text" required name="category" onChange={handleChange}/>
        </div>
        
        <div class="space-y-2">
          <label for="lws-inputImage">Image Url</label>
          <input class="addProductInput" id="lws-inputImage" type="text" required name="img" onChange={handleChange}/>
        </div>
        
        <div class="grid grid-cols-2 gap-8 pb-4">
          
          <div class="space-y-2">
            <label for="ws-inputPrice">Price</label>
            <input class="addProductInput" type="number" id="lws-inputPrice" required name="price" onChange={handleChange} />
          </div>
          
          <div class="space-y-2">
            <label for="lws-inputQuantity">Quantity</label>
            <input class="addProductInput" type="number" id="lws-inputQuantity" required name="quantity" onChange={handleChange} />
          </div>
        </div>
        
        <button type="submit" id="lws-inputSubmit" class="submit">Add Product</button>
      </form>
    </div>

  )
}
