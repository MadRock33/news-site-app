import PostCard from "@/components/PostCard"
import {prisma} from "@/lib/prisma"
import Header from "@/components/Header";
import {getManyPosts} from "@/crud";

// Принудительно используем динамический рендеринг (SSR) вместо статической генерации
export const dynamic = 'force-dynamic';

export default async function Home() {
    const posts = await getManyPosts();
    // console.log(posts);

  return (
      <>
          <Header/>
          <div className="p-6 space-y-6">
              {posts.map((post)=>(<PostCard key={post.id} post={post}/>))}
          </div>
      </>

  );
}
