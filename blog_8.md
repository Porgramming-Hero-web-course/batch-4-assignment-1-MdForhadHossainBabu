- In TypeScript, you can ensure that an object contains specific keys using generics and the keyof operator. The validateKeys function demonstrates how to check if an object contains all the specified keys.

# How it's work
- The function checks whether each key in the keysToCheck array ('name' and 'age') exists in the person object.
- It returns true if all keys are found; otherwise, it returns false.


# Conclusion 

- The validateKeys function is a simple yet powerful way to validate if an object contains specific keys, leveraging TypeScript's type system to ensure safety and correctness.