<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 3
      h1 Bases conceptuales

    p(data-aos="fade-down").mb-5 Con el propósito de tener un orden consecutivo para el entendimiento y desarrollo de este material, es relevante tener presente los siguientes conceptos a partir de lo dispuesto por el Ministerio de Desarrollo Económico Dirección de Agua Potable y Saneamiento Básico (2002).

    .row.justify-content-center.align-items-center
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/8.png', alt='')

      .col-lg-9
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.bg2.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')
            h5.mb-3 Aguas crudas: 
            p.mb-0 aguas naturales que no han sido tratadas, por lo general provienen de una fuente o cuerpo de agua.      
          .tarjeta.bg2.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')
            h5.mb-3 Aguas residuales: 
            p.mb-0 aguas que contienen material disuelto y en suspensión, luego de ser usada por una comunidad o industria.  
          .tarjeta.bg2.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')
            h5.mb-3 Aguas servidas: 
            p.mb-0 aguas de desecho provenientes de lavamanos, tinas de baño, duchas, lavaplatos, y otros artefactos que no descargan materias fecales.      
          .tarjeta.bg2.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')
            h5.mb-3 Carga orgánica: 
            p.mb-0 producto de la concentración media de DBO por el caudal medio determinado en el mismo sitio; se expresa en kilogramos por día (kg/d). 
          .tarjeta.bg2.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')
            h5.mb-3 Caja de inspección domiciliaria: 
            p.mb-0 cámara localizada en el límite de la red pública de alcantarillado y la privada, que recoge las aguas residuales, lluvias o combinadas provenientes de un inmueble.     
          .tarjeta.bg2.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')
            h5.mb-3 Concentración: 
            p.mb-0 se denomina concentración de una sustancia, elemento o compuesto en un líquido, la relación existente entre su peso y el volumen del líquido que lo contiene. 
          .tarjeta.bg2.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')
            h5.mb-3 Descomposición anaerobia: 
            p.mb-0 degradación de la materia orgánica en ausencia de oxígeno molecular por efecto de microorganismos. Usualmente va acompañada de la generación de ácidos y gas metano.      
          .tarjeta.bg2.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')
            h5.mb-3 Digestión aerobia: 
            p.mb-0 descomposición biológica de la materia orgánica de un lodo en presencia de oxígeno.  
          .tarjeta.bg2.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')
            h5.mb-3 Efluente: 
            p.mb-0 líquido que sale de un proceso de tratamiento.     
          .tarjeta.bg2.p-4.h-100.text-center
            img.img-a.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/9.svg', alt='')
            h5.mb-3 Efluente final: 
            p.mb-0 líquido que sale de una planta de tratamiento de aguas residuales.           
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
