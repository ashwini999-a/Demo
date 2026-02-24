let side1 = 10;
let side2 = 20;
let side3 = 30;
if(side1===side2 && side2===side3 && side3===side1)
{
    console.log("Triangle is equilateral");
}
else if(side1===side2 || side2===side3 || side3===side1)
{
    console.log("Triangle is isosceles");
}
else 
{
    console.log("Triangle is scalene");
}