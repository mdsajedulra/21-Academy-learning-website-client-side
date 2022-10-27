import React from 'react';

const Blog = () => {
    return (
        <div>
            <h1 className='mt-10 mb-3 text-3xl text-center'>Some Question And Answer</h1>
            <div className='p-5 mb-3 border rounded-lg hover:border-blue-600'>
                <h1 className='text-xl font-semibold'>1. What is cors?</h1>
                <p>Ans:- CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.</p>
            </div>
            <div className='p-5 mb-3 border rounded-lg hover:border-blue-600'>
                <h1 className='text-xl font-semibold'>2. Why are you using firebase? What other options do you have to implement authentication?
                </h1>
                <p>Ans:- Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                <br />
                <strong>Other Option:</strong>
                <p>cards, retina scans, voice recognition, and fingerprints.</p>

            </div>
            <div className='p-5 mb-3 border rounded-lg hover:border-blue-600'>
                <h1 className='text-xl font-semibold'>3. How does the private route work?
                </h1>
                <p>Ans:- The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
            </div>
            <div className='p-5 mb-3 border rounded-lg hover:border-blue-600'>
                <h1 className='text-xl font-semibold'>4. What is Node? How does Node work?</h1>
                <p>Ans:- Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    <br />
                    <br />
                    <strong>Working of Node.js:</strong>  Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>

            </div>
        </div>
    );
};

export default Blog;