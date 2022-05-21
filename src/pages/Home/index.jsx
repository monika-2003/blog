import React, { useState } from "react";
import BlogList from "../../components/Home/BlogList";
import Header from "../../components/Home/Header";
import SearchBar from "../../components/Home/SearchBar";
import { blogList } from "../../config/data";
import EmptyList from "../../components/common/EmptyList"
import CreateBlog from "../../components/Home/CreateBlog";
import LogIn from "../../components/Home/LogIn";
import SignIn from "../../components/Home/SignIn";
import './style.css';


const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState('');

  // search submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filterBlogs = allBlogs.filter((blog) =>
      blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
    );

    setBlogs(filterBlogs);
  };

  // clear search using cross button
  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey('');
  }


  return (
    <div className="main-container">
      
      <div className='buttons' >
           <SignIn />
           <LogIn />
      </div>

      <Header />
      <br />

      <CreateBlog />
      
      <SearchBar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => {
          setSearchKey(e.target.value);
        }}
      />

      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
