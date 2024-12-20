# Unexpected String Concatenation in JavaScript

This repository demonstrates a common JavaScript error caused by loose typing: unexpected string concatenation.

## The Bug

The `foo` function is intended to add two numbers. However, due to JavaScript's dynamic typing, if one of the arguments is a string, the `+` operator performs string concatenation instead of numerical addition. This leads to an incorrect result.

## The Solution

To correct this, type checking and explicit conversion to numbers are recommended. The solution file provides an improved version of the function that handles both number and string inputs correctly.