<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.cs
    .titulo-principal.color-acento-contenido(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 9
      h1 Aforos para vertimientos

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-8      
        .row.justify-content-center.align-items-center         
          .col-auto.my-3 
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/56.png') 
          .col.my-3
            p(data-aos="fade-down").mb-0 El aforo o toma de Caudal de un flujo de agua es una medición que se utiliza de base para el diseño y construcción de cualquier estructura hidráulica tanto para aguas potables, como residuales. Esto se da a partir de los conceptos o fórmulas básicas para el cálculo de caudal: 
      .col-lg-4
        .bgn.p-4.brad
          p(data-aos="fade-down").text-center #[b Q=] volumen / tiempo

          p(data-aos="fade-down").text-center.mb-0 #[b Q=] área x velocidad       
          //- img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/55.svg') 

    p(data-aos="fade-down").mb-5 Para la medición de caudal se debe tener en cuenta el tipo de flujo de agua que se va a aforar y de esta manera se puede establecer el tipo de aforo más conveniente a utilizar.

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="fade-right")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/57.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Una vez inspeccionado el sitio donde se realizará el monitoreo, se determina el método para realizar el aforo, que depende de si el vertimiento se presenta a través de una tubería o de un canal abierto. Entre las posibilidades para realizar el aforo están: método volumétrico, vertedero, canales abiertos, flotadores, molinete o micromolinete (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).     
    .bg29.p-5
      h5(data-aos="fade-down") Método volumétrico mediante balde o caneca: 
      p(data-aos="fade-down").mb-5 #[b Este método se aplica para tubería o canal abierto, cuando el vertimiento presenta una caída de agua en la cual se pueda interponer un recipiente; se requiere un cronómetro y un recipiente aforado (balde de 10 o 20 litros con graduaciones de 1 L, o caneca de 55 galones con graduaciones de 1 a 5 galones)]. Se utiliza un balde para caudales bajos o una caneca cuando se deban manejar grandes caudales. El recipiente se purga dos o tres veces con porciones de aproximadamente 1 L (para el balde) o 10 L (para la caneca) del efluente, que se desechan. Luego se coloca el recipiente bajo la descarga de tal manera que reciba todo el flujo; de manera simultánea se activa el cronómetro. Se debe tener un especial cuidado en el momento de la toma de muestra y la medición del tiempo, ya que es un proceso simultáneo donde el tiempo comienza a tomarse en el preciso instante que el recipiente se introduce a la descarga y se detiene en el momento en que se retira de ella (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-6
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/59.png') 
        .col-lg-6
          p(data-aos="fade-down") Se toma un volumen de muestra cualquiera dependiendo de la velocidad de llenado y se mide el tiempo transcurrido desde que se introduce a la descarga hasta que se retira de ella; siendo Q el caudal (en litros por segundo, L/s), V el volumen (en litros, L), y t el tiempo (en segundos, s), el caudal se calcula como Q = V / t, para ese instante de tiempo. Este método tiene la ventaja de ser el más sencillo y confiable, siempre y cuando el lugar donde se realice el aforo garantice que al recipiente llegue todo el volumen de agua que sale por la descarga; se debe evitar la pérdida de muestra en el momento de aforar, así como represamientos que permitan la acumulación de sólidos y grasas. Este método es de fácil utilización en el caso que el suelo donde se disponga la caneca sea firme y no permite que esta se hunda o se mueva. Dentro de los principales problemas que se pueden presentar es la manipulación de las canecas por su peso exagerado (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007). 

      h5(data-aos="fade-down") Método del vertedero: 
      p(data-aos="fade-down") Este método aplica para plantas de tratamiento, grandes industrias etc., según las características físicas (geometría) de la salida del efluente, y en el caso que el método volumétrico sea inoperante, se puede aplicar el método del vertedero, que consiste en una obstrucción hecha en el canal para que el líquido retroceda un poco atrás de ella y fluya sobre o a través de ella. Si se mide la altura de la superficie líquida corriente arriba es posible determinar el flujo. La posibilidad de utilizar este método dependerá de las características del efluente y de las instalaciones que este posea (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007). 

    .row.justify-content-center.mb-5.mtop.px-md-4 
      .col-lg-10
        .bg14.p-5.brad
          .row.justify-content-center.align-items-center        
            .col-lg-5.my-3        
              .bgw.p-5.brad
                img.img-a.img-t(data-aos="fade-down")(src='@/assets/curso/temas/60.png', alt='')
            .col-lg-7.my-3                
              p(data-aos="fade-down").mb-0 En caso de tomar la decisión de utilizar un vertedero de geometría conocida implica necesariamente que el flujo del vertimiento se dirija sobre un canal abierto, en el cual se pueda conocer la carga o cabeza (H) de la corriente sobre el vertedero. Con este valor se podrá determinar el caudal en el canal. Este método no es muy aplicable por dos razones: a) la mayoría de las descargas se realizan por medio de tuberías y b) el lograr coincidir un vertedero de geometría conocida (rectangular con o sin contracción, triangular o trapezoidal) y graduado con el ancho del canal es bastante improbable (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).

    h5(data-aos="fade-down") Canales abiertos:  
    .row.justify-content-center.align-items-center.mb-5
      .col.my-3
        p(data-aos="fade-down").mb-0 Aplica para efluentes como canales, quebradas, ríos, zanjas etc. En algunas ocasiones se podrá observar la presencia de instalaciones que permiten la salida fácil del vertimiento y con dimensiones conocidas o fácilmente medibles, una vez se conozca el área de la sección transversal de la salida del vertimiento se determina la velocidad de salida. Esta velocidad se puede obtener mediante la utilización de un elemento que flote a lo largo del canal o tubería (método flotador), de manera que pueda determinarse la velocidad superficial del vertimiento o mediante la utilización de un molinete para hallar la velocidad media de la corriente (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).
      .col-auto.my-3 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/62.svg')

    .row  
      .col-auto
        h4.bg-t1.p-3(data-aos="fade-down") Molinete  

    h5(data-aos="fade-down") Implementos:

    .row
      .col-lg-8.my-3    
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/63.svg' alt='AvatarTop')
          .tarjeta.bg28.j
            .p-3.ps-0
              p(data-aos="fade-down").mb-0 #[b Molinete], con hélice del tamaño apropiado para el intervalo de caudales que se va a aforar. Se coloca el número de secciones del eje del molinete necesarias para la profundidad del canal. Según la frecuencia de uso, debe calibrarse regularmente y verificar el nivel de aceite interno. Una vez terminado el aforo se guarda completamente seco.                        
      .col-lg-4.my-3
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/64.svg' alt='AvatarTop')
          .tarjeta.bg28.j
            .p-3
              p(data-aos="fade-down").mb-0 #[b Cinta métrica], de un material polimérico que resista a las condiciones de trabajo de campo.

    .row.mb-4
      .col-lg-4.my-3    
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/65.svg' alt='AvatarTop')
          .tarjeta.bg28.j
            .p-3.ps-0
              p(data-aos="fade-down").mb-0 #[b Cronómetro].  

      .col-lg-4.my-3    
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/66.svg' alt='AvatarTop')
          .tarjeta.bg28.j
            .p-3
              p(data-aos="fade-down").mb-0 #[b Tacómetro], para la determinación de las revoluciones de la hélice. Comúnmente funciona con baterías, por lo que se debe verificar su estado. 

      .col-lg-4.my-3    
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img.img-a.img-t(src='@/assets/curso/temas/67.svg' alt='AvatarTop')
          .tarjeta.bg28.j
            .p-3
              p(data-aos="fade-down").mb-0 #[b Varillas], para la medición de profundidades del canal; se utilizan por lo general, las que trae el molinete para su instalación en la sección transversal de control del canal a aforar.

    .bg30
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-4
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/69.png')
        .col-lg-6.pt-5                        
          p(data-aos="fade-down") Se establece la sección transversal de control en la que se realizará el aforo. Para seleccionar la sección transversal del canal que se tomará para el aforo, se debe de tener en cuenta las siguientes condiciones:

          ul.lista-ul.fa-ul(data-aos="fade-down")
            li 
              i.fas.fa-angle-right.c6
              | No deben existir obstáculos sobre la corriente que alteren el paso del agua.
            li 
              i.fas.fa-angle-right.c6
              | Seleccionar una sección en la que las orillas del canal sean paralelas.
            li 
              i.fas.fa-angle-right.c6
              | Evitar secciones con presencia de excesiva turbulencia.  

      p(data-aos="fade-down").mb-5 #[b Se tiende una cuerda sobre el canal, que señale la sección transversal de control seleccionada. Esta cuerda debe permanecer amarrada firmemente a las orillas del canal, de manera que se evite cualquier desplazamiento de la misma]. Para facilitar la determinación de los puntos de medición de velocidad de la corriente, esta cuerda puede tener marcaciones cada metro o medio metro. Si no es posible tender esta cuerda, se debe tomar como referencia algún objeto ubicado en las orillas del canal, para verificar en el desarrollo del aforo la localización de la misma. Tomando como referencia la cuerda tendida sobre el canal, se mide con la cinta métrica el ancho del mismo (W). Se establece el número y espaciamiento entre los puntos en los que se medirá la velocidad del agua con el molinete (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).
      
    .row.justify-content-center.mb-5.px-md-4 
      .col-lg-6.up      
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/70.png')
      .col-lg-6.up
        .bg31.p-5.brad.px-4
          p(data-aos="fade-down") #[b Para un canal de fondo plano sin diferencia de profundidades a lo largo de la sección transversal], se toma la velocidad de la corriente con el molinete sobre una misma posición en el canal (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).  

          p(data-aos="fade-down").mb-0 #[b Para un canal de fondo irregular o con diferencias de profundidad, se toman entre tres y seis datos de velocidad de la corriente con el molinete], según el ancho del canal (entre más ancho, tomar mayor número de mediciones). Para esto dividir el ancho de la sección transversal entre cuatro a siete partes (denominadas verticales) y tomar mediciones de velocidad y profundidad (H) del canal en cada una de estas (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).

    p(data-aos="fade-down").mb-5 #[b Para medir la velocidad de la corriente con el molinete se selecciona el molinete a utilizar según el intervalo de caudal a aforar]. Se inserta el molinete en el número de varas necesarias para que la base de la primera de ellas descanse sobre el fondo del canal. Se coloca la punta del molinete en dirección aguas arriba de la corriente, a una altura equivalente al 20% y 80% de la profundidad del canal en ese punto (tirante). Se verifica el libre movimiento de la hélice. Se coloca en ceros el tacómetro del molinete y el cronómetro y se comienza el conteo simultáneamente en los dos dispositivos (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).  

    .row.justify-content-center.align-items-center.mb-5.bg25.pb-0.p-4           
      .col-lg-6
        p(data-aos="fade-down") Al minuto de iniciado el conteo del tacómetro, se determina la cantidad de revoluciones de la hélice. Se repite la medición de velocidad para verificar la precisión de los datos. Se determina la profundidad del nivel de agua en el mismo lugar en el que se tomó la medida de velocidad de la corriente. Repetir los anteriores pasos para los demás puntos en los que se determinará la velocidad de la corriente (Instituto de Hidrología, Meteorología y Estudios Ambientales, 2007).  
      .col-lg-6
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/71.png')

    h5(data-aos="fade-down") Flotadores: 
    p(data-aos="fade-down") Obtener el área transversal midiendo el ancho del efluente, luego dividir en secciones y medir la profundidad en cada una de ellas para obtener el área transversal promedio. Medir y demarcar una distancia conocida a lo largo del canal; colocar suavemente sobre la superficie del agua un elemento flotante en el canal y simultáneamente activar el cronómetro; medir el tiempo transcurrido hasta que el objeto termine de recorrer la distancia asignada. Repetir este proceso varias veces y calcular el promedio. 
    p(data-aos="fade-down").mb-5 El objeto flotante no se debe dejar caer ni arrojar sobre la corriente, por cuanto esto le imprimiría una velocidad que afecta la medición. 

    .row.justify-content-center
      .col-lg-10.p-0
        .row.justify-content-center.align-items-end.bg32.p-4.me-1.pb-0       
          .col-lg-4
            img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/72.png')
          .col-lg-8(data-aos="fade-down")
            p #[b V ]= X / t, donde
            p #[b V ]= velocidad superficial, m/s
            p #[b X ]= longitud recorrida por el elemento flotante, m
            p #[b t ]= tiempo de recorrido del elemento flotante, s
            p El caudal se calcula como:
            p #[b Q ]= V * A, donde
            p #[b Q ]= caudal, m#[sup 3]/s
            p #[b V ]= velocidad superficial, m/s
            p #[b A ]= área transversal promedio, m2 (dependiendo de la geometría del sitio)
            p #[b A=] W * (ΣHi)/n, (ancho del canal por el promedio de las profundidades) 
        figcaption.mt-3 Instituto de Hidrología, Meteorología y Estudios Ambientales. (2007, p. 12).  
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
