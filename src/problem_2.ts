{


  function removeDuplicates(numbers: number[]) {
    return numbers.filter(
      (value, index, self) => self.indexOf(value) === index
    );
  }
}
