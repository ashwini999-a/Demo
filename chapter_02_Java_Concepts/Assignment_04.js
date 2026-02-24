let a=2029
if(a % 4===0)
{
    console.log("This is leap year");
}
    else if(a % 100!==0)
{
    console.log("This is not leap year");
}
else if(a % 400===0)
{
    console.log("This is leap year");
}
else
{
    console.log("This is not leap year");
}