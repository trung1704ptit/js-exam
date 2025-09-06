/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // empty case:
    if (!intervals.length) return [];

    // 1. sort interval by start
    intervals.sort((a, b) => a[0] - b[0])

    const merged = [];

    for (const interval of intervals) {
        // if no overlap with last merged inteval, push new
        if (merged.length == 0 || 
            merged[merged.length - 1][1] < interval[0]
        ) {
            merged.push(interval)
        } else {
            // overlap: extend the end

            merged[merged.length - 1][1] = Math.max(
                merged[merged.length - 1][1],
                interval[1]
            )
        }
    }

    return intervals;
};

/*
Cách tiếp cận — Greedy kết hợp với Sort
1. Sắp xếp intervals theo thứ tự tăng dần của start.

2. Khởi tạo một mảng merged trống.

3. Duyệt qua từng interval đã sắp xếp:

    - Nếu merged rỗng hoặc merged[merged.length - 1][1] < current[0], thì không chồng chéo → push interval hiện tại vào merged.

    - Ngược lại, chồng chéo → cập nhật end của interval cuối trong merged thành Math.max(previousEnd, currentEnd).

4. Trả về merged.
*/