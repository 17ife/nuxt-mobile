<template>
	<div >
		<navbar></navbar>
		<div class="mainContainer">
			
		</div>
	</div>
</template>

<script>

import navbar from '~/components/navbar.vue'

export default {
	components: {
    navbar
  },
	methods:{
		btn:function(){
			this.$toast('Hello world!')
		}
	}
}
</script>

<style scoped>
.mainContainer{
	position : absolute;
	width : 100%;
	height : calc(100% - 70px);
	top : 70px;
}
</style>