<template>
  <div id="mainSection">
    <div id="userName">
      T.Kudo
    </div>
    <div id="companyName">
      Seattleconsulting
    </div>
    <img scr="../assets/s__1974364.jpg/">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

  #mainSection {
    background: linear-gradient(#80e1f7, #06c1e6);
  }

  #userName {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 18pt;

    /* 影のサイズ考える */
    text-shadow: -1px -2px 3px #808080;
  }

  #companyName {
    color: #fff;
    font-weight: bold;
    font-size: 18pt;

    /* 影のサイズ考える */
    text-shadow: -1px -2px 3px #808080;
  }
</style>
