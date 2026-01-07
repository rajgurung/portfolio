import BlogList from '../components/BlogList';

export default function Blogs() {
    return (
        <div className="blogs-page" style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '3rem 1rem 4rem',
            minHeight: '100vh',
            boxSizing: 'border-box',
        }}>
            <main style={{ maxWidth: '850px', width: '100%' }}>
                <BlogList />
            </main>
        </div>
    );
}
