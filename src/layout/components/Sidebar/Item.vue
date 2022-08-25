<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    open: {
      type: Boolean,
      default: true
    }
  },
  render(h, context) {
    const { icon, title, open } = context.props
    const vnodes = []

    if (icon) {
      if (icon.includes('el-icon')) {
        vnodes.push(<i class={[icon]} />)
        // sidebar展开时显示sub-el-icon
        if (open) {
          vnodes[0] = <i class={[icon, 'sub-el-icon']} />
        }
      } else {
        vnodes.push(<svg-icon icon-class={icon}/>)
      }
    }
    // sidebar展开时显示title
    if (title && open) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>

<style lang="scss" scoped>
.sub-el-icon {
  /* color: currentColor; */
  font-size: 20px;
}
.el-icon-s-claim {
  font-size: 20px;
}
.el-icon-s-claim ~span {
  font-size: 15px;
}
li {
  display: list-item;
}
</style>
