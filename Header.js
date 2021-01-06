import React from 'react'

const Header = ({ todos }) => {
  return (
    <div className = 'main-head  d-flex justify-content-between container-fluid bg-primary'>
   <i className="fa fa-user"></i>
   <div className = 'sub-main'>
   <span className = 'sub badge badge-danger'>{todos.length}</span>
   <i className="fa fa-bell"></i>
   </div>
    </div>
  );
}

export default Header;