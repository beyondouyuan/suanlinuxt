<template>
  <div></div>
</template>
<script>
import { isMobile } from '~/plugins/utils.js'
export default {
  fetch({ store, redirect, userAgent }) {
    if (isMobile(userAgent)) {
      console.log('do not thing')
    } else {
      return redirect('/user/profile')
    }
  },
  layout({ params, userAgent }) {
    console.log(userAgent)
    if (isMobile(userAgent)) {
      return 'usercenter'
    } else {
      return 'default'
    }
  }
}

</script>
