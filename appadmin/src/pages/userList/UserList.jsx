import React, {useState} from 'react'
import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import {Edit, DeleteForever} from '@material-ui/icons';
import { userRow } from '../../data';
import {Link} from 'react-router-dom'

export default function UserList() {
    const [data, setData] = useState(userRow)
    const handleDelete = (id) =>{
        setData(data.filter(item => id !== item.id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'user', headerName: 'User', width: 200, renderCell: (params)=>{
            return(
                <div className="userList">
                    <img className="userImg" src={params.row.avata} alt="" />
                    {params.row.username}
                </div>
            )
        }},
        { field: 'email', headerName: 'Email', width: 200},
        { field: 'status', headerName: 'Status',width: 130},
        { field: 'transaction', headerName: 'Transaction', width: 150},
        { field: 'action', headerName:'Action', width:150, renderCell: (params)=>{
            return(
                <div className="userListAction">
                    <Link to={"/user/" + params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteForever className="userListIcon Delete" onClick={()=>handleDelete(params.row.id)}/>
                </div>
              
            )
        }}
    ];
    return (
        <div className="userList">
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
