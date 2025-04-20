import BlogList from '../components/BlogList';

export default function Blogs() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            padding: '6rem 1rem 4rem', // ⬅️ more top padding (was 4rem)
            minHeight: '100vh',
            boxSizing: 'border-box',
        }}>
            <main style={{ maxWidth: '700px', width: '100%' }}>
                <BlogList />
            </main>
        </div>
    );
}
