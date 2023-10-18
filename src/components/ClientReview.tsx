import ReviewCard from "@/app/reuseable/ReviewCard";
import React from "react";

export default function ClientReview() {
  return (
    <div className="section-padding">
      <h2 className="section-heading">Upcomming Services</h2>
      <div className="card_div">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}
