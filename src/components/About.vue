<template>
  <Modal title="What this?" :visible="about">
    <p>Risk</p>
    <p>A random Project.</p>
    <p>
      The goal of the game is to conquer the entire map.
      Each territory has a number of armies. To attack you have to select your territory with at least 2 armies and then choose enemy territory.
      Who roll larger total number wins.
      In case of a tie, attacker looses.
      You can attack multiple times per turn.
      At the end of the turn, the player receives a number of armies according to number of territories and successful attacks.
      Armies are added randomly.
      To pass the move to the next player, click ">>" button.
    </p>
    <p>Me make code oooga booga:</p>
    <p>Used this as a template, will rework game logic later: Support him there if you want.<a href="https://github.com/fernandoescolar/war-game" target="_blank">Source code</a></p>
    <p><button class="buy-me-a-beer center" @click="buyMeABeer()">
        <span>🍺 </span>
        <span> Buy him a beer</span>
    </button></p>
    <p>
      This project is been developed by <a href="https://www.nobody.com//" target="_blank">Alfy George Varghese</a>:
      <ul>
        <li><a href="https://github.com/Alfy-G-Varghese" target="_blank">GitHub</a></li>
      </ul>
    </p>

  </Modal>
</template>

<script setup lang="ts">
import Modal from './Modal.vue';
import {  mapGetters, ScreensState } from '@/store'

const { about } = mapGetters<ScreensState>('screens')

const buyMeABeer = () => {
  window.open('https://www.buymeacoffee.com/fernandoescolar', '_blank')
}

</script>

<style lang="scss" scoped>
@import "../sass/variables";

.buy-me-a-beer {
    height: 40px;
    border-radius: 12px;
    background-color: #fd0;
    color: #fff;
    border: none;
    padding: 0 20px;
    line-height: 20px;
    font-family: $font-family;
    margin: auto;
}


</style>