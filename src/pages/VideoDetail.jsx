import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
function VideoDetail() {
    const id = useParams().id;
    const [products, setProducts] = useState([]);
    const [comments, setComments] = useState([]);
    const [video, setVideo] = useState([]);
    useEffect(() => { 
        axios.get(`https://erin-nice-zebra.cyclic.app/api/video/${id}/products`).then((response) => {
            // console.log(response.data[0].products);
            setProducts(response.data[0].products);
            // console.log(response.data[0].url_video);
            setVideo(response.data[0].url_video);
            // console.log(products);
        });
        axios.get(`https://erin-nice-zebra.cyclic.app/api/video/${id}/comments`).then((response) => {
            // console.log(response.data[0].products);
            // setProducts(response.data[0].products);
            setComments(response.data[0].comments);
            // console.log(response.data[0].comments);
        });

    }, []);

    return (

        <div className="grid-container">
            <div className="left">
            <h2>Products:</h2>
                {
                    products.map((result, index) => {
                        return (
                            <a href={result.link_product} className="product" key={index}> 
                            <p>{result.title}</p>
                            <p> {result.price}</p>
                            </a>);
                    })
                }

            </div>
            <div className="center">
                <iframe width="80%" height="315"
                    src={video}>
                </iframe>
            </div>
            <div className="right">
                <h2>Comments:</h2>
                <div className="comment-section">
                    {
                        comments.map((result, index) => {
                            return (
                                <div className="comment-wrapper" key={index}>
                                    <h4>{result.username} : </h4>
                                    <p>{result.comment}</p>
                                </div>

                            )
                        })
                    }
                </div>
                <div className="add-comment-section">
                    <h4>Add Comment: </h4>
                        <input id="username" type="text" placeholder="username" />
                        <textarea id="comment" type="text" placeholder="comment" />
                        <button id="submitButton" type="" onClick={submitComment} data-id={id}>Submit</button>
                </div>
            </div>
        </div>
    );
}

function submitComment(id) {
    const username = document.querySelector('#username').value;
    const comment = document.querySelector('#comment').value;
    const videoId = document.querySelector('#submitButton').getAttribute('data-id');

    const commentObject = {
        "video_id": videoId,
        "username": username,
        "comment": comment
    };

    axios.post('https://erin-nice-zebra.cyclic.app/api/comment', commentObject).then((response) => {
        console.log(response);
        window.location.reload(false);
    })


}

export default VideoDetail;