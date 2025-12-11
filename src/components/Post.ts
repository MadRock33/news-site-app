import Author from "./Author";

interface Post {
    id:number;
    title: string;
    content: string;
    image: string | null;
    category: string | null;
    author: Author;
    createdAt: Date;
}

export default Post;
