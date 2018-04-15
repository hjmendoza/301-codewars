# Insert Dashes - 04.11.18
https://www.codewars.com/kata/use-map-to-double-the-values-in-an-array/train/javascript

## Problem Domain
In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
`
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
`

## Solution Overview
Take list of non-negative numbers/strings. Use .filter() to remove strings from input. Return new list 
