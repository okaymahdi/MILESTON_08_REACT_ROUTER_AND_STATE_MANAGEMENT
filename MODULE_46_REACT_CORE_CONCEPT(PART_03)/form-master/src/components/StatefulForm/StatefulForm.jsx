import { useState } from "react";

const StatefulForm = () => {
    /** use state with initial value */
    const [name, setName] = useState("");


    const [email, setEmail] = useState(null);

    const [password, setPassword] = useState(null);

    const [error, setError] = useState();

    /** data access handler */
    const handleSubmit = e => {
        e.preventDefault();

        /** validation */
        if (password.length < 6) {
            setError('password must be 6 characters or longer!!!');
        }
        else {
            setError('');
            console.log(name, email, password);
        }
    }

    /** name change handler */
    const handleNameChange = e => {
        console.log(e.target.value);
        setName(e.target.value);
    }

    /** email change handler */
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    /** password change handler */
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    return (
        <div>

            {/* data access with onSubmit={handlerName} */}
            <form onSubmit={handleSubmit}>
                {/* show default text with value={name} */}
                <input
                    value={name}
                    onChange={handleNameChange}
                    required

                    type="text" name="name" />
                <br />

                {/* on change event handler */}
                <input
                    onChange={handleEmailChange}
                    value={email}
                    required

                    type="email" name="email" id="" />
                <br />


                <input
                    onChange={handlePasswordChange}
                    required

                    type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />

                {/* show error */}
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;