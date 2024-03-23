import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, body} = post;

    const {postId} = useParams();
    console.log(postId);

    const navigate = useNavigate();
    const handelGoBack = () => {
        navigate(-1)
    }
    return (
        <div>
            <h3>Post details About: {id}</h3>
            <p>Title: {title}</p>
            <p><small>Body: {body}</small></p>
            <button onClick={handelGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;