import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

export default function BlogDetail() {
    const { slug } = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        import(`../posts/${slug}.md?raw`)
            .then((res) => setMarkdown(res.default))
            .catch(() => setMarkdown('# Post not found'));
    }, [slug]);

    return (
        <div className="blog-detail-page">
            <div className="blog-detail-container">
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props }) => <h1 className="markdown-heading" {...props} />,
                        p: ({ node, ...props }) => <p {...props} />,
                        a: ({ node, ...props }) => <a target="_blank" rel="noopener noreferrer" {...props} />,
                    }}
                >
                    {markdown}
                </ReactMarkdown>


                <Link
                    to="/blogs"
                    className="back-link"
                    style={{
                        paddingTop: '3rem'
                    }}
                >
                    ← All posts
                </Link>
            </div>
        </div>
    );
}
