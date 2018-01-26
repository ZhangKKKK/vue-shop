<template>
  <link rel="stylesheet" href="">
</template>
<script>
  export default {
    components: {
      'remote-css': {
        render(createElement) {
          return createElement('link', { attrs: { type: 'text/css', href: this.href }});
        },
        props: {
          href: { type: String, required: true },
        },
      },
    },
  }
</script>
