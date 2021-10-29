import React, { useState } from 'react';
import "../styling/Home.css";

function Home() {

    const [images, setImages] = useState("");
    
    const sendImages = (e) => {
        e.preventDefault();
        console.log(e);
        if(images){
            window.alert("image successfully collected");
        }else{
            window.alert("some error occured");
        }
    }
    return (
        <div>
            <form>
                 <p>upload your image by clicking on the button below</p>
                 <input type="file" id="myFile" name="files" onChange={(e) => setImages(e.target.files[0])} required />
                 <button type="submit" className="upload-image" onClick={sendImages}>Upload Image</button>
            </form>
        </div>
    )
}

export default Home;
