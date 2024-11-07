{
  function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every((key) => key in obj);
  }

  // Sample usage:
  const person: { name: string; age: number; email: string } = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com',
  };

  console.log(validateKeys(person, ['name', 'age'])); // Output: true
  console.log(validateKeys(person, ['name', 'age'])); // Output: false
}