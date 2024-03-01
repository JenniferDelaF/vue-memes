import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: "Pokemons",
    pokemons: [],
    rrss: [
      {
        titulo: 'Facebook',
        imagen: '../assets/facebook.jpg',
        descripcion: 'Esta red social es muy atractiva, además es fácil de usar, interactuar con otros usuarios y permite varios tipos de formatos como vídeo, imagen o texto. Aunque en los últimos años, se ha visto bastante afectada debido al escándalo de la protección de datos.',
        masinfo: 'Comenzamos con la red social más famosa en el mundo, y que durante años estuvo en la cima de ser la más utilizada. Esta red social es muy atractiva, además es fácil de usar, interactuar con otros usuarios y permite varios tipos de formatos como vídeo, imagen o texto. Aunque en los últimos años, se ha visto bastante afectada debido al escándalo de la protección de datos.\n¿Quiénes la usan? Aquí encontramos el dato más curioso, es una red para toda la familia, desde los más jóvenes hasta los más mayores. Esta Red Social es de las pocas donde puedes encontrar publicaciones de tus compañeros o amigos y de tus tías o tus padres. Y es que Facebook es la red social favorita de los Millennials y la Generación X.'
      },
      {
        titulo: 'Youtube',
        imagen: '../assets/youtube.png',
        descripcion: 'Gran capacidad de interacción con otras redes y el boom de los influencers o Youtubers.',
        masinfo: 'La plataforma de vídeos youtube, es la segunda red social más usada, y se debe sobre todo por su gran capacidad de interacción con otras redes y el boom de los influencers o Youtubers. También es una de las que más crece en número de usuarios y es una de las mejor valoradas junto con Instagram y Spotify.\nSe lleva de calle a los usuarios más jóvenes, que son los que más contenido audiovisual consumen. Un 43% de los usuarios entre los 16 a 23 años siguen al menos a un influencers a través de Youtube.'
      },
      {
        titulo: 'Instagram',
        imagen: '../assets/instagram.jpg',
        descripcion: 'Esta RRSS ha sido capaz de abrirse paso entre los más jóvenes, que la consideran la red social más importante. De hecho, ya cuenta con 1.000 millones de usuarios.',
        masinfo: 'Esta RRSS ha sido capaz de abrirse paso entre los más jóvenes, que la consideran la red social más importante. De hecho, ya cuenta con 1.000 millones de usuarios.\nLa plataforma ha sabido integrar las opciones de fotografía y vídeo de una forma sencilla y atrayente para el usuario. Incluso la opción de las stories fugaces ha hecho que los usuarios compartan a diario contenido de su día a día con todos sus seguidores.\nLas marcas ya han captado esta tendencia y utilizan para vender sus productos o servicios integrado entre las publicaciones de sus conocidos. Según una encuesta de Metricool, cerca de un 21,1% de los encuestados han comprado a través de Instagram Shopping y según los expertos será una tendencia en alza en los próximos años.'
      },
      {
        titulo: 'TikTok',
        imagen: '../assets/tiktok.png',
        descripcion: 'Se trata de una aplicación para crear y compartir vídeos cortos. Lo que la hace tan atractiva en comparación con el resto, es que prácticamente cualquier persona puede crear contenido debido a su simplicidad. TikTok permite a los usuarios crear y compartir vídeos divertidos mientras cantan, bailan o sincronizan los labios con sus canciones favoritas.',
        masinfo: 'Podríamos decir que TikTok es la red social del momento. Se trata de una aplicación para crear y compartir vídeos cortos. Lo que la hace tan atractiva en comparación con el resto, es que prácticamente cualquier persona puede crear contenido debido a su simplicidad. TikTok permite a los usuarios crear y compartir vídeos divertidos mientras cantan, bailan o sincronizan los labios con sus canciones favoritas.\nPor otro lado, TikTok abarca a un público muy joven. El 41% de los usuarios tienen entre 16 y 24 años y en España la edad oscila entre los 16 y 25 años.'
      },
      {
        titulo: 'LinkedIn',
        imagen: '../assets/linkedin.png',
        descripcion: 'LinkedIn no tiene tanta notoriedad entre los más jóvenes, pero tampoco es una de sus prioridades. La red social LinkedIn busca un perfil más profesional.',
        masinfo: 'A diferencia de las últimas redes, LinkedIn no tiene tanta notoriedad entre los más jóvenes, pero tampoco es una de sus prioridades. La red social LinkedIn busca un perfil más profesional.\nEn todo el mundo LinkedIn tiene más de 610 millones de usuarios, aunque solo 303 millones son usuarios activos. Más del 70% de los usuarios son de fuera de Estados Unidos, aunque este es el país con más usuarios en la red profesional, con 150 millones.\nEn cuanto al perfil del usuario, la franja de edad en la que se encuentra la mayor parte de estos es de 35 a 54 años. Le sigue de cerca la franja los de 25 a 34 años. Más de 46 millones de usuarios registrados en LinkedIn son estudiantes y recién graduados.'
      },
      {
        titulo: 'Twitter',
        imagen: '../assets/twitter.jpg',
        descripcion: 'Twitter es una red social gratuita que te permite escribir mensajes de forma rápida y sencilla.\nCualquier persona puede crear una cuenta o perfil para compartir sus opiniones, gustos e intereses, pero también, para estar informada sobre todo lo que acontece en el mundo, ya que la principal característica de Twitter es que allí encuentras información en tiempo real.',
        masinfo: 'Este año, Twitter abre con peores datos que el año pasado, al ser la Red que mayor tasa de abandono tiene. Aunque se mantiene como una de las redes que más menciones tiene, su tasa de notoriedad ha caído frente a los dos últimos años. Solo en el último cuatrimestre ha perdido a un 3,1% de su comunidad, quedándose en 339,6 millones de twitteros. Con estas cifras, sorprenden datos como el de Alemania, donde se ha producido un incremento del 4,4%.\nAunque la plataforma ha intentado reinventarse en el último año aumentado el límite de caracteres a los 280 y añadiendo la posibilidad de publicar historias como las de Instagram, entre otras novedades, no consigue frenar el descenso. Aun así, sigue siendo un notable escenario de interacción e intercambio de opiniones en temas de actualidad y tendencias.\nActualmente, el género del perfil demográfico de los usuarios de esta plataforma es mayor en hombres que en mujeres. La gran mayoría de hombres que usan esta Red Social se encuentran entre los 25 y 49 años.'
      },
      {
        titulo: 'Pinterest',
        imagen: '../assets/pinterest.png',
        descripcion: 'Pinterest es un lugar donde compartir fotos, infografías, vídeos y todo lo que te interese en Internet. Muchas personas lo usan como catálogo de ideas por su formato tan personalizado que ayuda a poder organizar, archivar y compartir tus pines por temáticas, hobbies, etc.',
        masinfo: 'Aunque Pinterest es una de las redes sociales más desconocidas y que menos atención atraen en occidente, esta suma 322 millones de usuarios activos mensuales en todo el mundo, cifra cercana a los 339 millones de Twitter. Aumentó un 29% con respecto el año 2019.\nPinterest es un lugar donde compartir fotos, infografías, vídeos y todo lo que te interese en Internet. Muchas personas lo usan como catálogo de ideas por su formato tan personalizado que ayuda a poder organizar, archivar y compartir tus pines por temáticas, hobbies, etc.'
      },
    ]
  },
  getters: {
  },
  mutations: {
    setPokemons(state,payload){
      state.pokemons = payload;
    },
  },
  actions: {
    async getPokemons({commit}){
      try{
        const response = await fetch("https://raw.githubusercontent.com/JenniferDelaF/vue-memes/main/animales.json");
        const result = await response.json();
        commit("setPokemons", result);
        console.log("Mis pokemons");
        console.log(result);
      }catch(error){
        console.log(error);
      }
    }, 
  },
  modules: {
  }
})
