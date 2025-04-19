import { Link } from 'react-router-dom';
import '../styelsheets/blog.css';

export default function BlogCard({ post }) {
    return (
        <div className="blog-card">
            <h2>
                <Link to={`/blogs/${post.slug}`} className="blog-title-link">
                    {post.title}
                </Link>
            </h2>

            <p className="blog-date">{post.date}</p>

            <p className="blog-excerpt">{post.excerpt}</p>
        </div>
    );
}
