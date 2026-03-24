import React, { useState } from "react";

function StreamList() {
  const [movieName, userSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User entered the name:", movieName);
    userSearchTerm("");
  };

  return (
    <div className="card">
      <h2>Welcome to StreamList</h2>
      <p>Search media by title or actor.</p>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter a movie or actor"
          value={movieName}
          onChange={(e) => userSearchTerm(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default StreamList;