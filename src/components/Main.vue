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
      src="../assets/p_photo.png"
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
    padding-top: 60px;
    padding-bottom: 30px;
  }

  #userName {
    color: #fff;
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: bold;
    font-size: 25pt;
    border-bottom: 1px solid white;
    margin: 0 auto;
    width: 300px;
    text-shadow: -2px 2px 3px #808080;
  }

  #companyName {
    color: #fff;
    font-weight: bold;
    font-size: 25pt;
    padding: 5px;
    text-shadow: -2px 2px 3px #808080;
  }

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
  }
</style>
