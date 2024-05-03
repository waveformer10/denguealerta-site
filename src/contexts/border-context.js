import { createContext } from "react"

export const defaultContext = {
  expanded : false,
  setExpanded(bool) {
    this.expanded = !!bool;
  }
}

const BorderContext = createContext(defaultContext);

export default BorderContext;