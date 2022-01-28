import React from "react";
import Blogs from "../../data/blogs.json";
const Blog = () => {
  return (
    <div className="blog-section">
      <h1>Explore Learn Build 🚀</h1>
      <p>
        I am self-taught developer trying to learn new technologies and sharing
        my experiences and knowledge
      </p>
      <div className="blogs">
        {Blogs.map((blog, i) => {
          return (
            <div className="blog-card" key={i}>
              <div className="blog-name">
                <div className="tags">
                  {blog.tags.map((tag, i) => (
                    <span className="tag" key={i}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="blog-description">
                  <h3 className="title">{blog.title}</h3>
                  <span className="description">{blog.description}</span>
                </div>
              </div>
              <div className="learn-more">
                <a
                  href={blog.link}
                  className="redirect"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Learn more <i className="far fa-arrow-right"></i>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
