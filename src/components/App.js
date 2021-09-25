import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listing, setListing] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((resp) => resp.json())
      .then((data) => setListing(data));
  }, []);

  const searchedTerm = listing.filter((item) =>
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then(() => setListing(listing.filter((item) => item.id !== id)));
  }

  return (
    <div className="app">
      <Header searchFunc={setSearchTerm} />
      <ListingsContainer listing={searchedTerm} removeItem={handleDelete} />
    </div>
  );
}

export default App;
