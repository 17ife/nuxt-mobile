<template>

<div class="wrapper" style="height: auto; min-height: 100%;">

	<navbar></navbar>
  <!-- Left side column. contains the logo and sidebar -->
	<leftbar></leftbar>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper" style="min-height: 960px;">

  </div>

	<footbar></footbar>

	<rightbar></rightbar>
  <!-- /.control-sidebar -->
  <!-- Add the sidebar's background. This div must be placed
       immediately after the control sidebar -->
  <div class="control-sidebar-bg">
    <commidtyContainer></commidtyContainer>
  </div>

</div>

</template>
<script>
import navbar      from '~/components/navbar.vue';
import leftbar     from '~/components/leftbar.vue';
import footbar     from '~/components/footbar.vue';
import rightbar    from '~/components/rightbar.vue';

import commidtyContainer from "~/components/containers/commodity/tablelist.vue";

export default{
  data(){
    return {}
  },
  methods:{

  },
  components:{
    navbar,
    leftbar,
		footbar,
		rightbar,
    commidtyContainer
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
