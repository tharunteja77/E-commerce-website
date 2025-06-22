import { useState } from "react";

function ProductHighlights({ highlights }) {
  const [showAll, setShowAll] = useState(false);
  const highlightItems = highlights?.split(',').map(item => item.trim()) || [];

  const visibleItems = showAll ? highlightItems : highlightItems.slice(0, 5);
  const hasMore = highlightItems.length > 5;

  return (
    <div>
      <ul className="list-disc list-inside text-gray-600 space-y-1">
        {visibleItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {hasMore && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-2 text-blue-500 hover:underline focus:outline-none"
        >
          {showAll ? "See less" : "See more"}
        </button>
      )}
    </div>
  );
}

export default ProductHighlights;
