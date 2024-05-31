<script>
  import { T, useTask } from '@threlte/core'
  import { interactivity, OrbitControls } from '@threlte/extras'
  import Planet from './models/Planet.svelte'

  import RealPlanet from './models/RealPlanet.svelte'
  import { spring } from 'svelte/motion'
  import Around_the_world_in_80_models_posts from './models/Around_the_world_in_80_models_posts.svelte'

  let rotation = 0
  useTask((delta) => {
    rotation += delta * 0.1
  })

  interactivity()
  const scale = spring(1)

  console.log('---> Scene.svelte')

</script>
<T.PerspectiveCamera
        makeDefault
        position={[6, 0, 0]}
        fov={20}
>
  <OrbitControls
          enableDamping
          target={[0, 0, 0]}
  />
</T.PerspectiveCamera>
<T.DirectionalLight
        intensity={1}
        position={[0, 1, 0]}
        shadow-bias={-0.0001}
/>
<!--<RealPlanet-->
<!--        scale={1}-->
<!--        position={[0, 0, 0]}-->
<!--        rotation.y={rotation}-->
<!--        on:pointerenter={() => scale.set(1.5)}-->
<!--        on:pointerleave={() => scale.set(1)}-->
<!--/>-->

<Around_the_world_in_80_models_posts
        scale={10}
        position={[0, 0, 0]}
        rotation.y={rotation}
        on:pointerenter={() => scale.set(1.5)}
        on:pointerleave={() => scale.set(1)}
/>

<!--  <Planet-->
<!--          scale={1}-->
<!--          position={[0, 0, 0]}-->
<!--  />-->
