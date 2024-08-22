function findLongestNames(name1, name2, name3) {
  let maxLength = Math.max(name1.length, name2.length, name3.length);
  
  if (name1.length === maxLength && name2.length === maxLength && name3.length === maxLength) {
    return `All three names, ${name1}, ${name2}, and ${name3}, are the same length.`;
  } else if (name1.length === maxLength && name2.length === maxLength) {
    return `${name1} and ${name2} tie for the longest name.`;
  } else if (name1.length === maxLength && name3.length === maxLength) {
    return `${name1} and ${name3} tie for the longest name.`;
  } else if (name2.length === maxLength && name3.length === maxLength) {
    return `${name2} and ${name3} tie for the longest name.`;
  } else if (name3.length === maxLength) {
    return `${name3} has the longest name.`;
  } else if (name2.length === maxLength) {
    return `${name2} has the longest name.`;
  } else if (name1.length === maxLength) {
    return `${name1} has the longest name.`;
  }
}

console.log(findLongestNames('Durell', 'Peter', 'John')); // "Durell has the longest name."