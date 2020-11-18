import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <section>
        <div className="navContent">
          <div className="navLinks">
            <div className="navLinks">
                <Link to="/">Posts</Link>
            </div>
          </div>
        </div>
      </section>
    </nav>
  )
}
