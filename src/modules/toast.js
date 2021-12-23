import React from "react";
import { Link } from "react-router-dom";

export default function toast() {
  return (
    <div>
      <div id="bookmark-toast">
        <h1>
          Bookmark Added To{" "}
          <Link
            style={{
              borderBottom: "1px solid",
              textDecoration: "none",
              color: "black",
            }}
            to="knowledgecenter"
          >
            Your List
          </Link>
        </h1>
      </div>

      <div id="bookmark-toast-duplicate">
        <h1>
          Bookmark Already Added To{" "}
          <Link
            style={{
              borderBottom: "1px solid",
              textDecoration: "none",
              color: "black",
            }}
            to="knowledgecenter"
          >
            Your List
          </Link>
        </h1>
      </div>
    </div>
  );
}
