# Format words into a sentence
https://www.codewars.com/kata/format-words-into-a-sentence/train/javascript

## Problem Domain
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string. Empty string values should be ignored. Empty arrays or null/nil values being passed into the method should result in an empty string being returned.

## Solution Overview
Filter through string(If no string, return empty string). Iterate through stirng using .slice(). If only two items, separate with 'and'. If greater than two items, separate each item with ',' and last item with ' and '.