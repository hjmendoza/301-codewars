# Simple validation of a username with regex - 04.23.18
https://www.codewars.com/kata/highest-scoring-word

## Problem Domain
Given a string of words, you need to find the highest scoring word.Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc. You need to return the highest scoring word as a string.If two words score the same, return the word that appears earliest in the original string. All letters will be lowercase and all inputs will be valid.

## Solution Overview
Split string of words into individual words using regex. Used map to seperate each word into individual letters. Converted string characters to ASCII numbers using charCodeAt. Subtracted 96 when using the charCodeAt() since 97 is the ASCII number of "a", 98 of "b", etc. Subtracted 96 gives the position in the alphabet, which is a=1, b=2 etc. Used the reduce method to get the sum for each word. Used Math.max() to get the highest number and then using the indexOf method to get its equivalent highest scoring word from the sentence.