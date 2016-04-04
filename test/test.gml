// test statements

globalvar i, j;
repeat(5){
    hi()
}
do{

} until (false)
exit;

// test expressions

5 mod 6
5 div 6
$50

// test array syntax

ds[0]
ds[0, 5]
ds[@0, 5]
ds[| 5]
ds[? "Hi"]
ds[# 4, 5]

// test bugs

if 2 + 2 == 4 show_message("hello");
