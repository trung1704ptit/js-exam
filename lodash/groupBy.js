function groupBy(array, key) {
  return array.reduce((acc, item) => {
    // Determine the group key
    const groupKey = typeof key === "function" ? key(item) : item[key];

    // If the group doesn't exist, create it
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    // Add the current item to the group
    acc[groupKey].push(item);

    return acc;
  }, {});
}

// testing

const data = [
  { category: "fruits", name: "apple" },
  { category: "fruits", name: "banana" },
  { category: "vegetables", name: "carrot" },
];

return {
  fruits: [
    { category: "fruits", name: "apple" },
    { category: "fruits", name: "banana" },
  ],
  vegetables: [{ category: "vegetables", name: "carrot" }],
};
