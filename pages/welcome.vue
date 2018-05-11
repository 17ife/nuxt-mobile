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

  <div class="control-sidebar-bg">
    <commidtyContainer></commidtyContainer>
  </div>

</div>

</template>
<script>

import axios    from 'axios';
import navbar   from '~/components/navbar.vue';
import leftbar  from '~/components/leftbar.vue';
import footbar  from '~/components/footbar.vue';
import rightbar from '~/components/rightbar.vue';

import commidtyContainer from "~/components/containers/commodity/tablelist.vue";

export default{
  data(){
    return {}
  },
  async asyncData () {
    let result = await axios.get('http://localhost:7001/tags');
    return {
      tags : result.data
    };
  },
  methods:{
    getTags(){
      return this.tags;
    }
  },
  components:{
    navbar,
    leftbar,
		footbar,
		rightbar,
    commidtyContainer
  },
  // 生命周期
  beforeCreate(){},
  created(){},
  beforeMount(){},
  mounted(){
    this.getTags();
  },
  beforeUpdate(){},
  updated(){}
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
