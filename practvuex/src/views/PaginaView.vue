<template>
	<div class="container">
		<div class="row mt-3" style="background-color: blue; color: white; text-align: center;">
			<div class="col-2 justify-content-center">
				<RouterLink to="/" class="btn btn-primary ms-5">Volver</RouterLink>
			</div>
			<div class="col-10 d-flex justify-content-start">
				<h2>Más información</h2>
			</div>
		</div>
		<div class="row justify-content-center">
			<div class="col-12 col-md-6">
				<h1>Facebook</h1>
				<p>Texto texto texto texto texto texto texto texto texto texto texto texto texto texto.</p>
				<p>Texto texto texto texto texto texto texto texto texto texto texto texto texto texto.</p>
			</div>
		</div>
		<div class="row justify-content-center">
			<img class="col-12 col-md-6" src="../assets/facebook.jpg"  alt="">
		</div>
		<div class="row justify-content-center">
			<div class="col-6 col-md-3 justify-content-start">
				<RouterLink to="/" class="btn btn-primary ms-5">Volver</RouterLink>
			</div>
			<div class="col-6 col-md-3 d-flex justify-content-end">
				<div class="dropdown">
					<button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
						Acciones
					</button>
					<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
					  <li><a class="dropdown-item" href="#">Guardar favorito</a></li>
					  <li><a class="dropdown-item" href="#">Exportar a PDF</a></li>
					  <li><a class="dropdown-item" href="#">Imprimir</a></li>
					  <li><a class="dropdown-item" href="#">Compartir</a></li>
					</ul>
				  </div>
			</div>
		</div>
	</div>
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