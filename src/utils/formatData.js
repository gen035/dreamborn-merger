export const formatList = (list) => {
  const lines = list.trim().split('\n');
  const objectList = [];

  for (const line of lines) {
    const [countStr, ...nameParts] = line.trim().split(' ');
    const count = parseInt(countStr, 10);
    const name = nameParts.join(' ');
    const itemObject = { count, name };
    objectList.push(itemObject);
  }

  return objectList;
}

export const mergeLists = (lists) => {
  const mergedMap = new Map();

  // Iterate through each array
  lists.forEach((list) => {
    // Iterate through each object in the array
    list.forEach(({ count, name }) => {
      if (mergedMap.has(name)) {
        // If the name is already in the map, update the count
        mergedMap.set(name, mergedMap.get(name) + count);
      } else {
        // If the name is not in the map, add it with the current count
        mergedMap.set(name, count);
      }
    });
  });

  // Convert the map back to an array of objects
  const mergedArray = Array.from(mergedMap, ([name, count]) => ({ count, name }));

  return mergedArray;
}

export const validateArrays = (arr) => {
  // Filter subarrays with more than 0 items
  const nonEmptyArrays = arr.filter(subarray => Array.isArray(subarray) && subarray.length > 0);
  // Check if there are at least two non-empty arrays
  return nonEmptyArrays.length >= 2;
}

export const formatArrayToString = (arr) => {
  // Map each object to a formatted string
  const formattedStrings = arr.map(item => `${item.count} ${item.name}`);
  // Join the formatted strings with line breaks
  const resultString = formattedStrings.join('\n');
  return resultString;
}