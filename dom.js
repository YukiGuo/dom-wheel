window.dom = {
    //以字符串形式创建节点
    create(string) {
        const container = document.createElement('template')
        container.innerHTML = string.trim()
        return container.content.firstChild
    },
    //在一个节点后面插入新节点
    after(node, newNode) {
        node.parentNode.insertBefore(newNode, node.nextSibling)
        //插入到node下一个节点的前面
    },
    //在一个节点前面插入新节点
    before(node, newNode) {
        node.parentNode.insertBefore(newNode, node)
    },
    // 插入子节点
    append(parent, node) {
        parent.appendChild(node)
    },
    //插入父节点
    wrap(node, parent) {
        dom.before(node, parent)
        dom.append(parent, node)
    },
    //删除节点
    remove(node) {
        node.parentNode.removeChild(node)
        return node
    },
    //清空子节点
    empty(node) {
        let { childNodes } = node
        childNodes = Array.from(childNodes)
        const array = []
        let x = node.firstChild
        while (x) {
            array.push(dom.remove(node.firstChild))
            x = node.firstChild
        }
        // 不能用for 循环，因为childNodes.length会实时变动
        // for (let i = 0; i < childNodes.length; i++) {
        //     dom.remove(childNodes[i])
        // }
        return array
    },
    //设置属性 重载
    attr(node, name, value) {
        if (arguments.length === 3) {
            node.setAttribute(name, value)
        }
        else if (arguments.length === 2) {
            return (node.getAttribute(name))
        }
    },
    // 设置文本内容 innerText IE,textContent firefox,chrome
    text(node, string) {
        if (arguments.length === 2) {
            ('innerText' in node) ? node.innerText = string : node.textContent = string
        }
        else if (arguments.length === 1) {
            return ('innerText' in node) ? node.innerText : node.textContent
        }
    },
    html(node, string) {
        if (arguments.length === 2) {
            node.innerHtml = string
        }
        else if (arguments.length === 1) {
            return node.innerHtml
        }
    },

    //设置样式
    style(node, name, value) {
        if (arguments.length == 3) {
            node.style[name] = value
        } else if (arguments.length == 2) {
            if (typeof name === 'string') {
                return node.style[name]
            } else if (name instanceof Object) {
                for (let key in name) {
                    node.style[key] = name[key]//方括号获取变量的属性
                }
            }
        }

    },
    //类名
    class: {
        add(node, className) {
            node.classList.add(className)
        },
        remove(node, className) {
            node.classList.remove(className)
        },
        has(node, className) {
            return node.classList.contains(className)
        }
    },
    // 实件监听
    on(node, eventName, fn) {
        node.addEventListener(eventName, fn)
    },
    off(node, eventName, fn) {
        node.removeEventListener(eventName, fn)
    },

    find(node, scope) {
        return (scope || document).querySelectorAll(node, scope)
        //如果有scope 就在scope中查找node
    },
    parent(node) {
        return node.parentNode
    },
    children(node) {
        return node.children
    },
    siblings(node) {
        return Array.from(node.parentNode.children).filter((n => n !== node))
    },
    next(node) {
        let x = node.nextSibling
        while (x && x.nodeType === 3) {
            x = x.nextSibling
        }
        return x
    },
    previous(node) {
        let x = node.previousSibling
        while (x && x.nodeType === 3) {
            x = x.previousSibling
        }
        return x
    },
    each(nodeList, fn) {
        for (let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i])
        }
    },
    index(node) {
        const list = dom.children(node.parentNode)
        for (let i = 0; i < list.length; i++) {
            if (list[i] === node) {
                return i
            }
        }
    }
}

