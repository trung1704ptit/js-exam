// Cú pháp:
const array = [];
const inititalValue = 0; // or [] or {}, ...

array.reduce((accumulator, currentValue, currentIndex, array) => {
    return newAccumulatorValue
}, inititalValue)

// Tính tổng sum:
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0)
console.log(sum) // 15


// Đếm số lần xuất hiện (Frequency Counter):
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;

    return acc;
}, {})

// Gộp các mảng con (flatten array)
const nested =  [[1, 2], [3, 4], [5]];
function flattenArray(arr) {
    return arr.reduce((acc, val) => {
        if (Array.isArray(val)) {
            return acc.concat(flattenArray(val))
        } 
        return acc.concat(val)
    }, [])
}

flattenArray(nested) // [1,2,3,4,5]


// Tạo Object từ mảng
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

const userMap = users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
}, {})


// Nhóm dữ liệu - GroupBy
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 }
];

const grouped = people.reduce((acc, person) => {
    const key = person.age;
    acc[key] = acc[key] || [];
    acc[key].push(person);
    return acc;
}, {})


// Tính giá trị phức tạp (ví dụ: tổng giá tiền)
const cart = [
  { item: "Book", price: 10, quantity: 2 },
  { item: "Pen", price: 2, quantity: 5 }
];

const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
console.log(total); // 👉 30

// Kết hợp chuỗi (Concatenate / Join)
const words = ["Hello", "World", "from", "JS"];
const sentence = words.reduce((acc, word) => acc + " " + word);
console.log(sentence); // 👉 "Hello World from JS"

// Tìm giá trị lớn nhất / nhỏ nhất
const mynumbers = [5, 2, 9, 1, 7];
const max = mynumbers.reduce((acc, num) => Math.max(acc, num));
const min = mynumbers.reduce((acc, num) => Math.min(acc, num))

console.log(max, min)


// Tạo mảng duy nhất (Remove duplicates)
const nums = [1, 2, 2, 3, 4, 4, 5];
const unique = nums.reduce((acc, num) => {
    if (!acc.includes(num)) acc.push(num)
    return acc;
}, [])



// Promise chain với async reduce
const urls = ["url1", "url2", "url3"];
const fetchSequentially = async () => {
    await urls.reduce(async (prevPromise, url) => {
        await prevPromise;
        console.log("fetching: ", url);

        return new Promise((resolve) => setTimeout(resolve, 500))
    }, Promise.resolve())
}

fetchSequentially()