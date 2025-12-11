import {Bookmark, Repeat2, MessageCircle, EyeIcon, Heart, User} from "lucide-react";
import Post from "./Post";
import {formatDistanceToNow} from "date-fns";
import {ru, enUS} from "date-fns/locale";



interface IPostCard {
    post:Post,
}

const PostCard= ({post}:IPostCard) => {



    return (
        <article className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all bg-white border-gray-200`}>
            {post.image && (
                <div className="aspect-[2/1] overflow-hidden">
                    <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                    {post.category && (
                        <span className={`px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600`}>
                            {post.category}
                        </span>
                    )}

                    <span className={`text-xs text-gray-500`}>{formatDistanceToNow(post.createdAt, {locale:enUS})}</span>
                </div>

                <h2 className={`text-2xl mb-3 hover:text-blue-500 cursor-pointer transition-colors`}>
                    {post.title}
                </h2>

                <p className={`mb-4 leading-relaxed text-gray-600`}>
                    {post.content}
                </p>

                <div className={`flex items-center justify-between pt-4 border-t 'border-gray-100`}>
                    <div className="flex items-center gap-3">
                        {post.author.avatarUrl && (
                            <img

                                src={post.author.avatarUrl}
                                alt={post.author.name}
                                className="w-8 h-8 rounded-full"
                            />
                        )}
                        <div>
                            <div className={`text-sm hover:text-blue-500 cursor-pointer transition-colors `}>
                                {post.author.name}
                            </div>
                        </div>
                    </div>

                    <div className={`flex items-center gap-4 text-gray-500`}>
                        <div className="flex items-center gap-1 text-sm">
                            <EyeIcon className="w-4 h-4" />
                            <span>0</span>
                        </div>

                        <button

                            className="flex items-center gap-1 text-sm hover:text-red-500 transition-colors group"
                        >
                            <Heart className={`w-4 h-4`} />
                            <span className=''>0</span>
                        </button>

                        <button className="flex items-center gap-1 text-sm hover:text-blue-500 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>0</span>
                        </button>

                        <button

                            className="flex items-center gap-1 text-sm hover:text-green-600 transition-colors"
                        >
                            <Repeat2 className={`w-4 h-4 `} />
                            <span className="">0</span>
                        </button>

                        <button className="hover:text-blue-500 transition-colors">
                            <Bookmark className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};


export default PostCard;