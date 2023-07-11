<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 11
      h1 Normativa ambiental relacionada con el valor máximo admisible

    p(data-aos="fade-down").mb-5 Para el contexto colombiano la resolución que aplica para el establecimiento de los parámetros a tener en cuenta para el control de vertimientos y los máximos permisibles es la 0631 del 2015, la cual está estructurada por las diferentes actividades económicas (Ministerio de Ambiente y Desarrollo Sostenible, 2015).  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10
        h5(data-aos="fade-down") Aguas Residuales Domésticas, (ARD)
        p(data-aos="fade-down") Son las procedentes de los hogares, así como las de las instalaciones en las cuales se desarrollan actividades industriales, comerciales o de servicios y que correspondan a:  
        .row.justify-content-center.align-items-center.mb-5          
          .col-lg-8
            ul.lista-ul.fa-ul(data-aos="fade-down")
              li 
                i.fas.fa-angle-right
                | Descargas de los retretes y servicios sanitarios. 
              li 
                i.fas.fa-angle-right
                | Descargas de los sistemas de aseo personal (duchas y lavamanos), de las áreas de cocinas y cocinetas, de las pocetas de lavado de elementos de aseo y lavado de paredes y pisos y del lavado de ropa (No se incluyen las de los servicios de lavandería industrial) (Ministerio de Ambiente y Desarrollo Sostenible, 2015).    
          .col-lg-4 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/77.png')

        h5(data-aos="fade-down") Aguas Residuales no Domésticas, (ARnD) 

        p(data-aos="fade-down") Son las procedentes de las actividades industriales, comerciales o de servicios distintas a las que constituyen aguas residuales domésticas, (ARD)  (Ministerio de Ambiente y Desarrollo Sostenible, 2015).  

    p(data-aos="fade-down").mb-5 Para la actividad de generación de energía eléctrica por procesos térmicos (termoeléctricas), que realicen vertimientos puntuales de aguas residuales a cuerpos de aguas superficiales, deberán presentar ante la Autoridad Ambiental competente la siguiente información con los respectivos soportes técnicos.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/78.png')   
      .col-lg-7
        .bg14.p-4.mb-4
          ol.lista-ol.fa-ul
            li 
              span.text-bold 1. 
              p(data-aos="fade-down").mb-0 Las determinaciones de las diferencias de los #[b valores de temperatura] en la zona de mezcla térmica del cuerpo de agua superficial receptor tomando como referencia las condiciones de la temperatura de este antes del punto de vertimiento puntual y imultáneamente. (Ministerio de Ambiente y Desarrollo Sostenible, 2015).          
        .bg26.p-4
          ol.lista-ol.fa-ul
            li 
              span.text-bold 2. 
              p(data-aos="fade-down").mb-0 Las determinaciones de los cambios de los componentes #[b fisicoquímicos e hidrobiológicos] del cuerpo de agua superficial receptor y tomando como referencia las condiciones del mismo antes del punto de vertimiento puntual. 

    p(data-aos="fade-down") Ambas determinaciones se hacen considerando para las mediciones la sección transversal y perpendicular del cauce del cuerpo de agua receptor y deben efectuarse para diferentes periodos climáticos (Ministerio de Ambiente y Desarrollo Sostenible, 2015). 

    p(data-aos="fade-down") Así mismo la resolución determina en el Capítulo II. art. 6. los parámetros microbiológicos de análisis y reporte en los vertimientos puntuales de aguas residuales (ARD Y ARND) a cuerpos de aguas superficiales, e indica que:

    p(data-aos="fade-down") se realizará el análisis y reporte de los valores de la concentración en Número Más Probable (NMP/100mL) de los Coliformes Termotolerantes presentes en los vertimientos puntuales de aguas residuales (ARD y ARnD) mediante las cuales se gestionen excretas humanas y/o de animales a cuerpos de aguas superficiales, cuando la carga másica en las aguas residuales antes del sistema de tratamiento es mayor a 125,00 Kg/día de DBO5 (Ministerio de Ambiente y Desarrollo Sostenible, 2015).  

    p(data-aos="fade-down").mb-5 La resolución se divide por Capítulos de acuerdo con la siguiente tabla 2: 

    .row.justify-content-center.align-items-center.mb-4
      .col-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Capítulos resolución 0631 del 2015.         
        .tabla-a.color-acento-contenido.mt-2
            table.mb-2
                thead.tab-x
                  tr.th-1.text-center.tab-x
                    th(colspan='3') Capítulo
                    th(colspan='9') Descripción
        
                tbody
                  tr.bgt1
                    td(colspan='3').text-center <b>Capítulo III</b>
                    td(colspan='9') Valores límites máximos permisibles microbiológicos en vertimientos puntuales de aguas residuales (ard y arnd) a cuerpos de aguas superficiales.
                  tr
                    td(colspan='3').text-center <b>Capítulo IV</b>
                    td(colspan='9') Parámetros de ingredientes activos de plaguicidas de las categorías toxicológicas ia, ib y ii y sus valores límites máximos permisibles en los vertimientos puntuales de aguas residuales no domésticas, (arnd) a cuerpos de aguas superficiales y al alcantarillado público.

                  tr.bgt1
                    td(colspan='3').text-center <b>Capítulo V</b>
                    td(colspan='9') Parámetros fisicoquímicos y sus valores límites máximos permisibles en los vertimientos puntuales de aguas residuales no domésticas (arnd) a cuerpos de aguas superficiales.

                  tr
                    td(colspan='3').text-center <b>Capítulo VI</b>
                    td(colspan='9') Parámetros fisicoquímicos y sus valores límites máximos permisibles en los vertimientos puntuales de aguas residuales domésticas, (ard) y de las aguas residuales (ard – arnd) de los prestadores del servicio público de alcantarillado a cuerpos de aguas superficiales.
                      
                  tr.bgt1
                    td(colspan='3').text-center <b>Capítulo VII</b>
                    td(colspan='9') Actividades industriales, comerciales o de servicios diferentes a las contempladas en los Capítulos v y vi con vertimientos puntuales a cuerpos de agua superficiales.
            figcaption #[b Nota]. Adaptado de Pedraza (2020). 

    p(data-aos="fade-down").mb-5 La norma se divide por sectores para cubrir la mayor parte de la economía colombiana de la siguiente forma: 

    .row.justify-content-center.align-items-center         
      .col-lg-10.p-5.bg25.bradbot 
        .row.justify-content-center.align-items-center           
          .col-lg-4.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/79.png')

          .col-lg-8.my-3    
            ul.lista-ul.fa-ul(data-aos="fade-down")
              li 
                i.fas.fa-angle-right
                p.mb-0 #[b Capítulo VI.] Parámetros fisicoquímicos y sus valores límites máximos permisibles en los vertimientos puntuales de aguas residuales no domésticas (arnd) a cuerpos de aguas superficiales.

              li 
                i.fas.fa-angle-right
                p.mb-0 #[b Capítulo VII.] Actividades industriales, comerciales o de servicios diferentes a las contempladas en los Capítulos v y vi con vertimientos puntuales a cuerpos de agua superficiales.

              li 
                i.fas.fa-angle-right
                p.mb-0 #[b Capítulo VIII.] Parámetros fisicoquímicos y sus valores límites máximos permisibles en los vertimientos puntuales de aguas residuales no domésticas (arnd) al alcantarillado público. 
    .row.justify-content-center.align-items-center         
      .col-lg-10.bg-3.p-4
        .row.justify-content-center.align-items-center          
          .col-lg-auto.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/ico.svg')
          .col.my-3
            p(data-aos="fade-down") Para complementar la información consultar la siguiente información
            p(data-aos="fade-down").mb-0 En el material complementario puede revisar:             
    
          .col-lg-auto.my-3                           
            a.anexo(:href="obtenerLink('/downloads/resolucion-631-de-2015.pdf')" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p.mb-0 RESOLUCIÓN 631 DE 2015                              
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
