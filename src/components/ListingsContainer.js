import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listing, removeItem }) {
  const displayListings = listing.map((item) => {
    return (
      <ListingCard
        key={item.id}
        id={item.id}
        image={item.image}
        location={item.location}
        description={item.description}
        removeItem={removeItem}
      />
    );
  });
  return (
    <main>
      <ul className="cards">{displayListings}</ul>
    </main>
  );
}

export default ListingsContainer;
