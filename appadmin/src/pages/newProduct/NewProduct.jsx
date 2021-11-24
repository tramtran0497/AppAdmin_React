import React from 'react'
import './newProduct.css'
import {Publish} from "@material-ui/icons"
function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="newProductTitle">New Product</h1>
            <form action="" className="">
                <div className="productFormLeft">
                    <label htmlFor="">Product Name</label>
                    <input type="text" placeholder="Apple Airpod"/>
                    <label htmlFor="inStock">In Stock</label>
                    <select name="inStock" id="inStock">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label htmlFor="active">Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label htmlFor="file">Upload Image
                        <Publish className="productNewIcon"/>
                    </label>
                    <input type="file" id="file" style={{display: "none"}}/>
                </div>
                <button className="productNewBtn">Create</button>
                
            </form>
        </div>
    )
}

export default NewProduct
