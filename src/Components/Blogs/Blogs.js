import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-container'>
            <div>
                <h1>What is Context API..?</h1>
                <h3>The  Context API n React is a way for a React app to effectively produce global variables
                    that can be passed around. This is the alternative way to prop drilling
                    or sending props from grandparent to child to parent, and so on. Context is
                    also touted as an easier, lighter approach to state management using Redux.
                    React.createContext() is all you need. It returns a consumer and a provider.
                    Provider is a component
                    that as it's names suggests provides the state to its children. It will hold the "store"
                    and be the parent of all the components that might need that store. Consumer as it so happens
                    is a component that consumes and uses the state.</h3>
            </div>
            <div>
                <h1> What are Semantic Tag/Elements..?</h1>
                <h3>
                    Semantic HTML elements are those that clearly
                    describe their meaning in a human and machinereadable way.One of the most important features
                    of HTML5 is it's semantic elements. Semantic HTML refers to syntax that makes the HTML more comprehensible
                    by better defining the different sections of web pages. It makes web pages
                    more informative and adaptable, allowing browsers and search engines to better interpret content.

                </h3>
            </div>
        </div>
    );
};

export default Blogs;