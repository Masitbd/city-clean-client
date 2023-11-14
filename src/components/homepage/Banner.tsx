export default function Banner() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1661662917928-b1a42a08d094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to City Cleans Aps
          </h1>
          <p className="mb-5">
            Professional cleaning service in Dhaka. We are here to make your
            space a clean and pleasant environment to work in or live in
          </p>
          {/* <button className="btn btn-primary">Clean Now</button> */}
        </div>
      </div>
    </div>
  );
}
