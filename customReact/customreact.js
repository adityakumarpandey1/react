function customRender(reactElement, container) {
  // 1. Create DOM element
  const domElement = document.createElement(reactElement.type)

  // 2. Add children (text)
  domElement.innerHTML = reactElement.children

  // 3. Add props / attributes
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop])
  }

  // 4. Append to container
  container.appendChild(domElement)
}

// React-like element object
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit Google'
}

// Root container
const mainContainer = document.querySelector('#root')

// Render
customRender(reactElement, mainContainer)
