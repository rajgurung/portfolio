// This is a mock database — an array of blog post objects
const blogPosts = [
    {
        slug: "end-of-hardcore-coding",
        title: "AI Killed the Coding Star",
        date: "2026-01-10 — January",
        excerpt: "800 million ChatGPT users. 79% of developers already on board.",
        content: `With heavy usage of AI assisted coding, your sharp knife of coding skills will dull. It has to. You cannot sharpen everything at once. As you gain other skills this era demands, something else gives.`,
    },
    {
        slug: "big-bang-update", // URL path identifier (used in the route)
        title: "A Big Bang Update!! A Lot Has Happened Since the Last Blog", // Post title
        date: "2025-10-01 — October", // Published date
        excerpt: "After my last post about colleagues being laid off, I did not expect to be writing this one so soon. But here I am, redundant.", // Short preview shown on homepage
        content: `Eight years in the same company, and then suddenly, right in the middle of thinking about technical excellence, an email lands: "Your role is at risk." I panicked....`, // Full content for the post page
    },
    {
        slug: "you-have-been-impacted", // URL path identifier (used in the route)
        title: "You've Been Impacted, Layoffs", // Post title
        date: "2025-06-13 — June", // Published date
        excerpt: "The room feels quieter with every goodbye. Their absence echoes louder than silence.", // Short preview shown on homepage
        content: `Each time, I'd steel myself. Muster a quiet moment of 'whatever comes, comes,' then open my inbox. I felt quiet relief—followed by guilt for being spared....`, // Full content for the post page
    },
    {
        slug: "decision-paralysis", // URL path identifier (used in the route)
        title: "Overcoming Decision Paralysis", // Post title
        date: "2025-04-20 — April", // Published date
        excerpt: "With knowledge comes clarity — or so you'd think.", // Short preview shown on homepage
        content: `Choosing a project is so hard. You want to work on a project thats going to be the best, the most impactful and the best...`, // Full content for the post page
    },
    {
        slug: "building-my-site",
        title: "React + Vibes = This Site",
        date: "2025-04-18 — April",
        excerpt: "I'm getting things done in React, but I can't shake the feeling that I'm winging it.",
        content: `
So, a while ago, I started carving out my own little space in the digital universe. But somewhere along the way, I stalled — trying to learn ReactJS *and* be productive at the same time was just... overwhelming.

Fast forward a few years, and here we are — with ChatGPT, a tool that has become the legendary mentor I always wished I had.

Here's how I finally got past the decision paralysis and committed to building again.
`
    },
];

export default blogPosts; // Export the array so other files can use it
