<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 1
      h1 Presentación

    .row.align-items-center.mb-4
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png')    
      .col-lg-8     
        .cajon.color-acento-contenido.mb-4(data-aos="fade-left").p-4.mb-0
          p.mb-0(data-aos="fade-down") #[b El aumento de la población, la expansión urbana y el acelerado crecimiento industrial, han determinado como uno de los problemas ambientales es la alta carga contaminante de los vertimientos]; situación que trae consigo una serie de impactos ambientales negativos que demandan un adecuado manejo. Es por ello que determinar la problemática de los vertimientos de acuerdo con su naturaleza, identificando por medio de un diagrama de procesos las fuentes generadoras, el tipo de contaminante, concentración y carga contaminante y aforo, son lo primordial para el diagnóstico, es una actividad fundamental para conocer en profundidad el manejo adecuado e inmediato que debe darse, según la actividad económica o fuente que lo genera y que actividades de tratamiento son requeridas para descontaminar el agua y preferiblemente prevenir su contaminación.

        .bg1.p-3
          .row.justify-content-center.align-items-center         
            .col-auto
              img.img-t.rot1(src='@/assets/curso/temas/4.svg')
            .col
              h5(data-aos="fade-down").mb-0 Se abordarán herramientas básicas y fundamentales para el desarrollo de un buen diagnóstico de los vertimientos según la actividad generadora.            































</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    indicadorTarjetaSlide: true,
    indicadorTarjetaFlip: true,
  }),
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
