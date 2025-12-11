import {prisma} from "@/lib/prisma";
import Post from "@/components/Post";

export async function getManyPosts() {
    const posts = await prisma.post.findMany({
        include: {
            author:true
        },
        orderBy: {
            createdAt:"desc"
        }
    });
    return posts;
}

export async function getOnePost(post_id: string) {
    const post = await prisma.post.findUnique({
        where: {
            id: Number(post_id)
        }
    });
    return post;
}

export async function createPost(title: string,
                                 content: string,
                                 image: string,
                                 category: string,
                                 author_id: string,
                                 ) {

    await prisma.post.create({
        data:{
            title:title,
            content:content,
            image:image,
            category:category,
            authorId:Number(author_id),
        }
    });
    return "Post created"
}

export async function deletePost(post_id: string) {
    await prisma.post.delete({
        where: {
            id: Number(post_id)
        }
    })
    return "Post deleted"
}