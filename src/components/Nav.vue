<template>
  <qu-menu mode="horizon" theme="light" active-name="home">
    <qu-menu-item name="home">
      云图
    </qu-menu-item>
    <qu-menu-item
      name="intelligent-scene"
      to="/item">
      智能场景
    </qu-menu-item>
    <qu-menu-item name="material-library">
      素材库
    </qu-menu-item>
    <qu-menu-item name="description">
      使用说明
    </qu-menu-item>
    <qu-menu-item name="user" style="float:right">
      user
    </qu-menu-item>
  </qu-menu>
</template>

<script>
export default {
  name: 'headNav'
}
</script>

<style scoped>

</style>
