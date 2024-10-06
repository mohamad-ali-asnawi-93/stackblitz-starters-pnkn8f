# Instructions  

  Let's create functions that `triple` (3 times) a number, or `quadruple` (4 times) a number

  Reference for `double` function:
  ```javascript
  function double(number) {
    const result = number * 2;
    return result;
  }
  ```

 Here is the revised step-by-step coding exercise:

## Steps

1. Create a function named `triple` that accepts a number and returns the number multiplied by `3`.

2. Create a variable `tripled` and assign it the result of calling the `triple` function with the argument `3`.


3. Use `console.log()` to output the value of `tripled` and run the code.


4. Console should look like:

```
9
```
<details>
<summary>Full code</summary>

```javascript
function triple(number) {
  const result = number * 3;
  return result;
}

const tripled = triple(3);
console.log(tripled);
```
</details>

## Practice

1. Create a function named `quadruple` that accepts a number and returns the number multiplied by `4`.


2. Create a variable `quadrupled` and assign it the result of calling the `quadruple` function with the argument `4`.



3. Use `console.log()` to output the value of `quadrupled` and run the code.

4. Console should look like:

```
9
16
```

<details>
<summary>Full code</summary>

```javascript
function triple(number) {
  const result = number * 3;
  return result;
}

const tripled = triple(3);
console.log(tripled);

function quadruple(number) {
  const result = number * 4;
  return result;
}

const quadrupled = quadruple(4);
console.log(quadrupled);
```
</details>