"use client";
import { Router } from "next/router";
// import React, { useState, useEffect } from "react";

// const BlogList = ({ postsList }) => {
//   console.log(postsList, postsList);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(5);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = postsList.slice(indexOfFirstPost, indexOfLastPost);

//   // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [currentPage]);

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <ul className="space-y-4">
//         {currentPosts.map((post, index) => (
//           <a key={index} href={"/tutorials/" + post.slug} target="_blank">
//             <li key={index} className="p-4 border rounded-lg shadow-sm">
//               <h2 className="text-xl font-semibold">{post.title}</h2>
//               <p className="text-gray-600">{post.date}</p>
//             </li>
//           </a>
//         ))}
//       </ul>
//       <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={postsList.length}
//         paginate={paginate}
//         currentPage={currentPage}
//       />
//     </div>
//   );
// };

// const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav className="mt-6">
//       <ul className="flex justify-center space-x-2">
//         {pageNumbers.map((number) => (
//           <li
//             key={number}
//             className={`page-item ${
//               currentPage === number ? "text-blue-500" : ""
//             }`}
//           >
//             <button
//               onClick={() => paginate(number)}
//               className="px-4 py-2 border rounded hover:bg-gray-200"
//             >
//               {number}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default BlogList;
import React, { useState, useEffect } from "react";

const BlogList = ({ postsList }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postsList.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <ul className="space-y-6">
        {currentPosts.map((post, index) => (
          <a key={index} href={"/tutorials/" + post.slug} target="_blank">
            <li
              className="p-6 border rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onClick={() => Router.pus("/tutorials/" + post.slug)}
            >
              <h2 className="text-2xl font-semibold text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-2">
                {new Date(post.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">{post.description}</p>
            </li>
          </a>
        ))}
      </ul>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={postsList.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-6">
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${
              currentPage === number ? "text-blue-600 font-bold" : ""
            }`}
          >
            <button
              onClick={() => paginate(number)}
              className="px-4 py-2 border rounded hover:bg-gray-200"
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BlogList;
