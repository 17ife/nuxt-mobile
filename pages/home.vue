<template>
<div class="container">
	<div>home</div>
	<button @click="btn">click me</button>
</div>
</template>

<script>

export default {
	methods:{
		btn:function(){
			this.$toast('Hello world!')
		}
	}
}
</script>
