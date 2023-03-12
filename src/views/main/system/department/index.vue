<template>
  <div class="dep">
    <audio controls>
      <source src="" />
    </audio>
    <div class="container">
      <ul class="lrc-list">
        <li class="active">Lorem ipsum dolor sit.</li>
        <li>Neque accusamus laborum iste!</li>
        <li>Provident beatae maiores asperiores.</li>
        <li>Dolorum, reprehenderit quisquam! Ullam?</li>
        <li>Necessitatibus quam quo corporis.</li>
        <li>Qui unde repellat veniam?</li>
        <li>Adipisci veritatis provident optio?</li>
        <li>Debitis dolorum aperiam quisquam?</li>
        <li>Mollitia velit unde voluptatum!</li>
        <li>Nam inventore consequatur obcaecati.</li>
        <li>Mollitia illum perspiciatis laborum?</li>
        <li>Repudiandae unde maxime doloribus?</li>
        <li>Placeat dolore mollitia optio!</li>
        <li>Iusto obcaecati blanditiis officia?</li>
        <li>Dolore id recusandae quis?</li>
        <li>Fugit nesciunt porro doloribus?</li>
        <li>Veritatis nemo minima velit?</li>
        <li>Nulla libero totam ipsam!</li>
        <li>Repudiandae quisquam facilis veniam?</li>
        <li>Aliquid mollitia perspiciatis consectetur.</li>
        <li>Ipsum ut iste culpa.</li>
        <li>Earum molestiae iusto in?</li>
        <li>Dolor dolorum nihil autem.</li>
        <li>Corrupti ipsum culpa eaque?</li>
        <li>Error at reprehenderit consequatur!</li>
        <li>Numquam quo repellendus tempore.</li>
        <li>Dolore totam voluptas accusantium.</li>
        <li>Temporibus impedit at tempora.</li>
        <li>Dicta enim repellat assumenda!</li>
        <li>Pariatur delectus dolorum voluptate?</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.dep {
  background: #000;
  color: #666;
  text-align: center;
  height: 100%;
}
audio {
  width: 450px;
  margin: 30px;
}
.container {
  height: 420px;
  // overflow: hidden;
  ul {
    border: 2px solid #fff;
    transition: 0.2s;
    li {
      height: 30px;
      line-height: 30px;
      transition: 0.2s;
    }
    li.active {
      color: #fff;
      transform: scale(1.2);
    }
  }
}
</style>
