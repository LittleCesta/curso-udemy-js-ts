const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// Concatenando arrays com o método concat
// const nums3 = nums1.concat(nums2, [7, 8, 9], 'Oi');

// Concatenando arrays com o operador spread (espalhamento)
// Com o spread, podemos espalhar os elementos de um array em outro array
// Também podemos espalhar strings, pois strings são iteráveis
const nums3 = [...nums1, ...nums2, ...[7, 8, 9], ...'Oi'];
console.log(nums3);