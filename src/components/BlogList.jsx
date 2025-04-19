import blogPosts from '../data/blogPosts'; // Import all posts
import BlogCard from './BlogCard'; // Import the BlogCard component

// This component maps through all blog posts and displays them in a list
export default function BlogList() {
    return (
        <div className="space-y-6">
            {blogPosts.map((post, index) => (
                <div key={post.slug} style={{ marginBottom: index === blogPosts.length - 1 ? '0' : '4rem' }}>
                    <BlogCard post={post} />
                </div>
            ))}
        </div>
    );
}
