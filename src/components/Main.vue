<template>
  <div id="mainSection">
    <div id="userName">
      T.Kudo
    </div>
    <div id="companyName">
      Seattleconsulting
    </div>
    <img
      id="photo"
      src="../assets/s__1974364.png"
      alt="プロフィール写真"
    >
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

  #mainSection {
    display: block;
    background: linear-gradient(#80e1f7, #06c1e6);
    width: 100%;
    height: auto;
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

  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
</style>
