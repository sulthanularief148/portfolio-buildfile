import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from 'react-toastify'
import Shimmer from "./Shimmer";
import { Helmet } from 'react-helmet-async';

const BlogDetailsPage = () => {
  // const { id } = useParams();
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  const fetchDetailedBlog = async () => {

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/blogs/slug/${slug}`)
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
  }, [slug])

  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const parsedImages = Array.isArray(blog?.images)
    ? blog.images
    : JSON.parse(blog?.images || "[]");
  if (!blog) return <Shimmer />;
  return (
    <div className="min-h-screen bg-primary text-white">
      <Helmet>
        <title>{blog?.title} | Arief Blogs</title>
        <meta name="description" content={blog?.description || "Explore insightful blogs by Arief"} />
        <meta name="keywords" content={`${blog?.tags?.join(', ')}, web development, frontend, react`} />
        <meta property="og:title" content={blog?.title} />
        <meta property="og:description" content={blog?.description} />
        <meta property="og:image" content={parsedImages[0]} />
        <meta property="og:url" content={`https://arief.info/blogs/slug/${blog?.slug}`} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      {/* Hero Section with Image */}
      {blog?.images && blog?.images.length > 0 && (
        <div className="w-full h-[50vh] relative">

          {/* <img
            src={blog.images[0] ? blog.images[0] : "https://talent500.com/blog/wp-content/uploads/sites/42/2024/05/react-must-be-in-scope-when-using-jsx-scaled-1.jpg"}
            alt={blog.title}
            className="w-full h-full object-cover brightness-75"
          /> */}
          {parsedImages.length > 0 ? (
            <img
              src={parsedImages[0]}
              alt={blog.title || "Blog Image"}
              loading="lazy"
              className="w-full h-full object-cover brightness-75"
            />
          ) : (
            <img
              src="https://via.placeholder.com/1200x600?text=No+Image+Available"
              alt="Fallback Image"
              className="w-full h-full object-cover brightness-75"
            />
          )
          }
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 bg-black/50">
            <h1 className="text-4xl md:text-5xl font-bold text-[#C552EC] mb-4 drop-shadow-md">
              {blog.title}
            </h1>
            <p className="text-gray-300 text-sm md:text-base">
              By <span className="font-bold text-xl text-indigo-400">{blog.author}</span> |  {formatDate(blog.date)}
            </p>
          </div>
        </div>
      )
      }

      {/* Blog Content Section */}
      <div className="max-w-4xl mx-auto px-5 py-10 md:py-16">
        <div className="bg-tertiary rounded-2xl p-6 md:p-10 shadow-xl">
          {/* Main Blog Details */}
          {/* <p className="text-lg leading-relaxed text-gray-300 whitespace-pre-line">
            {blog.details}
          </p> */}

          {/* Content Array with Subheadings & Descriptions */}
          {blog?.content && Array.isArray(typeof blog?.content === "string" ? JSON.parse(blog?.content) : blog?.content) && (
            <div className="mt-6">
              {/* Ensure content is parsed as an array */}
              {blog.content && (
                <div className="mt-6">
                  {(typeof blog.content === "string" ? JSON.parse(blog.content) : blog.content).map((section, idx) => (
                    <div key={idx} className="mt-6">
                      <h2 className="text-3xl font-bold text-indigo-400">{section.subHeading}</h2>
                      <p className="text-gray-300 mt-2">{section.description}</p>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          {/* Additional Images Gallery (if more than 1 image) */}
          {parsedImages.length > 1 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

              {parsedImages.slice(1).map((img, idx) => (
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
