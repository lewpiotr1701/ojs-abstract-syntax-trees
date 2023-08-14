function convertASTToString(astObject) {
  let htmlString = ''

  if (astObject.nodeType === 'element') {
    htmlString += `<${astObject.tagName}`

    if (astObject.attributes) {
      astObject.attributes.forEach(attr => {
        htmlString += ` ${attr.name}="${attr.value}"`
      })
    }

    htmlString += '>'

    if (astObject.children) {
      astObject.children.forEach(child => {
        htmlString += convertASTToString(child)
      })
    }

    console.log(astObject)
    htmlString += closeTag(astObject.tagName)

  } else if (astObject.nodeType === 'text') {
    htmlString += astObject.value
  }

  return htmlString
}

function closeTag(tag) {
  const tagsForbiddenToBeClosed = [
    'img', 'input', 'br', 'hr'
  ]

  if (tagsForbiddenToBeClosed.includes(tag)) {
    return ''
  }

  return `</${tag}>`
}

export default convertASTToString