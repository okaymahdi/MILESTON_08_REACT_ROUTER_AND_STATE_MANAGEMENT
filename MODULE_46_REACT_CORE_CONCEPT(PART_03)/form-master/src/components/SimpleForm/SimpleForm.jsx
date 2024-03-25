const SimpleForm = () => {

    /** data handler function */
    const handleSubmit = e => {

        /** for refresh off with .preventDefault() */
        e.preventDefault();

        /** for show input information */
        /** for show form event */
        console.log(e);

        /** show parent element (form teg) */
        console.log(e.target);

        /** show element teg with name="name" (input teg) */
        console.log(e.target.name);

        /** show text from input box */
        console.log(e.target.name.value);

        /** show email from input box */
        console.log(e.target.email.value);

        /** show phone from input box */
        console.log(e.target.phone.value);
    }
    return (
        <div>

            {/* data access with onSubmit={handlerName} */}
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;