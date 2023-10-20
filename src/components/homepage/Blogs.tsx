import BlogCard from "@/components/reuseable/BlogCard";
import React from "react";

export default function Blogs() {
  return (
    <div className="section-padding">
      <h2 className="section-heading">Our Blogs</h2>
      <div className="card_div">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
