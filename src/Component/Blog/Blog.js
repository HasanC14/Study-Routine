import React from "react";
import "./Blog.css";
const Blog = () => {
  return (
    <div className="Blog">
      <h1 className="text-center mb-5">Blog</h1>
      <div className="question">
        <h1>How does ReactJS work under the hood?</h1>
        <p>
          React reads these objects and uses them to create HTML elements on the
          virtual DOM, after which it gets synced with the real DOM. So we'll
          have trees of objects on the virtual DOM and trees of objects on the
          real DOM. React automatically updates the associated DOM element when
          we change data on a React element.
        </p>
      </div>
      <div className="question">
        <h1>What are the differences between props and state?</h1>
        <p>
          Props are used to pass data from one component to another. The state
          is a local data storage that is local to the component only and cannot
          be passed to other components. The this. setState property is used to
          update the state values in the component.
        </p>
      </div>
      <div className="question">
        <h1>Why useEffect is used in React??</h1>
        <p>
          The motivation behind the introduction of useEffect Hook is to
          eliminate the side-effects of using class-based components. For
          example, tasks like updating the DOM, fetching data from API
          end-points, setting up subscriptions or timers, etc can be lead to
          unwarranted side-effects.
        </p>
      </div>
    </div>
  );
};

export default Blog;
