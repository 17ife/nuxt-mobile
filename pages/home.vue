<template>

	<div class="skin-blue sidebar-mini">
		<navbar></navbar>
    <leftbar></leftbar>
	</div>
</template>
<script>
import navbar  from '~/components/navbar.vue';
import leftbar from '~/components/leftbar.vue';

export default{
  data(){
    return {}
  },
  methods:{

  },
  components:{
    navbar,
    leftbar
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
