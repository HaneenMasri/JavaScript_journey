// ===== 1. Create variables using var, let, and const =====
// Show differences in scope, reassignment, and hoisting
// Use valid identifier naming conventions

// Hoisting example
console.log(varTest); // undefined 
var varTest = "varTest";

// console.log(letTest); // ReferenceError
let letTest = "letTest";

// console.log(constTest); // ReferenceError
const constTest = "constTest";

// Reassignment
varTest = "var changed";   // allowed
letTest = "let changed";   // allowed
// constTest = "Const changed"; // 

console.log(varTest, letTest, constTest); // Check values after reassignment

// Scope Differences
function functionScope() {
  var funcVar = "var inside function";
  console.log(funcVar); // accessible inside function
}
functionScope();
// console.log(funcVar); // ReferenceError outside function

if (true) {
  let blockLet = "let inside block";
  const blockConst = "const inside block";
  console.log(blockLet, blockConst); // accessible inside block
}
// console.log(blockLet, blockConst); // ReferenceError outside block

// ===== 2. Create variables for all data types and log their typeof =====
let userName = "Haneen"; // string
let studentAge = 20;      // number
let isActive = true;      // boolean
let notDefined;           // undefined
let emptyValue = null;    // null
let studentProfile = { name: "Haneen", age: 20 }; // object
let hello_World = [90, 80, 95]; // array
function greet() { console.log("Hello!"); }       // function

console.log(userName, typeof userName);
console.log(studentAge, typeof studentAge);
console.log(isActive, typeof isActive);
console.log(notDefined, typeof notDefined);
console.log(emptyValue, typeof emptyValue);
console.log(studentProfile, typeof studentProfile);
console.log(hello_World, typeof hello_World);
console.log(greet, typeof greet);

// ===== 3. Create a student profile using strings =====
let studentName = "Omar";
let studentLevel = "Beginner";

// 1) Using escape sequences
let profileEscape = "Student Name: " + studentName + " — Level: " + studentLevel;
console.log("Using escape sequences:\n" + profileEscape);

// 2) Using concatenation
let profileConcat = "Student Name: " + studentName + " — Level: " + studentLevel;
console.log("Using concatenation:\n" + profileConcat);

// 3) Using template literals
let profileTemplate = `Student Name: ${studentName} — Level: ${studentLevel}`;
console.log("Using template literals:\n" + profileTemplate);

// ===== 4. Demonstrate string methods =====
console.log("trim():", `"${studentName.trim()}"`);
console.log("slice():", studentName.trim().slice(0, 2));
console.log("toUpperCase():", studentName.trim().toUpperCase());
console.log("includes('ma'):", studentName.trim().includes("ma")); // false
console.log("includes('O'):", studentName.trim().includes("O"));   // true
console.log("repeat():", studentName.trim().repeat(3));
console.log("replace():", studentName.trim().replace("O", "A"));

// ===== 5. Arithmetic Operators + Type Coercion =====
let a = 10, b = 3;
console.log("Addition (+):", a+b);
console.log("Subtraction (-):", a-b);
console.log("Multiplication (*):", a*b);
console.log("Division (/):", a/b);
console.log("Modulus (%):", a%b);

// Unary plus and negation
let y = "5";
console.log("Unary plus (+):", +y); // convert string to number
console.log("Negation (-):", -a);

// Assignment operators
let c = 5;

c += 3; 
console.log("c += 3:", c);
c -= 2;
console.log("c -= 2:", c);
c *= 2;
console.log("c *= 2:", c);
c /= 4;
console.log("c /= 4:", c);
c %= 2;
console.log("c %= 2:", c);


// Type coercion examples
console.log("'5' + 3 =", '5'+3); // implicit string concatenation
console.log("'5' - 3 =", '5'-3); // implicit conversion to number
console.log("'5' * '2' =", '5'*'2'); // implicit conversion to number
console.log("Number('5') + 3 =", Number('5')+3); // explicit conversion
console.log("String(5) + 3 =", String(5)+3);   // explicit conversion
console.log("Boolean(0) =", Boolean(0));
console.log("Boolean(1) =", Boolean(1));

// ===== 6. Numbers + Math object =====
let num = 12.3456;
console.log("toFixed(2):", num.toFixed(2));
console.log("parseInt('123px'):", parseInt('123px'));
console.log("parseFloat('12.34abc'):", parseFloat('12.34abc'));
console.log("isInteger(12.34):", Number.isInteger(12.34));
console.log("isInteger(12):", Number.isInteger(12));

