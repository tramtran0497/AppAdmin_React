import './productList.css'
import { DataGrid } from '@material-ui/data-grid';
import React, {useState} from 'react'
import {DeleteForever} from '@material-ui/icons';
import { productRow } from '../../data';
import {Link} from 'react-router-dom'
function ProductList() {
    const [data, setData] = useState(productRow)
    const handleDelete = (id) =>{
        setData(data.filter(item => id !== item.id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'product', headerName: 'Product', width: 200, renderCell: (params)=>{
            return(
                <div className="productList">
                    <img className="productListImg" src={params.row.img} alt="" />
                    {params.row.name}
                </div>
            )
        }},
        { field: 'stock', headerName: 'Stock', width: 200},
        { field: 'status', headerName: 'Status',width: 130},
        { field: 'price', headerName: 'Price', width: 150},
        { field: 'action', headerName:'Action', width:150, renderCell: (params)=>{
            return(
                <div className="productListAction">
                    <Link to={"/product/" + params.row.id}>
                        <button className="productListEdit">Edit</button>
                    </Link>
                    <DeleteForever className="productListIcon Delete" onClick={()=>handleDelete(params.row.id)}/>
                </div>
              
            )
        }}
    ];
    return (
        <div className="productList">
            <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            checkboxSelection
            disableSelectionOnClick
            />
        </div>
    )
}

export default ProductList
