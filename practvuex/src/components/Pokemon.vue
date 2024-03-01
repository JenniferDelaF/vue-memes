<template>
	<div class="col-4 card">
		<img class="card-img-top" :src="props.pokemon.foto"/>
		<div class="card-body">
			<h5 class="card-title">{{ props.pokemon.nombre }}</h5>
			<p class="card-text">{{ props.pokemon.descripcion }}</p>
			<a :href="props.pokemon.link" class="btn btn-primary">Descripción</a>
		</div>
	</div>
</template>

<script>
export default {
    props: {
        pokemon: Object,
    },

  setup(props){
    return{
		props
    }
  },
}
</script>

<style scoped>
.pokemon {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid grey;
}
.pokemon img {
    max-height: 200px;
    max-width: 250px;
}
</style>