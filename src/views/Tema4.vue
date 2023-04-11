<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 4
      h1 Parámetros físicos, químicos y microbiológicos del agua residual

    .bg3.p-4
      p(data-aos="fade-down") Los parámetros fisicoquímicos del agua residual son mediciones que nos permiten determinar la calidad de un vertimiento ya sea para el tratamiento de este, para la descarga al alcantarillado o también a un cuerpo de agua, ver figura 2.
    .row.justify-content-center.mb-5.mtop.px-md-4 
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Laboratorio de parámetros físico, químicos del agua. 
        img.img-a.img-t(data-aos="fade-down")(src='@/assets/curso/temas/11.png', alt='')
        figcaption #[b Nota.] Medición de pH, Oxígeno disuelto y turbidez en planta de tratamiento de artes gráficas. Pedraza, S. (2016). - SENA.

    p(data-aos="fade-down").mb-5 De acuerdo con Pedraza (2016), se puede señalar:
    .row.justify-content-center.align-items-start
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg4")
          .row.justify-content-center.align-items-center(titulo="Potencial de Hidrógeno pH") 
            .col-11
              p.mb-0 El pH es una medida de la concentración de iones Hidrógeno. Se define como el Logaritmo del inverso de la concentración de iones H+ pH = Log 1/[H+]. Su interpretación va relacionada con la alcalinidad o acidez fitulable, los cuales tienen relevancia por encima de 9.6 o por debajo de 4.4 respectivamente. 
          .row.justify-content-center.align-items-center(titulo="Demanda Bioquímica de Oxígeno (DBO)") 
            .col-11
              p Es la cantidad de oxígeno usado por la actividad respiratoria de los microorganismos que utilizan la materia orgánica del agua residual para crecer y para metabolizar a partir de ella y de otros microorganismos sus componentes celulares. Es necesario distinguir entre el ensayo de la DBO y otros ensayos que se les realizan a las aguas contaminadas como los ensayos del TOC (Carbón Orgánico Total) y de la DQO (Demanda Química de Oxígeno). Los resultados de estos ensayos guardan ciertas relaciones entre sí, pero tienen significados diferentes. La DBO5 se mide como mg/lt o ppm de O2 consumidas durante un período de 5 días a 20 °C en la oscuridad. La DBO es la medida por excelencia utilizada por las agencias reguladoras en todo el mundo para medir el impacto de la contaminación causada por las aguas residuales. 

              p.mb-4 Además, a título meramente indicativo se pueden dar los siguientes parámetros: 
              img.img-t(src='@/assets/curso/temas/13.svg', alt='')                

          .row.justify-content-center.align-items-center(titulo="La Demanda Química de Oxígeno (DQO)") 
            .col-11
              p.mb-0 Es la cantidad de oxígeno necesario para oxidar la totalidad de la materia oxidable, tanto Orgánica como Mineral. Se mide en ppm o mg/lt. Es el resultado de una oxidación química en húmedo por medio de mezcla Sulfo-Crómica en Caliente. Guarda cierta relación con la DBO5, siendo esta última una fracción de la primera que oscila entre el 2 y el 70 %. En deshechos poco biodegradables como la gasolina y los Hidrocarburos, se dan las relaciones más bajas. En Aguas poco contaminadas deberá ser inferior a 50 ppm.  
          .row.justify-content-center.align-items-center(titulo="Nitritos") 
            .col-11
              p.mb-0 Suelen ser el resultado de la contaminación con estiércol de ganado y orinas. Se acepta un valor inferior a 0.5 ppm. 
          .row.justify-content-center.align-items-center(titulo="Nitratos") 
            .col-11
              p.mb-0 Suelen ser el resultado de la contaminación con residuos de fertilizantes o con aguas residuales de las composteras. Deberá ser inferior a 10 ppm.  
          .row.justify-content-center.align-items-center(titulo="Fosfatos") 
            .col-11
              p.mb-0 Son el resultado de la contaminación con detergentes, aunque también con estiércol y heces. Producen eutrofización de los cuerpos de agua. Deberá ser inferior a 0.2 ppm. 
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/12.png', alt='')   

    SlyderF.text-center(columnas="col-lg-6 col-xl-4")
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/14.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Conductividad eléctrica 
            p.mb-0 Este parámetro mide el contenido total de sales en el agua. Deberá ser inferior a 0.5 mmhos/cm.     
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/14.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Sólidos Disueeltos Totales TDS
            p.mb-0 Es la cantidad total de sólidos disueltos en el agua. Está relacionada con la conductividad léctrica mediante la fórmula TDS = C.E. (mmhos/cm) x 700; ppm Ss++se mide en ppm. El Decreto 475 de 1998 del Ministerio de Salud establece que para agua potable la conductividad deberá estar comprendida entre 50 y 1000 micromhos/cm.  
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/14.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Sólidos Suspendidos Totales SST:  
            p.mb-0 Es la cantidad de Sólidos que el agua conserva en suspensión después de 10 minutos de asentamiento. Se mide en ppm. El Decreto 475 de 1998 del Ministerio de Salud establece que para agua potable los Sólidos Totales deberán ser inferiores a 500 ppm, sin especificar si son solamente los Sólidos Suspendidos Totales o si incluyen los Sólidos Disueltos Totales.    
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/14.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Sólidos sedimentables 
            p.mb-0 Son aquellos sólidos que sedimentan cuando el agua se deja en reposo durante 1 hora. Se determinan volumétricamente mediante el uso del cono Imhoff.   
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/14.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Turbidez 
            p.mb-0 Su unidad de medida es NTU (Nephelometric Turbidity Units) Es una opalescencia que le confieren al agua los sólidos suspendidos de tamaño coloidal. Se mide en NTU. El Decreto 475 de 1998 del Ministerio de Salud establece que para agua potable la turbidez deberá ser inferior a 5 NTU.    
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/14.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Hidrocarburos 
            p.mb-0 Para vertimientos y escorrentías de estaciones de Servicio, se deberán determinar además los siguientes parámetros: contenido de hidrocarburos. (Grasas, Aceites, Combustibles como Gasolina y ACPM).    
      .tarjeta.tarjeta-avatar.h-100
        img.img-a.img-t(src='@/assets/curso/temas/14.svg' alt='AvatarTop')

        .tarjeta.color-primario.bg5.ts.h-100
          .p-4.pt-5
            h4.text-center Metales pesados totales 
            p.mb-0 Ejemplo de estos son el Cobre, Zinc, Cadmio, Mercurio y Plomo. Aparecen en el agua como desechos especiales de ciertos tipos de industria y también como productos de corrosión de las partes electrónicas de los automóviles. Sus niveles están regulados por las diversas agencias dependiendo del tipo de efluente.  
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
