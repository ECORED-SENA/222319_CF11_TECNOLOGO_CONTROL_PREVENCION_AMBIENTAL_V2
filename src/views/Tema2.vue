<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Introducción vertimientos

    p(data-aos="fade-down") Gran parte de los contaminantes que se encuentran en las aguas residuales están distribuidos en forma de sólidos en distintas escalas de tamaño, ver figura 1, los más fáciles de separar son aquellos que decantan por la acción gravitacional los cuales se encuentran en el rango de 1 micra hasta los 5 mm, encontrando en orden creciente de diámetro de partícula, sólidos suspendidos, sólidos sedimentables, arenas o partículas discretas y sólidos gruesos, que en su conjunto se remueven mediante dispositivos de separación sólido – líquido por fenómenos netamente físicos.
    .row.justify-content-center.align-items-start
      .col-lg-8.my-3
        p(data-aos="fade-down") En una menor escala de tamaño, el peso de los sólidos en el agua es tan bajo que no decantan y priman sobre ellos, repulsiones eléctricas por las cargas que se conforman en su superficie, éstos son los que denominan sólidos coloidales, que se extienden en el rango de tamaño desde los 100 nm hasta los 0,1 micrómetros, este tipo particular de contaminantes del agua son removidos a través de tratamiento físicoquímico, haciendo uso de unidades combinadas donde se ponen en contacto agentes químicos que modifican las propiedades de los contaminantes en reactores con mezclado seguido de unidades de separación física sólido líquido.  
        .cajon.color-acento-contenido(data-aos="fade-left").p-4.mb-0
          .row.justify-content-center.align-items-start         
            .col-auto
              img.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/7.svg')
            .col
              p(data-aos="fade-down") Aún existe un tamaño inferior, correspondiente a los sólidos disueltos, comprende los contaminantes disueltos en el agua y que aportan color verdadero, en tamaños menores de 100 nanómetros, donde son efectivos los sistemas de tratamiento de refinación como las conocidas membranas y materiales adsorbentes entre otras tecnologías.

              p(data-aos="fade-down").mb-0 Cuando la naturaleza de estos sólidos es orgánica, son eficaces los sistemas de tratamiento biológico, donde los microorganismos se convierten en aliados efectivos del tratamiento en sus condiciones aerobias o anaerobias.               
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="fade-down")(src='@/assets/curso/temas/5.png', alt='')
        figcaption #[b Nota.] Práctica tratamiento de aguas residuales CGI. Pedraza, S. (2019).      

                 
</template>

<script>
export default {
  name: 'Tema2',
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
