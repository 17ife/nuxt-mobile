<template>
<header class="main-header">

  <!-- Logo -->
  <a href="javascript:void(0)" class="logo" >
    <span class="logo-mini"><b>{{logo.part1}}</b>{{logo.part2}}</span>
    <span class="logo-lg"><b>{{logo.part3}}</b>{{logo.part4}}</span>
  </a>

  <!-- Header Navbar: style can be found in header.less -->
  <nav class="navbar navbar-static-top">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>
    <!-- Navbar Right Menu -->
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">
        <!-- Navbar Email Menu -->
        <!-- <emailpart></emailpart> -->
        <!-- Navbar Info Menu -->
        <!-- <infopart></infopart> -->
        <!-- Navbar Info Menu End -->
        <!-- <taskpart></taskpart> -->
        <!-- User Account -->
        <!-- <userinfo></userinfo> -->
        <!-- Control Sidebar Toggle Button -->
        <!--<li><a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a></li> -->
      </ul>
    </div>
  </nav>
</header>
</template>

<script>

import emailpart from "~/components/navbar/email.vue";
import infopart  from "~/components/navbar/info.vue";
import taskpart  from "~/components/navbar/task.vue";
import userinfo  from "~/components/navbar/userinfo.vue";

export default {
  components:{
    emailpart,
    infopart,
    taskpart,
    userinfo
  },
  data(){
    return {
      userinfo:{

      },
      logo:{
        part1:"",
        part2:"",
        part3:"TST",
        part4:".Admin"
      }
    }
  },
  methods:{
    emailMoreInfo(){}
  },
  
  // 生命周期
  beforeCreate(){},
  created(){},
  beforeMount(){},
  mounted(){},
  beforeUpdate(){},
  updated(){}
}

</script>

<style scroped>
</style>
