import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from 'react-toastify'

const BlogDetailsPage = () => {
  const { id } = useParams();
  console.log(id);

  const [blog, setBlog] = useState(null);

  const fetchDetailedBlog = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/${id}`);

      if (!response.ok) {
        const errorText = await response.text(); // Get error details
        throw new Error(`HTTP Error: ${response.status} - ${errorText}`);
      }
      const data = await response.json()
      setBlog(data)
    } catch (error) {
      console.log(error)
      toast.error("Error While fetching Detailed Blog")

    } 
  }
  useEffect(() => {
    fetchDetailedBlog()
  }, [id])
  if (!blog) return <div className="text-white text-center py-20">Loading...</div>;
  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-primary text-white">
      {/* Hero Section with Image */}
      {blog.images && blog.images.length > 0 && (
        <div className="w-full h-[50vh] relative">
          <img
            src={blog.images[0]}
            alt={blog.title}
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/50">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-md">
              {blog.title}
            </h1>
            <p className="text-gray-300 text-sm md:text-base">
              By <span className="font-semibold text-indigo-400">{blog.author}</span> |  {formatDate(blog.date)}
            </p>
          </div>
        </div>
      )}

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto px-5 py-10 md:py-16">
        <div className="bg-tertiary rounded-2xl p-6 md:p-10 shadow-xl">
          <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">
            {blog.details}
          </p>

          {/* Additional Images Gallery (if more than 1 image) */}
          {blog.images && blog.images.length > 1 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {blog.images.slice(1).map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Blog Image ${idx + 2}`}
                  className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform"
                />
              ))}
            </div>
          )}

          {/* Back Button */}
          <div className="mt-10 text-center">
            <Link
              to="/blogs"
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              ⬅️ Back to Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
