// Cu phap
const array = [];

// array.sort([compareFn])

/*
- Nếu không truyền compareFunction:
JavaScript sẽ chuyển các phần tử thành chuỗi và so sánh theo thứ tự Unicode.

-----------------------------------------------------------------------------------------------
Không truyền vào Ex1:
*/
const fruits = ["banana", "apple", "cheery"];
fruits.sort()
console.log(fruits) // ["apple", "banana", "cherry"]


const numbers = [100, 20, 5];
numbers.sort();
console.log(numbers) // ket qua la: [100, 20, 5]
// bởi vì, lúc này k có hàm so sánh truyền vào, mặc định nó sẽ đem so sánh unicode dạng chuỗi,
// thì '100' < '20' < '5' là đúng thứ tự kết quả


// ---------------------------------------------------------------------------------------------
/*
Dùng compareFn
compareFn(a, b) phải trả về:
< 0 thì a đứng trước b
= 0 thì giữ nguyên vị trí
> 0 thì a đứng sau b
*/

// Ví dụ sắp xếp tăng dần

const numbers2 = [100, 20, 5];
numbers2.sort((a, b) => a - b)

// sắp xếp theo giảm dần:
numbers2.sort((a, b) => b - a)

// sắp xếp theo độ dài của chuỗi
const words = ['banana', 'apple', 'cherry', 'kiwi'];
words.sort((a, b) => a.length - b.length);
console.log(words);
// ["kiwi", "apple", "banana", "cherry"]



// -----------------------------------------------------------------------------------------------
// Sort với Object
const users = [
  { name: "John", age: 30 },
  { name: "Anna", age: 25 },
  { name: "Bob", age: 28 }
];

// sắp xếp theo tuổi tăng dần
users.sort((a, b) => a.age - b.age)

// sắp xếp theo tên alphabet
users.sort((a, b) => a.name.localeCompare(b.name));


/*
NOTE:
Khi không truyền compare function → chỉ phù hợp cho string.

Với số hoặc object → luôn truyền compare function để tránh sai sót.

localeCompare dùng cho string nhiều ngôn ngữ, ví dụ tiếng Việt có dấu:

["ê", "e", "é"].sort((a, b) => a.localeCompare(b, "vi"));
*/