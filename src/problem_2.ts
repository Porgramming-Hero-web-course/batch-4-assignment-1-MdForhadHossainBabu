{
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  function removeDuplicates(numbers: number[]) {
    return numbers.filter(
      (value, index, self) => self.indexOf(value) === index
    );
  }
}
