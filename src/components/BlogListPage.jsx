import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs`)
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Failed to fetch blogs", err));
  }, []);

  return (
    <section className="py-10 px-5  min-h-screen">
      <div className="flex  justify-between gap-4">
        <Link to="/">
          <img src={logo} className="w-12 cursor-pointer h-12" alt="" />
        </Link>

        <h2 className="text-3xl font-bold mb-5 text-center">My Blogs</h2>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-primary p-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform overflow-hidden"
          >
            {blog.images && blog.images.length > 0 && (
              <img
                src={blog.images[0]}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}

            <h3 className="text-[#C552EC] text-lg md:text-xl font-bold">
              {blog.title}
            </h3>
            <p className="text-xs text-gray-400">{blog.date}</p>
            <p className="mt-2 line-clamp-3 text-gray-300">{blog.description}</p>
            <Link
              to={`/blogs/${blog.id}`} // ✅ Ensure you use `id` not `id`
              className="inline-block mt-3 text-indigo-400 hover:text-indigo-300"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
