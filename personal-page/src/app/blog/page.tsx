"use client";
import React, {useRef, useEffect, useState } from 'react';
import BlogCalendar from '@/components/Calendar'
// Get data from file
//import blogData from '@/data/blogData.json';
import Navbar from '@/components/Navbar';
import { format, parseISO } from 'date-fns';
import { BlogPost } from '@/models/BlogPost';




const BlogPage: React.FC = () => {    
    // Refs to each blog post (use a map to associate dates with refs)
    const postRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [shouldFetch, setShouldFetch] = useState(true);
    const [newPost, setNewPost] = useState({ title: '', content: '' }); // Form state
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Check if user is logged in (e.g., check if token exists in localStorage)
        const token = localStorage.getItem('token');
        if (token) {
          setIsLoggedIn(true);
        }
      }, []);

    useEffect(() => {
        if (!shouldFetch) return;
        const fetchData = async () => {
            try {
                const res = await fetch('http://localhost:8000/api/blogposts');
                const data = await res.json()
                const formattedPosts = data.map((post: BlogPost) => ({
                    ...post,
                    date: format(parseISO(post.date), 'yyyy-MM-dd'), // Adjust as needed
                }));

                setBlogPosts(formattedPosts);
                setShouldFetch(false);
            } catch(error) {
                console.error('Error fetching blog posts:', error);
            } finally {
                setLoading(false);
            }

        };
        fetchData();
    }, [shouldFetch])

    if (loading) {
        return <div>Loading...</div>;
    }

    //const blogPosts = use(fetchBlogPosts());
    const blogDates = blogPosts.map((post: any) => post.date);

    // Scroll to the blog post when a calendar date is clicked
    const handleDateClick = (date: string) => {
        const postElement = postRefs.current[date];
        if (postElement) {
            postElement.scrollIntoView({ behavior: 'smooth' });  // Scroll to the post smoothly
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setNewPost({ ...newPost, [e.target.name]: e.target.value });
      };

    const handleCreatePost = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
    
        try {
          const token = localStorage.getItem('token');
          const res = await fetch('http://localhost:8000/api/blogposts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`, // Attach token for authorization
            },
            body: JSON.stringify(newPost),
          });
    
          if (res.ok) {
            const newBlogPost = await res.json();
            setBlogPosts((prevPosts) => [
              ...prevPosts,
              { ...newBlogPost, date: format(parseISO(newBlogPost.date), 'yyyy-MM-dd') },
            ]);
            setNewPost({ title: '', content: '' }); // Reset form
          } else {
            setError('Failed to create a new blog post.');
          }
        } catch (error) {
          setError('An error occurred while creating the blog post.');
        }
      };

    return (
        <div className="text-gray-300 bg-gray-900 min-h-screen flex flex-col justify-between">
            <Navbar />
            <div className="max-w-5xl mx-auto p-8 flex-grow">
                <h1 className="text-3xl font-bold mb-6">Blog Section</h1>
                <div className="flex flex-col md:flex-row md:space-x-8">
                    <div className="flex-1">
                        <p className="mb-6">Check out our posts and publication dates below.</p>                    
                        
                        {/* Other blog content */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-semibold">Latest Posts</h2>
                            {blogPosts.map((post: any) => (
                            <div key={post.date} 
                                className="mb-6" 
                                ref={(el) => (postRefs.current[post.date] = el)}
                            >
                                <h3 className="text-xl font-bold">{post.title}</h3>
                                <p className="text-sm text-gray-500">Published on: {post.date}</p>
                                <p>{post.content}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='md:w-1/2 mt-8 md:mt-0'>
                        {/* Render the calendar and pass the blog dates */}
                        <h2 className="text-2xl font-semibold mb-4 text-center">Blog Calendar</h2>
                        <BlogCalendar highlightedDates={blogDates} onDateClick={handleDateClick}/>
                    </div>
                </div>
            </div>
            {/* Show blog creation form if the user is logged in */}
            {isLoggedIn && (
            <div className="mt-10">
                <h2 className="text-2xl font-bold mb-4">Create a New Blog Post</h2>
                {error && <p className="text-red-500">{error}</p>}
                <form onSubmit={handleCreatePost} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block font-medium">Title</label>
                    <input
                    type="text"
                    id="title"
                    name="title"
                    value={newPost.title}
                    onChange={handleInputChange}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block font-medium">Content</label>
                    <textarea
                    id="content"
                    name="content"
                    value={newPost.content}
                    onChange={handleInputChange}
                    rows={6}
                    required
                    className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Create Post
                </button>
                </form>
            </div>
            )}
        </div>
      );
}



export default BlogPage;