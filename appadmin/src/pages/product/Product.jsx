import React from 'react'
import './product.css'
import {Link} from 'react-router-dom'
import Chart from "../../Components/chart/Chart"
import {dataProduct} from '../../data.js'
import { Publish } from '@material-ui/icons'

function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to={"/newProduct"}>
                    <button className="productAddBtn">Create</button>
                </Link>
            </div> 
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={dataProduct} title="Apple's Sale Performance" dataKey="Sales" className="chart"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://images.unsplash.com/photo-1603389335957-10bea39c9d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="productImg" />
                        <span className="productName">Apple Airpod</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In Stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>

            </div>
            <div className="productBottom">
                <form action="" className="productForm">
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
                    </div>
                    <div className="productFormRight">
                        <div className="productupload">
                            <img src="https://images.unsplash.com/photo-1603389335957-10bea39c9d32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" className="productUploadImg" />
                            <label htmlFor="file">
                                <Publish className="productUploadIcon"/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}} />
                        </div>
                    </div>
                    <div className="productBtnWrap">
                        <button className="productBtn">Update</button>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Product
