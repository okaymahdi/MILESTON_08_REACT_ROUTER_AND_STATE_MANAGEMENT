import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;
    return (
        <div>
            <h3>Post details About: {id}</h3>
            <p>Title: {title}</p>
            <p><small>Body: {body}</small></p>
        </div>
    );
};

export default PostDetails;