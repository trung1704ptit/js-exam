import React, { useState, useEffect } from "react";

function withLoading(WrappedComponent) {
  return function EnhancedComponent(props) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
      return <div>Loading ...</div>;
    }

    return <WrappedComponent {...props} />
  };
}

// how to use it with Component
function DataComponent({ data }) {
  return (  
    <div>This is component</div>
  )
}


const DataWithLoading = withLoading(DataComponent)

export {
  DataWithLoading
}