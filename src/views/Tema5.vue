<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 5
      h1 Normativa en control de vertimientos

    .row.align-items-start.mb-4
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/15.png')
        figcaption #[b Nota.] Conferencia en normativa para el tratamiento de agua lluvia y residual. Pedraza, S. (2018).

      .col-lg-8     
        .cajon.color-acento-contenido.mb-4(data-aos="fade-left").p-4.mb-0
          p(data-aos="fade-down") La normativa ambiental para el manejo de los vertimientos en Colombia es amplia, pero  ha sufrido una serie de cambios a través del tiempo a medida que el estado propone políticas más estrictas para el uso, aprovechamiento y vertimiento del recurso hídrico. 

          p.mb-0(data-aos="fade-down") La normativa ambiental para el En el siguiente resumen legislativo se pueden apreciar los cambios técnico-legales que se han presentado en el país en los últimos 20 años. 

    .row.justify-content-between.mx-0.bg7.mb-5
      .col-auto.p-0
        img(data-aos="zoom-in")(src='@/assets/curso/temas/16.svg', alt='')
      .col
        .bgw.p-4.my-4.me-2
          h5(data-aos="fade-down") Constitución Política Nacional: 
          p(data-aos="fade-down").mb-0 El capítulo 3: De Los Derechos Colectivos y del Ambiente, en los #[b artículos 78, 79 y 80] establece que el estado tiene, entre otros deberes, los de proteger la diversidad e integridad del ambiente; fomentar la educación ambiental; prevenir y controlar los factores de deterioro ambiental; imponer las sanciones legales y exigir la reparación de los daños causados al ambiente. Constitución Política de Colombia. (1991, p. 40).  

    p(data-aos="fade-down").mb-5 En el material complementario revise el video “Norma de Vertimientos” para conocer más del tema.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({}),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
<style lang="sass"></style>
