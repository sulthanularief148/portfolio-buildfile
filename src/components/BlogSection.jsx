import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setBlogs(data.slice(0, 4)); // Get the first 4 blogs
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="py-10 px-5">
      <h2 className="text-3xl font-bold mb-5 text-center text-[#C552EC]COn">Recent Blogs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-primary p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform"
          >
            {/* Blog Image */}
            {blog.images && blog.images.length > 0 && (
              <img
                src={blog.images[0]} // Fix parsing error
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
            )}

            <h3 className="text-[#C552EC] text-lg md:text-xl font-bold">{blog.title}</h3>
            <p className="text-xs text-gray-400">{blog.date}</p>
            <p className="mt-2 line-clamp-3 text-gray-300">{blog.description}</p>
            <Link to={`/blogs/${blog.id}`} className="inline-block mt-3 text-indigo-400 hover:text-indigo-300">
              Read More →
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/blogs"
          className='bg-tertiary  py-3 my-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
