<template>
  <div id="drawerSection">
    <div id="labelBatu">
      <label for="nav-input">
        <img
          id="batuClose"
          src="../assets/batu.png"
          alt="閉じる"
        >
      </label>
    </div>
    <ul
      id="drawerMenuSection"
      style="list-style: disc;"
    >
      <label
        id="nav-close"
        class="nav-unshown"
        for="nav-input"
      >
        <li><a href="#headerSection">Home</a></li>
        <li><a href="#aboutSection">About Me</a></li>
        <li><a href="#skillSection">Skill Sets</a></li>
        <li><a href="#visionSection">Vision</a></li>
      </label>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  #drawerSection {
    font-family: 'Noto Sans JP', sans-serif;
    width: 100%;
    height: auto;
  }

  #labelBatu {
    text-align: right;
    padding: 10px 10px;
    background: #f3f3f3;
  }

  img {
    width: 25px;
    height: 25px;
    background: #f3f3f3;
  }

  #drawerMenuSection {
    background-color: #fff;
    width: 100%;
    height: auto;
  }

  li {
    color: #a8a3a3;
    font-weight: bold;
    display: block;
    border-top: solid 1px #f3f3f3;
    border-bottom: solid 1px #f3f3f3;
    padding: 10px 100px 10px 5px;
    white-space: nowrap;
  }
</style>

