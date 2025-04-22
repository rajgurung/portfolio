// This is a mock database — an array of blog post objects
const blogPosts = [
    {
        slug: "decision-paralysis", // URL path identifier (used in the route)
        title: "Overcoming Decision Paralysis", // Post title
        date: "2025-04-20", // Published date
        excerpt: "With knowledge comes clarity — or so you'd think.", // Short preview shown on homepage
        content: `Choosing a project is so hard. You want to work on a project thats going to be the best, the most impactful and the best...`, // Full content for the post page
    },
    {
        slug: "building-my-site",
        title: "React + Vibes = This Site",
        date: "2025-04-18",
        excerpt: "I'm getting things done in React, but I can't shake the feeling that I'm winging it.",
        content: `
So, a while ago, I started carving out my own little space in the digital universe. But somewhere along the way, I stalled — trying to learn ReactJS *and* be productive at the same time was just... overwhelming.

Fast forward a few years, and here we are — with ChatGPT, a tool that has become the legendary mentor I always wished I had.

Here's how I finally got past the decision paralysis and committed to building again.
`
    },
];

export default blogPosts; // Export the array so other files can use it
