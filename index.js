/*
  найти максимальную длину самого длинного подмассива
*/

const findLength = function (nums, k) {
  let left = 0;
  let curr = 0;
  let length = nums.length;
  let ans = 0;

  for (let right = 0; right < length; right++) {
    curr += nums[right];

    while (curr > k) {
      curr -= nums[left];
      left++;
    }

    const temporryAns = right - left + 1;

    ans = Math.max(ans, temporryAns);
  }

  return ans;
};

console.log(findLength([3, 1, 2, 7, 4, 2, 1, 1, 5], 8)); /// 4
