- In TypeScript, accessing properties of an object can be type-safe with generics. The getProperty function demonstrates how to safely access properties of an object, ensuring that only valid keys are used.

# How it's work 
- The getProperty function allows you to safely access the properties of the person object using the keys 'name' or 'age'.

- TypeScript ensures that only valid keys ('name', 'age') can be passed to the function.


# Conclusion
- The getProperty function is a great example of using generics in TypeScript to access object properties safely. By leveraging keyof T, it ensures that you can only access existing properties of the object, preventing runtime errors and improving code quality.