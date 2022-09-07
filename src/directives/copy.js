
import { Message } from 'element-ui'

const copy = {
  bind(el, { value }) {
    el.$value = value
    el.handler = () => {
      // 判断是否有可赋值内容
      if (!el.$value) {
        Message.error('无复制内容！')
        return
      }

      // 创建文本域
      const textarea = document.createElement('textarea')

      textarea.readOnly = 'readOnly'
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999'
      textarea.value = el.$value

      // 将文本域插入到body中
      document.body.appendChild(textarea)
      // 选中值
      textarea.select()
      // 赋值
      const result = document.execCommand('Copy')
      if (result) {
        Message.success('复制成功')
      }
      // 移除文本域
      document.body.removeChild(textarea)
    }

    // 绑定点击事件
    el.addEventListener('click', el.handler)
  },

  // 值更新时触发
  componentUpdated(el, { value }) {
    el.$value = value
  },

  // 元素解绑事件
  unbind(el) {
    el.removeEventListener('click', el.handler)
  },
}

export default copy
