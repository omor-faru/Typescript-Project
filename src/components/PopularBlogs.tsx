import { MessageCircle, ThumbsUp } from "lucide-react";

const PopularBlogs = () => {
  const blogs = [

    { 
      title: "My Amazing Blog Title 1", 
      author: "Jordan", 
      likes: 142, 
      comments: 44 
    },

    { title: "My Amazing Blog Title 2", 
      author: "John", 
      likes: 153, 
      comments: 24
     },

    { title: "My Amazing Blog Title 4", 
      author: "HuXn", 
      likes: 132, 
      comments: 54 
    },

    { title: "My Amazing Blog Title 5", 
      author: "Xioe", 
      likes: 122, 
      comments: 20 
    },
    
  ];

  return (
    <div className="bg-white p-5 w-[23rem] mt-4 ml-5 rounded shadow-md border">
      <h2 className="text-xl font-bold mb-5 text-gray-800">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4 pb-3 border-b border-dashed border-gray-300">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg text-black">{blog.title}</span>
            </div>
            <span className="text-gray-700 text-sm">
              Written by <span className="font-semibold text-indigo-700">{blog.author}</span>
            </span>
            <div className="flex items-center mt-2 space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <MessageCircle size={18} className="text-blue-500" />
                <span className="ml-1">{blog.comments} comments</span>
              </div>
              <div className="flex items-center">
                <ThumbsUp size={18} className="text-pink-500" />
                <span className="ml-1">{blog.likes} likes</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
