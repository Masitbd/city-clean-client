import NewsCard from "@/app/reuseable/NewsCard";
import React from "react";

export default function LatestNews() {
  return (
    <div className="section-padding">
      <h2 className="section-heading">Latest News</h2>
      <div className="card_div">
        <NewsCard />
        <NewsCard />
        <NewsCard />
      </div>
    </div>
  );
}
