class Demo4 {
    constructor(options) {
        if (options && options.a) {
            this.a = options.a
        } else {
            // 不需要加上这个代码，会消耗内存
            // this.a = null
        }
    }
}

const objs = []
for (let i = 0; i < 300000; i++ ) {
    const obj = new Demo4()
    objs.push(obj)
}
