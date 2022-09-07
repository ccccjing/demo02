import { Message } from 'element-ui'

const debounce = {
  inserted(el, binding) {
    let timer

    el.addEventListener('click', () => {
      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        binding.value()
        Message.success('操作成功')
      }, 2 * 1000)
    })
  }
}

export default debounce
