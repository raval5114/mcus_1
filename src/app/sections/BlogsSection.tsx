import Link from "next/link"; // No change here, still import Link

// Define the BlogPost interface here or import it from a shared types file
interface BlogPost {
  id: string; // Unique ID for React keys
  title: string;
  excerpt: string; // A short summary
  link: string; // URL to the full blog post
  // Add other properties like imageUrl, date, author, etc., if needed
}

export default function BlogsSection({ blogs = [] }: { blogs?: BlogPost[] }) {
  return (
    <section
      id="blogs"
      className="min-h-screen px-4 sm:px-10 md:px-20 py-20 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 flex flex-col justify-center"
    >
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 md:mb-12 text-gray-900">Our Insights & Blogs</h2>
      <p className="text-lg text-center leading-relaxed max-w-3xl mx-auto mb-12 text-gray-700">
        Stay updated with the latest in corporate law, compliance, and business strategies. Our blog offers valuable insights for startups, SMEs, and established firms.
      </p>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {blog.title}
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  {blog.excerpt}
                </p>
              </div>
              {/* === THIS IS THE CHANGE === */}
              <Link
                href={blog.link}
                className="inline-flex items-center text-indigo-600 hover:text-indigo-800 font-semibold mt-4"
              >
                Read More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
              {/* ======================= */}
            </article>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600 text-xl">
            No blog posts available at the moment. Please check back later!
          </p>
        )}
      </div>
    </section>
  );
}