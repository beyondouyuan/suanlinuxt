<template>
  <div>信息中心</div>
</template>
<script>
export default {
  layout(context) {
    console.log(context)
    return 'user'
  },
  fetch({ store, redirect }) {
    return redirect('/message/pm')
  }
}

</script>
