var LRU = function(capacity) {
    this.capacity =  capacity // khoi tao capacity bang gia tri truyen vao
    this.cache = new Map() // khoi tao map
}

LRU.prototype.get = function(key) {
    // edge case: key does not exists:
    if (!this.cache.hash(key)) {
        return -1;
    }

    const value = this.cache.get(key);

    // đưa key lên mới nhất, vì lúc này nó được sử dụng
    this.cache.delete(key); // xóa key này đi
    this.cache.set(key, value) // cho nó ở cuối của map (mới nhất)

    return value;
}

LRU.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key)
    }
    this.cache.set(key, value);

    if (this.cache.size > this.capacity) {
        // xoa phan tử cũ nhất ở đầu Map
        const oldestKey = this.cache.keys().next().value; // lấy ra key của phần tử đầu tiên
        // hoặc lấy key của phần tử đầu tiên bằng 1 vòng lặp for
        /*
        let oldestKey;
        for (let k of this.cache.keys()) {
            oldestKey = k;
            break;
        }
        => vậy là có được key đầu tiên
        */
        this.cache.delete(oldestKey)
    }
}

/*
Least recently used: là áp dụng cho key nào ít được sử dụng cả put và get.
Cấu trúc dữ liệu: Hashmap vì Hashmap sẽ lưu được cặp key-value
Map trong javascript có tính thứ tự => đây là 1 đặc điểm giúp ta xác định key nào là mới nhất, key nào là cũ nhất
Trong Map, key ở đầu là cũ nhất vì đã được add từ đầu, key ở cuối Map là được add mới nhất

Explanation:
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);    // return 4
*/