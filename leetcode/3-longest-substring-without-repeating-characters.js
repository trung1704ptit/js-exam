/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let maxLen = 0;
    let lastIndex = new Map(); // lưu vị trí cuối của mỗi ký tự

    for (let right = 0; right < s.length; right++) {
        let char = s[right]


        if (lastIndex.has(char) && lastIndex.get(char) >= left) {
            // nếu kí tự đã xuất hiện trong cửa sổ
            // dịch chuyển left để thu hẹp cửa sổ, cho đến khi không còn trùng nữa.
            left = lastIndex.get(char) + 1;
        }

        lastIndex.set(char, right); // cập nhật vị trí cuối
        maxLen = Math.max(maxLen, right - left + 1)
    }
    return maxLen;
};

/*
Ý tưởng giải thuật (Sliding Window)
1. Dùng hai con trỏ left và right đại diện cho cạnh trái và phải của cửa sổ hiện tại (window).
2. Dùng một cấu trúc như mảng hoặc map để theo dõi tần suất xuất hiện của từng ký tự trong cửa sổ.
3. right dịch chuyển tiến bước từng bước:
 - Nếu ký tự mới chưa lặp (tần suất <= 1), mở rộng cửa sổ và cập nhật kết quả lớn nhất.
 - Nếu ký tự lặp (tần suất > 1), dịch chuyển left để thu hẹp cửa sổ, cho đến khi không còn trùng nữa.
4. Kích thước cửa sổ hiện tại = right - left + 1, và cập nhật giá trị lớn nhất tương ứng.

Thời gian: O(n) (mỗi ký tự xử lý 1 lần).
Không gian: O(k) (với k = số ký tự trong bảng chữ cái, tối đa 128 hoặc 256).
*/


/*
Explain:
ví dụ chạy: "pwwkew"
khởi tạo left = 0; maxLen =0, lastIndex = {}
- vòng lặp 1: right = 0, char = "p":
lastIndex chưa có 'p'
lưu lại lastIndex = { 'p': 0 }
độ dài cửa sổ là 0 - 0 + 1 => maxLen = 1;

- vòng lặp 2: right = 1, char = 'w'
'w' chưa có trong lastIndex
lưu lại: lastIndex = { 'p': 0, 'w': 1}
độ dài cửa sổ = Math.max(1, right - left + 1) = Math.max(1, 1 - 0 + 1) = 2 => maxLen = 2;

- vòng lặp 3: right = 2, char = 'w'
'w' đã có trong lastIndex tại vị trí 1, index 1 này >= left (0) nên thỏa mã điều kiện if,
cập nhật left = 1 + 1 = 2
lưu lại lastIndex = { p: 0, w: 2}
độ dài cửa sổ lúc này maxLen = Math.max(2, 2 - 2 + 1) => maxLen = 2 (k đổi)

- Vòng lặp 4: right = 3, char = "k"
"k" chưa có trong lastIndex.
Lưu lại: lastIndex = { p:0, w:2, k:3 }.
Độ dài cửa sổ = 3 - 2 + 1 = 2 → maxLen = 2.

- Vòng lặp 5: right = 4, char = "e"
"e" chưa có trong lastIndex.
Lưu lại: lastIndex = { p:0, w:2, k:3, e:4 }.
Độ dài cửa sổ = 4 - 2 + 1 = 3 → maxLen = 3.

- Vòng lặp 6: right = 5, char = "w"
"w" đã có trong lastIndex tại vị trí 2, và >= left (2).
Cập nhật left = 2 + 1 = 3.
Lưu lại: lastIndex = { p:0, w:5, k:3, e:4 }.
Độ dài cửa sổ = 5 - 3 + 1 = 3 → maxLen = 3 (không đổi).
*/