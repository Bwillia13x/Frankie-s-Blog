import '@testing-library/jest-dom'

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveClass(className: string): R
      toHaveTextContent(text: string | RegExp): R
      toHaveAttribute(attr: string, value?: string): R
      toBeVisible(): R
      toBeDisabled(): R
      toBeEnabled(): R
      toHaveValue(value: string | number): R
      toHaveDisplayValue(value: string | RegExp | Array<string | RegExp>): R
      toBeChecked(): R
      toHaveFocus(): R
      toHaveFormValues(values: Record<string, any>): R
      toHaveStyle(css: string | Record<string, any>): R
      toHaveAccessibleDescription(description?: string | RegExp): R
      toHaveAccessibleName(name?: string | RegExp): R
    }
  }
} 