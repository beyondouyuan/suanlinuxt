<template>
  <div>新闻</div>
</template>
<script>
export default {
  layout(context) {
    console.log(context)
    return 'news'
  },
  fetch({ store, redirect }) {
    return redirect('/news/announce')
  }
}

</script>
