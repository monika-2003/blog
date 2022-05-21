import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const BlogContent = () => {
  return (
    <div className="blog-content">
      {/* Link for home page */}
      <Link to="/" className="go-back">
        Go Back
      </Link>

      {/* Heading */}
      <h1 style={{width: '350px' , fontSize:'2.3rem' , color: 'rgb(1, 42, 27)'}}>Create your Blog</h1>

      {/* image */}
      <img className="writeImg" src="/images/nature3.jpg" alt="image" />


    {/* Content of the page */}
      <form className="writeForm">


        {/*Input for Title */}
        <div class="writeFormGroup" style={{display: 'flex', alignItems:'center', width:'50rem'}}>

          <label for="file-input">
            <img className="icon" src="/images/add.png" />
          </label>

          <input id="file-input" type="file" style={{ display: "none" }} />

          <input
            type="text"
            placeholder="Give a title"
            className="writeInput border"
            autoFocus={true}
            style={{height: '3.4rem',width: '40rem'}}
          />

          <Link to = '/published'>
            <button className="writeSubmit">Post</button>
          </Link>

        </div>


        {/* description */}
        <div>
          <textarea
            placeholder="Write you thoughts...."
            type="text"
            className="writeInput writeText"
          ></textarea>
        </div>


        {/* post button */}
      </form>
    </div>
  );
};

export default BlogContent;
