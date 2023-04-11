<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 10
      h1 Carga contaminante

    p(data-aos="fade-down") De acuerdo con el decreto 050 de 2018 por el cual  se modifica parcialmente el Decreto 1076 de 2015, Decreto Único Reglamentario del Sector Ambiente y Desarrollo Sostenible en relación con los Consejos Ambientales Regionales de la Macrocuencas (CARMAC), el Ordenamiento del Recurso Hídrico y Vertimientos y se dictan otras disposiciones"; La carga contaminante es el producto de la concentración másica de una sustancia por el caudal volumétrico del líquido que la contiene determinado en el mismo sitio. Se expresa en unidades de masa sobre tiempo (Ministerio de ambiente y desarrollo sostenible, 2018).

    p(data-aos="fade-down").mb-5 En el cálculo de la carga contaminante de cada sustancia, elemento o parámetro contaminante objeto del cobro de la tasa retributiva por vertimientos, se deberá descontar a la carga presente en el vertimiento puntual, las mediciones de la carga existente en el punto de captación, siempre y cuando se capte en el mismo cuerpo de agua receptor de la descarga objeto del pago de la tasa (Ministerio de ambiente y desarrollo sostenible, 2015).

    SlyderF.text-center.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Caudal promedio (Q)  
            p.mb-0 Corresponde al volumen de vertimientos por unidad de tiempo durante el período de muestreo. Para los efectos del presente capítulo, el caudal promedio se expresará en litros por segundo (1/s) (Ministerio de ambiente y desarrollo sostenible, 2015).  

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Concentración (C) 
            p.mb-0 Es la masa de una sustancia, elemento o parámetro contaminante, por unidad de volumen del líquido que lo contiene. Para los efectos del presente capítulo, la concentración se expresará en miligramos por litro (mg/1) (Ministerio de ambiente y desarrollo sostenible, 2015).

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Cuerpo de Agua 
            p.mb-0  Sistema de origen natural o artificial, localizado sobre la superficie terrestre, conformado por elementos físicos-bióticos y masas o volúmenes de agua, contenidas o en movimiento (Ministerio de ambiente y desarrollo sostenible, 2015).     

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Límites permisibles de vertimiento
            p.mb-0 Es el contenido permitido de una sustancia, elemento o parámetro contaminante, en forma individual, mezclado o en combinación, o sus productos de metabolismo establecidos en los permisos de vertimiento y/o en los Planes de Saneamiento y Manejo de Vertimientos – PSMV (Ministerio de ambiente y desarrollo sostenible, 2015).  

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Punto de captación 
            p.mb-0 Es el sitio o lugar donde el usuario toma el recurso hídrico para cualquier uso (Ministerio de ambiente y desarrollo sostenible, 2015). 

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Punto de descarga. 
            p.mb-0  Sitio o lugar donde se realiza un vertimiento, de manera directa o indirecta al cuerpo de agua (Ministerio de ambiente y desarrollo sostenible, 2015).  

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Tarifa de la tasa retributiva.  
            p.mb-0 Es el valor que se cobra por unidad de carga contaminante vertida al recurso hídrico (Ministerio de ambiente y desarrollo sostenible, 2015).  

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Usuario
            p.mb-0 Es toda persona natural o jurídica, de derecho público o privado, que realiza vertimientos puntuales en forma directa o indirecta al recurso hídrico (Ministerio de ambiente y desarrollo sostenible, 2015). 

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Vertimiento al recurso hídrico  
            p.mb-0  Es cualquier descarga final al recurso hídrico de un elemento, sustancia o parámetro contaminante, que esté contenido en un líquido residual de cualquier origen (Ministerio de ambiente y desarrollo sostenible, 2015).  

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Vertimiento puntual directo al recurso hídrico.  
            p.mb-0 Es aquel vertimiento realizado en un punto fijo y directamente al recurso hídrico (Ministerio de ambiente y desarrollo sostenible, 2015).  

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Vertimiento puntual indirecto al recurso hídrico.  
            p.mb-0 Es aquel vertimiento que se realiza desde un punto fijo a través de un canal natural o artificial o de cualquier medio de conducción o transporte a un cuerpo de agua superficial (Ministerio de ambiente y desarrollo sostenible, 2015).  

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/75.png')
      .col-lg-8
        p(data-aos="fade-down") En si la carga contaminante a través de su cuantificación permite al usuario plantear estrategias de tratamiento para reducirla o controlarla de acuerdo con la tecnología de tratamiento de aguas residuales que desee implementar. Es así como este parámetro permite también desarrollar memorias de cálculo y proyecciones de diseño de un tren de tratamiento de aguas residuales de acuerdo con necesidades específicas.

        p(data-aos="fade-down") La remoción de un porcentaje de carga contaminante, independientemente de la cantidad producida, permite el vertimiento de grandes cantidades de contaminantes a las industrias de gran tamaño con tecnologías obsoletas y exige tratamientos más estrictos para industrias que han implantado procesos o tecnologías limpias, así como a las industrias pequeñas para las cuales el volumen e impacto de los vertimientos no justifica una remoción de carga. Por eso es necesario plantear enfoques de control más efectivos y equitativos (MMAVDT, 2002).        


    .row.fondo-tema10-1-1.align-items-center.pb-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center          
          .col-auto
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png')
          .col
            p(data-aos="fade-down").mt-3 De acuerdo con el decreto único ambiental 1076 de 2015 la Carga Contaminante diaria (CC) es el resultado de multiplicar el caudal promedio por la concentración de una sustancia, elemento o parámetro contaminante por el factor de conversión de unidades y por el tiempo diario de vertimiento del usuario, medido en horas por día, es decir: 
            .row.justify-content-start.align-items-center          
              .col-auto                           
                a.anexo.mb-4(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  .anexo__icono
                    img(src="@/assets/template/icono-pdf.svg")
                  .anexo__texto
                    p.mb-0 #[b Anexo.] Consideraciones generales de tratamiento clínico del paciente con COVID-19 en el servicio de urgencias 
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
