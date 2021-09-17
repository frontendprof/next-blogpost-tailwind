import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Post = ({ post }) => {
  return (
    <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
      <Image
        src={post.front_matter.cover_image}
        alt="card_img"
        height={420}
        width={600}
        className="mb-4 rounded"
      />
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">{post.front_matter.date}</span>
        <div>{post.front_matter.category}</div>
      </div>

      <div className="mt-2">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-2xl text-gray-700 font-bold hover:underline">
            {post.front_matter.title}
          </a>
        </Link>
        <p className="mt-2 text-gray-600">{post.front_matter.excerpt}</p>
      </div>
      <div className="flex justify-between items-center mt-6">
        <Link href={`/blog/${post.slug}`}>
          <a className="text-gray-900 hover:text-blue-600">Read More</a>
        </Link>
        <div className="flex items-center">
          <img
            src={post.front_matter.author_image}
            alt="author_img"
            className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
          />
          <h3 className="text-gray-700 font-bold">{post.front_matter.author}</h3>
        </div>
      </div>
    </div>
  );
};

export default Post;