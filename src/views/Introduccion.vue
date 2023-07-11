<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
  
    .cajon.color-acento-contenido.mb-5(data-aos="flip-down")(style='background-color: #DFF2ED').p-4.mb-0
      .row.justify-content-center.align-items-center     
        .col-lg-auto.my-3
          img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg')
        .col.my-3
          p.mb-0(data-aos="fade-down") Apreciado aprendiz, bienvenido a este componente formativo, donde abordaremos la temática relacionada con el el diagnóstico de los residuos y vertimientos generados según normativa vigente. En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/hXJZMou80-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. Diagnosticar los residuos y vertimientos generados según normativa vigente            

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
