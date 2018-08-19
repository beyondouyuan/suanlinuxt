<template>
  <div>后续做重定向 或者直接删除该文件</div>
</template>
<script>
export default {
  fetch({ store, redirect }) {
    return redirect('/help/qa')
  }
}

</script>
