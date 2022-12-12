<template>
  <div>
    <form>
      <a-button type="primary" @click="$i18n.setLocale('zh-CN')">zh-CN</a-button>
      <a-button type="primary" @click="$i18n.setLocale('ja')">ja</a-button>
      <a-button type="primary" @click="$i18n.setLocale('en')">en</a-button>
      <client-only>
        {{ $t('test') }}
      </client-only>
    </form>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="less">
a {
  text-decoration: none;
  transition: all .1s ease-in-out;
}

body {
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
}

ol,
ul {
  list-style: none;
}
</style>