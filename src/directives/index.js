import Vue from 'vue'
import copy from './copy' // 复制
import debounce from './debounce' // 防抖
import waterMarker from './waterMarker' // 水印
import draggable from './draggable' // 拖拽

const directives = {
  copy,
  debounce,
  waterMarker,
  draggable
}

Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key])
})
