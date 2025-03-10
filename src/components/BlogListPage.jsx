import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { blog, logo } from "../assets";
import { toast } from "react-toastify";
import Shimmer from "./Shimmer";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const data = await response.json();
      const blogList = Array.isArray(data) ? data : data.blogs || [];
      setBlogs(blogList);
      setFilteredBlogs(blogList);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Error While Fetching Blogs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredBlogs(
      blogs.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.description.toLowerCase().includes(query)
      )
    );
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <section className="py-6 px-6 min-h-screen bg-[#121212] text-white">
      <div className="flex gap-4 justify-between items-center mx-2 my-2 px-2 py-2">
        <Link to="/">
          <img src={logo} className="w-16 h-16 mb-4 cursor-pointer" alt="Logo" />
        </Link>
        <h1 className="md:text-5xl text-xl text-[#C552EC] font-extrabold mb-3">
          <span className="text-white">Arief</span> Blogs
        </h1>
      </div>
      
      {/* Hero Section */}
      <div className="w-full h-[60vh] relative rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-center p-8 z-10">
          <p className="md:text-5xl text-2xl font-bold mt-[8rem] text-[#C552EC]">
            Discover <span className="text-white">insights</span>, stories, and <span className="text-white">ideas</span> from my journey
          </p>
        </div>
        <img
          className="w-full h-full object-cover"
          src={blog}
          alt="Arief List blog background Image"
        />
      </div>
      
      {/* Search Bar */}
      <div className="max-w-3xl mx-auto mt-8">
        <input
          type="text"
          placeholder="Search for blogs..."
          value={searchQuery}
          onChange={handleSearch}
          className="w-full p-3 rounded-lg bg-[#1E1E1E] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#C552EC]"
        />
      </div>
      
      {/* Blog Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 mx-auto max-w-7xl">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-[#1E1E1E] p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            >
              {blog?.images?.length > 0 ? (
                <img
                  src={blog.images[0]}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-full h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center text-white">
                  No Image
                </div>
              )}

              <h3 className="text-[#C552EC] text-2xl font-bold mb-2">{blog?.title || "Untitled"}</h3>
              <p className="text-sm text-gray-400 mb-2">{formatDate(blog?.date || new Date())}</p>
              <p className="text-gray-300 mb-4 line-clamp-3">{blog?.description}</p>
              <Link
                to={`/blogs/slug/${blog?.slug}`}
                className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-all duration-300"
              >
                Read More →
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-xl">No blogs found matching your search.</p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
