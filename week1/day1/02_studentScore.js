/*
1. Create a function named `calculateGrade` that takes a student's score as a parameter.

2. Use `switch` statement inside the function - 
   - Use a `switch` statement with the condition `true`.
   - Use `case` statements to check different score ranges and return the corresponding grade.

3. Declare and initialize the variable

4. Call the function and print the result


*/

function calculateGrade(studentScore) {
   switch (true) {
      case (studentScore >= 50 && studentScore <= 60):
         return "Grade E";
      case (studentScore > 60 && studentScore <= 70):
         return "Grade D";
      case (studentScore > 70 && studentScore <= 80):
         return "Grade C";
      case (studentScore > 80 && studentScore <= 90):
         return "Grade B";
      case (studentScore > 90 && studentScore <= 100):
         return "Grade A";
      default:
         return "Invalid or Failed";
   }
}

let studentScore = 90;
console.log(calculateGrade(studentScore));   
