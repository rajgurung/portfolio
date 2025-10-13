import BlogList from '../components/BlogList';

export default function Blogs() {
    return (
        <div className="blogs-page" style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '7.5rem 1rem 4rem', // ⬅️ more top padding to prevent navbar clipping
            minHeight: '100vh',
            boxSizing: 'border-box',
        }}>
            <main style={{ maxWidth: '700px', width: '100%' }}>
                <BlogList />
            </main>
        </div>
    );
}
