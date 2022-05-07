import React from 'react';
// import { withRouter } from "react-router-dom";

function ScrollIntoView({ location, children }) {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return children
}


export default ScrollIntoView;