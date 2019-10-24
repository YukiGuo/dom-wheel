#### 增
1. dom.create(`<div>绘画<span></span></div>`)
   * 如果创建的容器标签是div的话，部分标签不能全部包含在div,此时需要替换成template
   * template.content.firstChild