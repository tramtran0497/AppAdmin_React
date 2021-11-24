import React from 'react'
import './user.css'
import {PermIdentity, CalendarToday, PhonelinkRing, Mail,LocationCity, Publish} from '@material-ui/icons';
import {Link} from 'react-router-dom'
function User() {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to={"/userNew"}>
                    <button className="userAddBtn">Create</button>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img src="https://images.unsplash.com/photo-1637315145639-1c4ede81dab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" className="userShowTopImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna Joley</span>
                            <span className="userShowTitle">Developer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowInfoIcon"/>
                            <span className="userShowInputTitle">anna02345</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowInfoIcon"/>
                            <span className="userShowInputTitle">10.11.2021</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhonelinkRing className="userShowInfoIcon"/>
                            <span className="userShowInputTitle">+358 456 345 123</span>
                        </div>
                        <div className="userShowInfo">
                            <Mail className="userShowInfoIcon"/>
                            <span className="userShowInputTitle Mail">anna@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <LocationCity className="userShowInfoIcon"/>
                            <span className="userShowInputTitle">Lahti | Finland</span>
                        </div>
                    </div>

                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit</span>
                    <form action="" className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label htmlFor="">Username</label>
                                <input type="text" placeholder="anna02345" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Full Name</label>
                                <input type="text" placeholder="Anna Joley" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Phone Number</label>
                                <input type="text" placeholder="+358 456 345 123" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Email</label>
                                <input type="email" placeholder="anna@gmail.com" className="userUpdateInput" />
                            </div>
                            <div className="userUpdateItem">
                                <label htmlFor="">Location</label>
                                <input type="text" placeholder="Lahti | Finland" className="userUpdateInput" />
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.unsplash.com/photo-1637315145639-1c4ede81dab4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80" alt="" className="userUpdateImg" />
                                <label htmlFor="file"><Publish className="userUpdateIcon"/></label>
                                <input type="file" id="file" style={{display: "none"}}/>
                            </div>
                            <button className="userUpdateBtn">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
