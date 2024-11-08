- In TypeScript, when working with multiple types that share some properties, we can use union types to handle them efficiently. The calculateShapeArea function demonstrates how to calculate the area of different shapes like circles and rectangles.

- We define two types: Circle and Rectangle, each representing the properties of those shapes.
- The Shape type is a union type that can be either a Circle or a Rectangle.
- The calculateShapeArea function checks the type of shape and calculates the area based on its properties.

# Circle & Rectangle law 
- For the circle, it uses the formula π * radius².
- For the rectangle, it uses the formula width * height.

# Conclusion
- The calculateShapeArea function demonstrates how to handle different shapes with union types in TypeScript. By checking the shape type, it can calculate the area for circles and rectangles, showcasing TypeScript's type-safety features.