<template>
  <div>资产管理</div>
</template>
<script>
export default {
  layout(context) {
    return 'user'
  },
  fetch({ store, redirect }) {
    return redirect('/property/orders')
  }
}

</script>
