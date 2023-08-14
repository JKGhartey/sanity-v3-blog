"use client";
import { useState } from "react";
import ClientSideRoute from "./ClientSideRoute";
// import PostCard from "./PostCard";
import Image from "next/image"
import urlFor from "@/lib/urlFor";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

type Props = {
    posts: Post[];
};

const BlogList = ({ posts }: Props) => {
    const articlesShown = 1;
    const [loadMore, setLoadMore] = useState(articlesShown);
    const showMoreArticles = () => {
        setLoadMore(loadMore + articlesShown);
    };

    return (
        <div className="relative z-0">
            <hr className="border-[#8F00FF] mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-10 gap-y-16 pb-24">
                {/* {posts.slice(0, loadMore)?.map((item) => (
          <>
            <ClientSideRoute
              route={`/post/${item.slug.current}`}
              key={item._id}
            >
              <PostCard post={item} />
            </ClientSideRoute>
          </>
        ))} */}
                {posts.map((post) => (
                    <ClientSideRoute
                        route={`/post/${post.slug.current}`}
                        key={post._id}
                    >
                        <div key={post._id} className="flex flex-col group cursor-pointer">
                            <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
                                <Image
                                    className="object-cover object-left lg:object-center"
                                    src={urlFor(post.mainImage).url()}
                                    alt={post.author.name}
                                    fill
                                />
                                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                                    <div>
                                        <p className="font-bold">{post.title}</p>

                                        <p>
                                            {new Date(post._createdAt).toLocaleDateString(
                                                "en-US", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric"
                                            }
                                            )}
                                        </p>
                                    </div>
                                    <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                                        {post.categories.map((category) => (
                                            <div key={category._id} className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold ">
                                                <p>{category.title} </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5 flex-1">
                                <p className="underline text-lg font-bold">{post.title}</p>
                                <p className="text-gray-500 line-clamp-2">{post.description}</p>
                            </div>
                            <p className="mt-5 font-bold flex items-center group-hover:underline">
                                Read Post
                                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
                            </p>
                        </div>
                    </ClientSideRoute>
                ))}
            </div>
            <div className="flex justify-center">
                {loadMore < posts?.length ? (
                    <button
                        type="button"
                        className="group relative overflow-hidden bg-white px-2 py-3 text-sm md:text-base rounded-lg"
                        onClick={showMoreArticles}
                    >
                        <div className="absolute inset-0 w-3  bg-[#8F00FF]  transition-all duration-[350ms] ease-out group-hover:w-full"></div>
                        <span className="relative text-black group-hover:text-white ">
                            Load More Articles
                        </span>
                    </button>
                ) : (
                    <button
                        type="button"
                        className="bg-[#483248] text-[#FFF] px-2 py-3 text-sm md:text-base rounded-lg opacity-50 cursor-not-allowed"
                        onClick={showMoreArticles}
                        disabled
                    >
                        All articles loaded
                    </button>
                )}
            </div>
            <div className="flex justify-center mt-5">
                Showing {loadMore} of {posts?.length} articles
            </div>
        </div>
    );
};

export default BlogList;