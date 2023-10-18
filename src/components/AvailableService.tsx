import ServiceCard from "@/app/reuseable/ServiceCard";
import React from "react";

export default function AvailableService() {
  return (
    <div className="section-padding">
      <h2 className="section-heading">Available Services</h2>
      <div className="card_div">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
}
