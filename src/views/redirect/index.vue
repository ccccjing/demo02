<!--
 * @description: description
 * @fileName: index.vue
 * @author: pierce
 * @lastDate: 2022-08-25 15:09:12
!-->

<script>
export default {
  created() {
    const { params, query } = this.$route
    const { path } = params
    this.$router.replace({ path: '/' + path, query})
  },
  render: function(h) {
    return h()
  }
}
</script>
