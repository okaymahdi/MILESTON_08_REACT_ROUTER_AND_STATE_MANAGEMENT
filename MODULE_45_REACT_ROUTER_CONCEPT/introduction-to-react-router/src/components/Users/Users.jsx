import { useLoaderData } from "react-router-dom";
import User from "../User/User";

/** import CSS */
import './Users.css'

const Users = () => {
    /** load data */
    const users = useLoaderData();
    console.log(users);


    // state --> data
    // state --> loader
    // use effect
    // fetch --> state set  --> set  state
    return (
        <div>
            <h2>Our Users: {users.length}</h2>
            <p>Fantastic and Good Users</p>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User> )
                }
            </div>
        </div>
    );
};

export default Users;