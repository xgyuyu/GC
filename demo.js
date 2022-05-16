// 内存支配树
// 手动清除内存
// global.gc()
// node：process.memory.Usage()
// Buffer就在里面，是由v8分配的，gc回收


global.gc();
const format = (bytes) => {
    return (bytes/1024/1024).toFixed(2) + "MB"
}

const mem = process.memoryUsage();

console.log("heapUsed========", format(mem.heapUsed))

// 内存使用但是不回收就溢出了
// node --expose-gc demo.js

let map = new Map([[1, 'a']])
let key = new Array(2*1024*1024)

map.set(key, 1)
// 先接触支配树的关系
// 还是不行，因为v8 GC机制  三色标记，需要清除标记（清除标记还氛围新生代和老生代）
map.delete(key)

// 直接把key设置成null并没有减少内存
key = null

// 需要马上global.gc()一下才能看到效果
// global.gc()

// 如果直接删除也是不行，需要先解除支配树的关系
const mem2 = process.memoryUsage();
console.log("对象占用后✈️", format(mem2.heapUsed))
