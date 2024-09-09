const canvas     = document.querySelector(".canvas")
const inputSize  = document.querySelector(".input-size")
const inputColor = document.querySelector(".input-color")
const usedColors = document.querySelector(".used-colors")
const buttonSave = document.querySelector(".used-colors")
const colResize  = document.querySelector(".resize")
const main       = document.querySelector("main")

const createElement = (tag, className = "") => {
      const element = document.createElement(tag);
      element.className = className;
      return element;
}

const createPixel = () => {
      const pixel = createElement("div", "pixel")
}
