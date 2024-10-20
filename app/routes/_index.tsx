import { Link } from "@remix-run/react";

export default function _index() {
  return (
    <>
      <h1>
        Hello Remix!
      </h1>
      {/* <a href="/demo">Go to demo page</a> */}
      <Link to={"/demo"}>Go to demo page</Link>
    </>
  )
}