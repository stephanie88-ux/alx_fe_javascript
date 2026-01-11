const arg = process.argv[2];
const num = Number(arg);

if (Number.isNaN(num)) {
   console.log("Not a number");  

} else {
   console.log("My number: " + num);
}  