/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

export default function ServiceCard({ data }: { data: any }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-md bg-slate-50">
      <figure>
        <img
          src="https://media.istockphoto.com/id/1392421572/photo/nurse-cleaning-hospital-ward.jpg?s=2048x2048&w=is&k=20&c=H8kvHCj6fezaR81gUFq8Q1ANN6nsKZiBHguTNRh6T3I="
          alt="Shoes"
          className="h-52 w-full object-cover "
          //   width={100}
          //   height={100}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data?.title}
          <div className="badge badge-sm badge-primary">
            {data?.category?.title}
          </div>
        </h2>
        <p>{data?.description}</p>
        <div className="flex justify-between">
          <p className="font-bold">Price:</p>
          <span>{data?.price}tk</span>
        </div>
        <Link href={`/service/${data?._id}`} className="btn btn-secondary">
          See Details
        </Link>
      </div>
    </div>
  );
}
