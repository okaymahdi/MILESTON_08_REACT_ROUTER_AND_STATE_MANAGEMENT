import { useRef, useEffect } from "react";

const RefFrom = () => {
    /** create reference */
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);


    /** where cursor on default time */
    useEffect( () => {
        nameRef.current.focus();
    }, [])

    const handleSubmit = e => {
        e.preventDefault();

        /** show object */
        // console.log(nameRef);

        /** show element */
        // console.log(nameRef.current);

        /** show field value */
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>

            {/* data access with onSubmit={handlerName} */}
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" />
                <br />

                {/* default value with defaultValue={'text'} */}
                <input ref={emailRef} defaultValue={'mahdi@gamil.com'} type="email" name="email" id="" />
                <br />
                <input ref={passwordRef} type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefFrom;