# Replace All Dots - 03.13.18
https://www.codewars.com/kata/my-head-is-at-the-wrong-end

## Problem Domain
You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics - simples!

## Solution Overview
Followed psuedocode. Sorted arr such that the arr[2] is set to the first position and arr[0] is set to the last position while arr[1] stays in place. 
