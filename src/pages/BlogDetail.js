import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { useEffect, useState } from 'react';

export default function BlogDetail() {
    const { slug } = useParams();
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        import(`../posts/${slug}.md`)
            .then((res) => fetch(res.default).then(r => r.text()))
            .then(setMarkdown)
            .catch(() => setMarkdown('# Post not found'));
    }, [slug]);

    return (
        <div className="blog-detail-page">
            <div className="blog-detail-container">
                <ReactMarkdown>{markdown}</ReactMarkdown>


                <Link
                    to="/blogs"
                    className="back-link"
                    style={{
                        textDecoration: 'none',
                        marginBottom: '2rem',
                        color: '#888',
                        transition: 'color 0.2s ease',
                        paddingTop: '3rem'
                    }}
                    onMouseOver={e => (e.target.style.textDecoration = 'none')}
                    onMouseOut={e => (e.target.style.textDecoration = 'none')}
                >
                    ← All posts
                </Link>
            </div>
        </div>
    );
}
