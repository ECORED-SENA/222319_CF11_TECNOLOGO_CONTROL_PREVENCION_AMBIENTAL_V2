<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 8
      h1 Características del vertimiento

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/48.png') 
      .col-lg-9
        p(data-aos="fade-down").mb-0 Con el propósito de darle cumplimiento a la normatividad legal vigente en relación con el control de la carga contaminada de los vertimientos de las organizaciones, a continuación, se podrá encontrar una descripción general de los métodos de determinación de la concentración de parámetros que reglamenta la Resolución pertinente 0631 del 2015. Es relevante indicar que se debe profundizar en tema de la preservación de cada una de las muestras para cada análisis, teniendo en cuenta que las condiciones indicadas deben ser diferentes dependiendo el parámetro a determinar, esta información se puede encontrar en la NTC 5767 – 3.

    .row.justify-content-center.align-items-start
      .col-lg-9
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg27")
          .row.justify-content-center.align-items-center(titulo="Potencial de Hidrógeno (pH)") 
            .col-11
              p.mb-0 el pH o la actividad del ion hidrógeno indican a una temperatura dada, la intensidad de las características ácidas o básicas del agua. El pH se define como el logaritmo de la inversa de la actividad de los iones hidrógeno, pH = - log [H+] [H+] = actividad de los iones hidrógeno en mol/L. El método consiste en la determinación de la actividad de los iones hidrógeno por medidas potenciométricas usando un electrodo combinado o un electrodo estándar de hidrógeno de vidrio con un electrodo de referencia. El análisis puede ser realizado tanto en campo como en el laboratorio. En caso de que el análisis se realice en el laboratorio, llenar el recipiente de muestreo completamente sin cámara de aire. Realizar la medida antes de 2 horas de recolectada la muestra (Ministerio de Vivienda, Ordenamiento Territorial y Medio Ambiente, 1996). 

          .row.justify-content-center.align-items-center(titulo="Demanda Química de Oxígeno (DQO)") 
            .col-11
              p la Demanda Química de Oxígeno (DQO) determina la cantidad de oxígeno requerido para oxidar la materia orgánica en una muestra de agua, bajo condiciones específicas de agente oxidante, temperatura y tiempo. Las sustancias orgánicas e inorgánicas oxidables presentes en la muestra, se oxidan mediante reflujo cerrado en solución fuertemente ácida (H2SO4) con un exceso de dicromato de potasio (K2Cr2O7) en presencia de sulfato de plata (Ag2SO4) que actúa como agente catalizador, y de sulfato mercúrico (HgSO4) adicionado para eliminar la interferencia de los cloruros. Después de la digestión, el K2Cr2O7 remanente se titula con sulfato ferroso amoniacal para determinar la cantidad de K2Cr2O7 consumido. La materia orgánica se calcula en términos de oxígeno equivalente (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007). 

              p.mb-0 Para muestras de un origen específico, la DQO se puede relacionar empíricamente con la DBO, el carbono o la materia orgánicos. El método es aplicable a aguas superficiales y residuales, usando el dicromato de 0,025 N en un rango de 2.0 mg O2/L a 100 mg O2/L, usando el dicromato de 0,10 N en un rango de 10 mg O2/L a 450 mg O2/L y con el dicromato de 0,25 N tiene un intervalo de lectura de 10 mg O2/L a 1000 mg O2/L.  
              
          .row.justify-content-center.align-items-center(titulo="Demanda Bioquímica de Oxígeno (DBO)") 
            .col-11
              p.mb-0 la oxidación microbiana o mineralización de la materia orgánica es una de las principales reacciones que ocurren en los cuerpos naturales de agua y constituye una de las demandas de oxígeno, ejercida por los microorganismos heterotróficos, que hay que cuantificar. Uno de los ensayos más importantes para determinar la concentración de la materia orgánica de aguas residuales es el ensayo de DBO a cinco días. Esencialmente, la DBO es una medida de la cantidad de oxígeno utilizado por los microorganismos en la estabilización de la materia orgánica biodegradable, en condiciones aeróbicas, en un periodo de cinco días a 20 °C. En aguas residuales domésticas, el valor de la DBO a cinco días representa en promedio un 65 a 70% del total de la materia orgánica oxidable. La DBO, como todo ensayo biológico, requiere cuidado especial en su realización, así como conocimiento de las características esenciales que deben cumplirse, con el fin de obtener valores representativos confiables.  

          .row.justify-content-center.align-items-center(titulo="Sólidos Suspendidos Totales (SST)") 
            .col-11
              p las aguas crudas naturales contienen tres tipos de sólidos no sedimentables: suspendidos, coloidales y disueltos.
              ul.lista-ul
                li 
                  i.fas.fa-check-circle.c5
                  | #[b Los sólidos suspendidos] son transportados gracias a la acción de arrastre y soporte del movimiento del agua; los más pequeños (menos de 0.01 mm) no sedimentan rápidamente y se consideran sólidos no sedimentables, y los más grandes (mayores de 0.01 mm) son generalmente sedimentables.

                li 
                  i.fas.fa-check-circle.c5
                  | #[b Los sólidos coloidales] consisten en limo fino, bacterias, partículas causantes de color, virus, etc., los cuales no sedimentan sino después de periodos razonables, y su efecto global se traduce en el color y la turbiedad de aguas sedimentadas sin coagulación.

              p Los sólidos disueltos, materia orgánica e inorgánica, son invisibles por separado, no son sedimentables y globalmente causan diferentes problemas de olor, sabor, color y salud, a menos que sean precipitados y removidos mediante métodos físicos y químicos (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).                                                    

      .col-lg-3
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/49.png', alt='')   

    SlyderF(columnas="col-lg-6 col-xl-6")
      .tarjeta.bg28.p-4.h-100
        img.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/50.png', alt='')
        h5.mb-3 Grasas y aceites: 
        p.mb-0 En este método la grasa y el aceite son extraídos del agua por íntimo contacto con el solvente (n-hexano) y su determinación se realiza gravimétricamente mediante recuperación del solvente en un equipo de destilación. Se aplica para aguas residuales superficiales, domésticas e industriales. Algunas grasas y ácidos grasos especialmente no saturados extraíbles se oxidan con rapidez; en consecuencia, se incluyen precauciones especiales con respecto a la temperatura y desplazamiento de vapor del disolvente para reducir este efecto (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).  
      .tarjeta.bg28.p-4.h-100
        img.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/51.png', alt='')
        h5.mb-3 Sustancias Activas al Azul de Metileno (SAAM):  
        p.mb-0 las sustancias activas al azul de metileno (SAAM), un colorante catiónico, transfieren el azul de metileno desde una solución acuosa a un líquido inmiscible en equilibrio. Esto ocurre durante la formación de un par iónico entre el anión (SAAM) y el catión azul de metileno. La intensidad del color resultante es una medida de las sustancias activas al azul de metileno. Los tensoactivos aniónicos se encuentran entre las muchas sustancias naturales y sintéticas activas al azul de metileno. El método es relativamente simple y preciso, comprende tres extracciones sucesivas desde un medio acuoso ácido con exceso de azul de metileno a una fase orgánica de cloroformo, seguida de la lectura del color azul de dicha fase orgánica mediante espectrofotometría a 652 nm. (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).
      .tarjeta.bg28.p-4.h-100
        img.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/52.png', alt='')
        h5.mb-3 Hidrocarburos:  
        p.mb-0 en ausencia de productos industriales especialmente modificados, el aceite y la grasa están compuestos fundamentalmente de materia grasa de origen animal, vegetal y de hidrocarburos de petróleo. El petróleo y los gases naturales a él asociados constituyen en la actualidad la principal fuente de hidrocarburos, El término hidrocarburo (HC) incluye hidrocarburos alifáticos, formados por cadenas de átomos de carbono en las que no hay estructuras cíclicas, hidrocarburos alicíclicos o simplemente cíclicos, compuestos por átomos de carbono encadenados formando uno o varios anillos e hidrocarburos aromáticos, que constituyen un grupo especial de compuestos cíclicos que contienen en general anillos de seis eslabones en los cuales alternan enlaces sencillos y dobles (IDEAM, 2010).  
      .tarjeta.bg28.p-4.h-100
        img.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/53.png', alt='')
        h5.mb-3 Metales Pesados (Cd, Cr, Cu, Ni, Pb, Zn):  
        p.mb-0 el término de metal pesado se refiere a cualquier elemento químico metálico que tenga una relativa alta densidad y sea tóxico o venenoso en concentraciones bajas. Los ejemplos de metales pesados incluyen el mercurio (Hg), cadmio (Cd) el arsénico (As), el cromo (Cr), el talio (Tl), y el plomo (Pb). Los metales pesados son componentes naturales de la corteza terrestre. (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007). 
      .tarjeta.bg28.p-4.h-100
        img.img-t.mb-3(data-aos="zoom-in")(src='@/assets/curso/temas/54.png', alt='')
        h5.mb-3 Alcalinidad total:  
        p.mb-0 la alcalinidad del agua es su capacidad de neutralizar ácidos, y es la suma de todas las bases titulables; el valor medido puede variar significativamente con el pH de punto final empleado. La alcalinidad es una medida de una propiedad agregada del agua y se puede interpretar en términos de sustancias específicas sólo cuando se conoce la composición química de la muestra (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).  
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
