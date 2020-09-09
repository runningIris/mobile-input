import React from "react"
export default class MobileInput extends React.PureComponent {
  inputRef = null
  handleChange = (e) => {
    const prevValue = this.props.value
    const currentValue = e.target.value
    const { selectionStart } = this.inputRef
    // 如果输入的不是数字或者连字符, 则不更新 props.value
    if (/[^1-9|-]/.test(currentValue)) {
      return
    }

    const linkValueWithHyphen = (value) => {
      if (value.length < 4) return value
      if (value.length < 8) return value.slice(0, 3) + "-" + value.slice(3)
      return (
        value.slice(0, 3) + "-" + value.slice(3, 7) + "-" + value.slice(7, 11)
      )
    }

    const nextValue = linkValueWithHyphen(
      (prevValue.length > currentValue.length &&
      prevValue[selectionStart] === "-"
        ? currentValue.slice(0, selectionStart - 2) +
          currentValue.slice(selectionStart - 1) // 连字符前删除操作需要删除两个字符
        : currentValue
      ).replace(/-/g, "")
    )

    this.props.onChange(nextValue.replace(/(-*)$/, ""))
  }
  // 根据前后props的前后变化计算出更新后的光标位置
  getSnapshotBeforeUpdate(prevProps) {
    return (
      this.inputRef.selectionStart +
      this.props.value.length -
      prevProps.value.length +
      1
    )
  }
  // 组件更新后重置光标位置
  componentDidUpdate(prevProps, prevState, selectionStart) {
    this.inputRef.selectionStart = selectionStart
    this.inputRef.selectionEnd = selectionStart
  }
  render() {
    const { value, children } = this.props
    const props = {
      onChange: this.handleChange,
      value,
      ref: (ref) => (this.inputRef = ref),
    }
    if (children) {
      return React.cloneElement(children, props)
    }
    return <input type="text" {...props} />
  }
}
