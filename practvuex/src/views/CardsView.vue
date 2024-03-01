<template>
    <!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Cards</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
	
</head>
<body>
	<div class="container">
		<div class="row mt-3">
			<div class="col-12">
				<div style="background-color: blue; color: white; text-align: center;">
					<h1>Cabecera</h1>
				</div>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-12 col-sm-6 col-md-4" v-for="(item, index) in $store.state.rrss" :key="index">
				<div class="card">
					<img class="card-img-top" :src="item.imagen" alt="" />
					<div class="card-body">
						<h5 class="card-title">{{item.titulo}}</h5>
						<p class="card-text">{{ item.descripcion }}</p>
						<RouterLink to="/pagina" class="btn btn-primary">Más información</RouterLink>
					</div>
				</div>
			</div>
        </div>
	</div>

</body>
</html>

</template>
<script>
import { RouterLink } from 'vue-router'
import {useStore} from 'vuex'

export default {
  setup(){
    const store = useStore();
    return{
		RouterLink,
      ...store.state,
    }
  },
}
</script>
<style lang="scss" scoped></style>