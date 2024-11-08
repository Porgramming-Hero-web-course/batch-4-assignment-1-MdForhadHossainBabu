- In TypeScript, updating an object with optional properties is made easy using the Partial utility type. The updateProfile function demonstrates how to update a Profile object by allowing partial updates.


# How it's Work 

- The updateProfile function allows partial updates, meaning you can provide only the fields you want to update (in this case, age).

- The result is a new object that combines the original profile with the updates.

# Conclusion 
- The updateProfile function showcases the power of TypeScript's Partial type, making it simple and type-safe to update objects. By using Partial, you ensure that only the necessary properties are updated, without the risk of overwriting required fields.