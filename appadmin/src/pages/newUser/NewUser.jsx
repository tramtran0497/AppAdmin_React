import React from 'react'
import "./newUser.css"
export default function NewUser() {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>
            <form action="" className="newUserForm">
                <div className="newUserItem">
                    <label htmlFor="">Username</label>
                    <input type="text" placeholder="John"  className="newUserInput"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Full Name</label>
                    <input type="text" placeholder="John Smith" className="newUserInput"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Phone Number</label>
                    <input type="text" placeholder="+358 XXX XXX XXX" className="newUserInput"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Email</label>
                    <input type="text" placeholder="John@gmail.com" className="newUserInput"/>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Location</label>
                    <input type="text" placeholder="California | US" className="newUserInput"/>
                </div>
                <div className="newUserItem Gender">
                    <label htmlFor="">Gender</label>
                    <div className="genderWrap">
                        <div className="genderChoice">
                            <input type="radio" name="gender" id="male" value="Male"/>
                            <label htmlFor="Male">Male</label>
                        </div>
                        <div className="genderChoice">
                            <input type="radio" name="gender" id="male" value="Female"/>
                            <label htmlFor="Female">Female</label>
                        </div>
                        <div className="genderChoice">
                            <input type="radio" name="gender" id="male" value="Others"/>
                            <label htmlFor="Others">Others</label>
                        </div>
                    </div>
                </div>
                <div className="newUserItem">
                    <label htmlFor="">Active</label>
                    <select className="newUserSelect" name="active" id="active">
                        <option value="yes" defaultValue>Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="newUserBtn">Create</button>
            </form>
        </div>
    )
}
