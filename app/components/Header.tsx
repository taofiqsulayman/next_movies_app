'use client'

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const showSearchBar = pathname === "/" || pathname.includes("/search");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    router.push(`/search/${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div>
      <nav className="navbar bg-dark border-bottom border-body">
        <div className="container-md">
          <a href="/" className="navbar-brand text-white">
            Movies DB App
          </a>
          {!showSearchBar && (
            <div className="btn btn-outline-success me-2" onClick={router.back}>
              Back
            </div>
          )}
          {showSearchBar && (
            <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
