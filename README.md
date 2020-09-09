# MobileInput component

## CHANGE LOG

- feat: add hyphens between numbers

## Usage

```jsx
import React from "react"
import MobileInput from "mobile-input"

class App extends React.PureComponent {
  state = { value: "" }

  render() {
    const { value } = this.state
    return (
      <div>
        <label htmlFor="">Mobile: </label>
        <MobileInput
          value={value}
          onChange={(v) => this.setState({ value: v })}
        >
          <input text=""></input>
        </MobileInput>
      </div>
    )
  }
}
```

## Props

- onChange: _f()_
- value: string
