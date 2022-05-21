import React from "react";
import Chip from "../../../common/chip";
import "./style.css";
import {Link} from 'react-router-dom';

const BlogItem = ({
  blog: {
    id,
    description,
    title,
    createdAt,
    authorName,
    category,
    cover
  },
}) => {
  return (
    <div className="blogItem">
      <img src = {cover} alt = 'cover' className="blogItem-cover"/>
      <Chip label = {category} />
      <h3>{title}</h3>
      <p className="desc">{description}</p>

      <footer>
        <div className="author">

          <div>
            <h6>{authorName}</h6>
            <p>{createdAt}</p>
          </div>
        </div>

        <Link className = 'blogItem-link' to={`/blog/${id}`}>Click</Link>
      </footer>
    </div>
  );
};

export default BlogItem;
