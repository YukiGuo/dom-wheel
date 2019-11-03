dom.attr(test, 'title', 'Hi')
const divC1 = dom.create(`<div id= 'div3'>绘画<span></span></div>`)

console.log(dom.text(divC1))
dom.text(divC1, "你在改文本吗？")

dom.after(test, divC1)
const divC2 = dom.create(`<div id='baba'></div>`)
dom.wrap(divC1, divC2)
const remove1 = document.querySelectorAll(".remove")[0]
console.log(remove1)
dom.remove(remove1)
const em = dom.empty(testEmpty)
console.log(em)
const div = dom.find('#test>.red') // 获取对应的元素
//添加样式
dom.style(div[0], { "border": "blue solid 1px" })
dom.style(div[1], "border", "green solid 1px")

dom.class.add(test, "newClass1")
dom.class.add(test, "newClass2")
dom.class.remove(test, "newClass2")
console.log(dom.class.has(test, "newClass1"))
const divList = dom.find('.red') // 获取多个 div.red 元素

function f1() {
    console.log("点击了")
}
dom.on(test, 'click', f1)
dom.off(test, 'click', f1)

console.log(dom.siblings(remove))
console.log(dom.children(testEach))
dom.each(dom.children(testEach), (n) => { dom.style(n, { "color": "blue" }) })

let index = dom.index(dom.find('.each2')[0])
console.log(index)