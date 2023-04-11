<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.align-items-end.mb-4
      .col-lg-5     
        .cajon.color-acento-contenido(data-aos="flip-down")(style='background-color: #DFF2ED').p-4.mb-0
          img.img-t.mb-4(data-aos="zoom-in")(src='@/assets/curso/temas/1.svg')
          p.mb-0(data-aos="fade-down") La importancia del análisis de las muestras que se llevan al laboratorio radica particularmente en el tratamiento que se le dé a las mismas, desde la toma, el embalaje, el transporte y su respectiva identificación; puesto que, si la muestra laboratorio es alterada en alguno de los procesos, su posterior análisis entra en un margen de baja confiabilidad que se traduce en un resultado de poca fiabilidad.
      .col-lg-7
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png')

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
