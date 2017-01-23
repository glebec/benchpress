# Sorting Algorithm Benchmarking Demo

[![Greenkeeper badge](https://badges.greenkeeper.io/glebec/benchpress.svg)](https://greenkeeper.io/)

A small visualization of sorting algorithms.

```sh
npm install # or yarn install
npm start # opens browser/index.html in your default browser
```

## Algorithms

Algorithm | Average Time Complexity | Worst Time Complexity | Worst Space Complexity | Notes
--- | --- | --- | --- | ---
Native (Quicksort) | O(n·log(n)) | O(n^2) | O(log(n)) | In practice / on average, is very quick
Merge Sort | O(n·log(n)) | O(n·log(n)) | O(n) | Worst case is better than Quicksort
Bubble | O(n^2) | O(n^2) | O(1) | Simple, but terrible time complexity
