<template>

<div class="wrapper" style="height: auto; min-height: 100%;">

	<navbar></navbar>
  <!-- Left side column. contains the logo and sidebar -->
	<leftbar :tags="tags"></leftbar>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper" style="min-height: 600px;">
    <commidtyContainer></commidtyContainer>
  </div>

	<footbar></footbar>

	<rightbar></rightbar>

  <div class="control-sidebar-bg">
    
  </div>

</div>

</template>
<script>

import { getData } from '~/plugins/axios';
import navbar   from '~/components/navbar.vue';
import leftbar  from '~/components/leftbar.vue';
import footbar  from '~/components/footbar.vue';
import rightbar from '~/components/rightbar.vue';

import commidtyContainer from "~/components/containers/commodity/list.vue";

export default{
  data(){
    return {}
  },
  async asyncData () {
     let tags = await getData('/tags','get',null);
     return { tags : tags.data }
  },
  methods:{

    getTags(){
      return this.tags;
    },

    test(){
      let vm = this;
      getData('/tags','get',null).then(res => {
        vm.tags = res.data;
      },err => {
        console.log(err)
      })
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
