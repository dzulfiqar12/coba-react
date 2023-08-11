import axios from "axios";
import { useEffect, useState } from "react";

function Content() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        axios.get('https://erin-nice-zebra.cyclic.app/api/video').then((response) => {
            console.log(response.data);
            setVideos(response.data);
        })
    },[]);
    return (
        <main>
            <div className="card-container">
                {videos.map((result, index) => {
                    return (
                        <a href={`detail/${result._id}`} className="card" key = {index}>
                            <img src={result.url_image} alt="" />
                        </a>
                    )
                })}
            </div>
        </main>
    );
}

export default Content;