console.log("Math.random():", Math.random());
console.log("Math.floor(3.7):", Math.floor(3.7));
console.log("Math.ceil(3.2):", Math.ceil(3.2));
console.log("Math.max(1,5,3):", Math.max(1,5,3));
console.log("Math.min(1,5,3):", Math.min(1,5,3));

    //7. Build a system where the program asks the user for:
    // - Student name
    // - Age
    // - Whether they are active (yes/no)
    // - Three grades
    // Handle user input using prompt(), and clean/convert types properly.


// 7. Ask user for student data

// Student name
let studentName1 = prompt("Enter student name:");

// Age (convert to number)
let studentAge1 = Number(prompt("Enter student age:"));

// Active status (convert yes/no to boolean)
let isActive1 = prompt("Is the student active? (yes/no)").toLowerCase() === "yes";

// Three grades (convert each to number)
let grade1 = Number(prompt("Enter grade 1:"));
let grade2 = Number(prompt("Enter grade 2:"));
let grade3 = Number(prompt("Enter grade 3:"));

// Store grades in an array
let grades = [grade1, grade2, grade3];

// Log to check
console.log("Student Name:", studentName1);
console.log("Age:", studentAge1);
console.log("Active:", isActive1);
console.log("Grades:", grades);

// 8. Classify student based on average

let average = (grade1 + grade2 + grade3) / grades.length;

let classification;

if (average >= 85) {
  classification = "Excellent";
} else if (average >= 60) {
  classification = "Good";
} else {
  classification = "Needs Improvement";
}

console.log(`${studentName1}'s average: ${average}`);
console.log("Classification (if-else):", classification);

// Classification using ternary operator
let classificationTernary = average >= 85 ? "Excellent" : average >= 60 ? "Good" : "Needs Improvement";

console.log("Classification (ternary):", classificationTernary);


//9. Use the nullish coalescing operator (??) and logical OR (||)
// to provide default values for missing inputs.

let nameInput = "";
let ageInput=22;

// nullish coalescing (??)
let name = nameInput || "Default Name";
let age = ageInput ?? 18;

console.log("Name:", nameInput);
console.log("Age:", age);

// ===== 10. Convert the student profile into an object =====
let userStudent = {
  id: 1,
  name: studentName1,   // from prompt
  age: studentAge1,     
  grades: grades,       
  isActive: isActive1   
};

console.log("User student object:", userStudent);

// ===== 11. Multiple students array =====
let students = [
    userStudent,
    {id:2, name:"Lina", age:17, grades:[75,80,70], isActive:false},
    {id:3, name:"Hadi", age:16, grades:[95,88,92], isActive:true}
];

// Add / Remove / Search / Sort / Slice / Join
students.push({id:4, name:"Sara", age:15, grades:[], isActive:true}); // إضافة طالب
students.pop(); // إزالة آخر طالب

console.log("Search by name:", students.find(s => s.name === "Lina")); // البحث
students.sort((a,b) => a.age - b.age); // ترتيب حسب العمر
console.log("First 2 students:", students.slice(0,2)); // أخذ أول طالبين
console.log("All names:", students.map(s => s.name).join(", ")); // أسماء الطلاب

// ===== 12. Loops =====
console.log("All names:");
for (let s of students) console.log(s.name);

console.log("All grades:");
for (let i = 0; i < students.length; i++) console.log(students[i].grades);

console.log("Active students:");
let i = 0;
while(i < students.length){
  if(!students[i].isActive){ i++; continue; }
  console.log(students[i].name);
  i++;
}

console.log("Do-while IDs:");
let j = 0;
do {
  console.log(students[j].id);
  j++;
} while(j < students.length);

console.log("Labeled loop:");
outerLoop:
for(let s of students){
  if(s.name === "Hadi") break outerLoop;
  console.log(s.name);
}

// ===== 13. Generate 5 random grades for each student =====
for(let s of students){
  if(!s.grades) s.grades = [];
  for(let k = 0; k < 5; k++){
    s.grades.push(Math.floor(Math.random() * 101)); // رقم عشوائي من 0 لـ 100
  }
}

// ===== 14. Nested loops for student grades =====
for(let s of students){
  console.log(`${s.name}'s grades:`);
  for(let g of s.grades) console.log(" -", g);
}

// ===== 15. Template literal report =====
for(let s of students){
  let total = s.grades.reduce((a,b) => a + b, 0);
  let highest = Math.max(...s.grades);
  let average = total / s.grades.length;
  let status = average >= 85 ? "Excellent" : average >= 60 ? "Good" : "Needs Improvement";

  console.log(`
ID: ${s.id}
Name: ${s.name}
Average Grade: ${average.toFixed(2)}
Highest Grade: ${highest}
Active: ${s.isActive ? "Yes" : "No"}
Status: ${status}
Grades: ${s.grades.join(", ")}
-------------------
  `);
}

