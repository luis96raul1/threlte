<svelte:options customElement="planet-model"/>

<script lang="ts">
  import { Canvas } from '@threlte/core'
  import Scene from './Scene.svelte'

  console.log('---> PlanetModel.svelte')
</script>

<div>
  <Canvas>
    <Scene/>
  </Canvas>
</div>


<style lang="scss">
  @use '$lib/mixins';

  div {
    width: 100%;
    height: 100vh;
  }
</style>
