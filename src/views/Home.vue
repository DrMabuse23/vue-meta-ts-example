<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <my-component v-on:myEvent="getEmit" first="first" last="last" middle="middle"></my-component>
    {{event}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
  metaInfo() {
    return {
      title: 'My awesome title',
    };
  },
})
export default class Home extends Vue {
  public event: string = '';
  public getEmit(ev: CustomEvent) {
    this.event = ev.detail;
  }
}
</script>
