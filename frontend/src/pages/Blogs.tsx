import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { BLogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();
    // console.log(blogs);
    if(loading) {
        return <div>
            <Appbar />
            <div className="flex justify-center">
                <div>
                    <BLogSkeleton />
                    <BLogSkeleton />
                    <BLogSkeleton />
                    <BLogSkeleton />
                    <BLogSkeleton />
                </div>
            </div>
        </div>
    }

    return <div>
        <Appbar />
        <div className="flex justify-center">
            <div>
                {blogs.map(blog => <BlogCard 
                    id={blog.id}
                    authorName={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishedDate={"3rd May 2024"}
                />)}
            </div>
        </div>
    </div>
}