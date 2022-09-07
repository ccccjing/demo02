function addWaterMarker(str, parentNode, font, textColor) {
  let canvas = document.createElement('canvas')
  canvas.width = 200
  canvas.height = 150
  canvas.zIndex = 999
  canvas.style.display = 'none'
  parentNode.appendChild(canvas)

  let canvas2d = canvas.getContext('2d')
  canvas2d.rotate((-20 * Math.PI) / 180)
  canvas2d.font = font || '16px Microsoft JhengHei'
  canvas2d.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)'
  canvas2d.textAlign = "left"
  canvas2d.textBaseline = "Middle"
  canvas2d.fillText(str, canvas.width / 10, canvas.height / 2)
  parentNode.style.backgroundImage = 'url(' + canvas.toDataURL("image/png") + ')'
}

const waterMarker = {
  bind(el, binding) {
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor)
  }
}

export default waterMarker
