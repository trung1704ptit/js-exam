function get(obj, path, defaultVal) {
  // obj is object, and path is string
  let current = obj;

  const keys = path.split("."); // an array

  for (let key of keys) {
    // Check if the key exists in the current object
    if (current && key in current) {
      current = current[key]; // Update current to the next nested value
    } else {
      return defaultVal; // Return the default value if key does not exist
    }
  }

  return current;
}
