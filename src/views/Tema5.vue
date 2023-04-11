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
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Conferencia       
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
          p(data-aos="fade-down").mb-0 El capítulo 3: De Los Derechos Colectivos y del Ambiente, en los artículos 78, 79 y 80 establece que el estado tiene, entre otros deberes, los de proteger la diversidad e integridad del ambiente; fomentar la educación ambiental; prevenir y controlar los factores de deterioro ambiental; imponer las sanciones legales y exigir la reparación de los daños causados al ambiente. Constitución Política de Colombia. (1991, p. 40).  

    .row.justify-content-center.align-items-center.mb-5        
      .col-lg-10
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/17.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.mb-1 Documentos para agua: Vertimientos Aguas Residuales.

                  p.mb-0 En el anexo vertimientos de agua residuales, se visualiza la tabla donde se puede encontrar una descripción puntual de la legislación nacional en vertimientos de agua residual. Por favor abra el anexo y consulte su información.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                    span Descargar
                    i.c3.fas.fa-file-download  

    p(data-aos="fade-down").mb-5 En el material complementario revise el video “Norma de Vertimientos” para conocer más del tema.

    .row.justify-content-center.align-items-center        
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)                                        

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
