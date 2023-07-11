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
            h4.text-center Punto de descarga 
            p.mb-0  Sitio o lugar donde se realiza un vertimiento, de manera directa o indirecta al cuerpo de agua (Ministerio de ambiente y desarrollo sostenible, 2015).  

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Tarifa de la tasa retributiva  
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
            h4.text-center Vertimiento puntual directo al recurso hídrico  
            p.mb-0 Es aquel vertimiento realizado en un punto fijo y directamente al recurso hídrico (Ministerio de ambiente y desarrollo sostenible, 2015).  

      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/74.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Vertimiento puntual indirecto al recurso hídrico  
            p.mb-0 Es aquel vertimiento que se realiza desde un punto fijo a través de un canal natural o artificial o de cualquier medio de conducción o transporte a un cuerpo de agua superficial (Ministerio de ambiente y desarrollo sostenible, 2015).  

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/75.png')
      .col-lg-8.my-3
        p(data-aos="fade-down") En si la carga contaminante a través de su cuantificación permite al usuario plantear estrategias de tratamiento para reducirla o controlarla de acuerdo con la tecnología de tratamiento de aguas residuales que desee implementar. Es así como este parámetro permite también desarrollar memorias de cálculo y proyecciones de diseño de un tren de tratamiento de aguas residuales de acuerdo con necesidades específicas.

        p(data-aos="fade-down") La remoción de un porcentaje de carga contaminante, independientemente de la cantidad producida, permite el vertimiento de grandes cantidades de contaminantes a las industrias de gran tamaño con tecnologías obsoletas y exige tratamientos más estrictos para industrias que han implantado procesos o tecnologías limpias, así como a las industrias pequeñas para las cuales el volumen e impacto de los vertimientos no justifica una remoción de carga. Por eso es necesario plantear enfoques de control más efectivos y equitativos (MMAVDT, 2002).        


    .row.fondo-tema10-1-1.align-items-center.pb-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-start          
          .col-lg-2.my-3
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/76.png')
          .col-lg-10.my-3
            p(data-aos="fade-down").mt-3 De acuerdo con el decreto único ambiental 1076 de 2015 la Carga Contaminante diaria (CC) es el resultado de multiplicar el caudal promedio por la concentración de una sustancia, elemento o parámetro contaminante por el factor de conversión de unidades y por el tiempo diario de vertimiento del usuario, medido en horas por día, es decir: 
            .row.mb-4
              .col-lg-auto
                .bgw.p-4
                  h4(data-aos="fade-down").mb-0 CC. = Q x C x 0.0036 x t
                  
            p.mb-1(data-aos="fade-down") #[b CC] = Carga Contaminante, en kilogramos por día (kg/día)
            p.mb-1(data-aos="fade-down") #[b Q] = Caudal promedio de aguas residuales, en litros por segundo (l/s)
            p.mb-1(data-aos="fade-down") #[b C] = Concentración del elemento, sustancia o compuesto contaminante, en miligramos por litro (mg/L)
            p.mb-1(data-aos="fade-down") #[b 0.0036] = Factor de conversión de unidades (de mg/s a kg/h)
            p.mb-1(data-aos="fade-down") #[b t] = Tiempo de vertimiento del usuario, en horas por día (h)

    p(data-aos="fade-down").my-5 A continuación, se puede apreciar un ejemplo de los cálculos de carga contaminante para una planta de tratamiento convencional con dos concentraciones contaminantes la cual cuenta con los siguientes datos: 

    .row.justify-content-center.align-items-center.mb-4          
      .col-lg-4.my-3
        .bg36.p-5.brad.text-center
          p.mb-1 Caudal de vertimiento continuo:
          h5 Q=0,05L/s

          p.mb-1 Concentraciones iniciales:
          h5.mb-1 CDBO= 444,44mg/L
          h5 CSST= 555,55mg/L

          p.mb-1 Eficiencia del sistema anaerobio:
          h5.mb-1 DBO: 40%
          h5 SST: 60%

          p.mb-1 Eficiencia del sistema de filtración FAFA:
          h5.mb-1 DBO: 67%
          h5.mb-0 SST: 50%
      .col-lg-8.my-3
        p Para Pedraza (2016), el esquema para el cálculo de cargas contaminantes de un sistema de tratamiento de aguas residuales domésticas.

        .row  
          .col-auto
            h5.bg-t1.p-3 Desarrollo de los cálculos:

        p.mb-1 En primera instancia se calculan las cargas contaminantes iniciales:
        h5 CC. = Q x C x 0.0036 x t

        p.mb-1 Entonces:
        h5 Cc DBO = 0,05L/s x 444,44mg/L x 0.0036 x 24 h
        h5 CC. DBO= 1,92 Kg/día

        p #[b Nota:] el vertimiento es continuo por lo cual se le asigna un tiempo de descarga de 24 horas al día.

        p.mb-1 Cc SST = 0,05L/s x 555,55mg/Lx 0.0036 x 24 h
        p CC. SST = 2,4 Kg/día

    .row.justify-content-center.mb-4          
      .col-lg-6.my-3(data-aos="fade-right")
        .bg5.p-4.brad.h-100
          .bgw.p-3.brad.mb-4
            p(data-aos="fade-down").mb-0 Para calcular la remoción del tren de tratamiento se realiza el siguiente cálculo:
 
          h4 R= Cc x Ef
          p Donde:
          p R= Remoción de la unidad de tratamiento
          p.mb-0 Ef= porcentaje de la eficiencia en fracción decimal por parámetro         
        
      .col-lg-6.my-3(data-aos="fade-left")
        .bg5.p-4.brad.h-100
          .bgw.p-3.brad.mb-4
            p(data-aos="fade-down").mb-0 Para calcular la deficiencia en remoción del tren de tratamiento se realiza el siguiente cálculo: 
 
          h4 DR= Cc x Def
          p Donde:
          p R= Deficiencia en remoción de la unidad de tratamiento
          p.mb-0 Def= porcentaje que no removió la unidad de tratamiento en fracción decimal por parámetro

    .row.justify-content-center.align-items-center.mb-5.bg-1           
      .col-lg-6(data-aos="fade-left")
        .p-3
          p Entonces:

          p Remoción en carga contaminante para los tanques anaerobios:
          h5 R DBO= 1,92 Kg/día x 0,40 = 0,76Kg/día (en remoción)
          h5 R SST= 2,4Kg/día x 0,60 = 1,44Kg/día (en remoción)

          p La deficiencia de la remoción seria entonces:

          h5 DR DBO= 1,92Kg/día x 0,60 = 1,15Kg/día (no removidos)
          h5 DR SST= 2,4Kg/día x 0,40= 0,96kg/día (no removidos)                                                    
      .col-lg-6(data-aos="fade-right")
        .p-3
          p Remoción en carga contaminante para los filtros anaerobios:

          h5 R DBO= 1,15Kg/día x 0,67= 0,77Kg/día (en remoción)
          h5 R SST= 0,96Kg/día x 0,50 = 0,48Kg/día (en remoción)

          p La deficiencia de la remoción sería entonces:

          h5 DR DBO= 1,15Kg/día x 0,33 = 0,38Kg/día (no removidos)
          h5 DR SST= 0,96Kg/día x 0,50= 0,48kg/día (no removidos)
      .col-lg-12.p-0
        .bg-2.p-3 
          p.text-center.mb-0 #[b Nota:] El valor de la carga contaminante es la DR (Cc no removida) de la unidad de tratamiento anterior.    

    p(data-aos="fade-down").mb-5 Para calcular la eficiencia Total de la planta de tratamiento se realiza el siguiente cálculo:

    h5(data-aos="fade-down") ET =((Ci – Cf)/ Ci) x 100
    .row  
      .col-auto    
        .bg-2.p-3.brad.my-4(data-aos="flip-down")
          P.mb-0 Nota: para calcular la concentración final se debe tomar la misma fórmula de carga contaminante y despejar C

    p(data-aos="fade-down").mb-5 Entonces:

    h5(data-aos="fade-down") ET DBO= ((444,44 mg/L - 87,96 mg/L)/ 444,44 mg/L) x 100
    h5(data-aos="fade-down") ET DBO= 80,2%
    h5(data-aos="fade-down") ET = ((555,55 mg/L - 111,1 mg/L)/ 555,55 mg/L) x 100
    h5(data-aos="fade-down") ETSST= 80,0%                         
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
