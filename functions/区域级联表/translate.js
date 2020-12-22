// 配合antd级联表使用

translateCountryInfo = () => {
  let { conuntryInfo, agenda_item } = this.state
  const _translate = (item) => {
    _addlabel(item)
    if (!item.State) {
      let objLength = Object.keys(item.State).length
      if (objLength === 1) {
        item.children = item.State.children
      } else {
        item.children = item.State
      }
      item.children.map(_translate)
    }
  }

  //添加label字段
  const _addlabel = (item) => {
    item.label = item.value
    if (!!item.children) {
      if (Object.prototype.toString.call(item.children) === "[object Object]") {
        item.children = [item.children]
      }
      item.children.map(_addlabel)
    }
  }
  return conuntryInfo.map(_translate)
}
