<template>
  <header class="main-header">

    <!-- Logo -->
    <a href="javascript:void(0)" class="logo" >
      <span class="logo-mini"><b>A</b>LT</span>
      <span class="logo-lg"><b>Admin</b>LTE</span>
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
          <emailpart></emailpart>
          <!-- Navbar Email Menu End -->

          <!-- Navbar Info Menu -->
          <li class="dropdown notifications-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-bell-o"></i>
              <span class="label label-warning">{{notifications.unreadInfo.length}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">{{ notifications.unreadInfoMsg_1 }} {{ notifications.unreadInfo.length }} {{ notifications.unreadInfoMsg_2 }}</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li v-for="(item,index) in notifications.unreadInfo" :key="item" :index="index">
                    <a href="javascript:void(0)">
                      <i :class="item.className"></i> {{ item.info }}
                    </a>
                  </li>
                </ul>
              </li>
              <li class="footer"><a href="javascript:void(0)">{{ notifications.readmoreInfo }}</a></li>
            </ul>
          </li>
          <!-- Navbar Info Menu End -->


          <!-- Tasks: style can be found in dropdown.less -->
          <li class="dropdown tasks-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <i class="fa fa-flag-o"></i>
              <span class="label label-danger">{{notifications.unreadTask.length}}</span>
            </a>
            <ul class="dropdown-menu">
              <li class="header">{{notifications.unreadTaskMsg_1}}{{notifications.unreadTask.length}}{{notifications.unreadTaskMsg_2}}</li>
              <li>
                <!-- inner menu: contains the actual data -->
                <ul class="menu">
                  <li v-for="(item,index) in notifications.unreadTask" :key="item" :index="index">
                    <a href="javascript:void(0)">
                      <h3> {{ item.msg }} <small class="pull-right">{{ item.present }}</small> </h3>
                      <div class="progress xs">
                        <div :class="item.className" :style="'width:'+item.present" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"><span class="sr-only">{{ item.present }}</span></div>
                      </div>
                    </a>
                  </li>
                  <!-- end task item -->
                </ul>
              </li>
              <li class="footer">
                <a href="#">View all tasks</a>
              </li>
            </ul>
          </li>


          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">Alexander Pierce</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                <p>
                  Alexander Pierce - Web Developer
                  <small>Member since Nov. 2012</small>
                </p>
              </li>
              <!-- Menu Body -->
              <li class="user-body">
                <div class="row">
                  <div class="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div class="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
                <!-- /.row -->
              </li>
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a href="#" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>


          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>

    </nav>
  </header>
</template>

<script>

import emailpart from "~/components/navbar/email.vue"

export default {
  conponents:{
    emailpart,
  },
  data(){
    return {
      userinfo:{

      },
      notifications:{
        unreadInfoMsg_1:"您有",
        unreadInfoMsg_2:"条未读",
        readmoreInfo:"查看全部",
        unreadInfo:[
          { className : "fa fa-shopping-cart text-green" , info : "5 new members joined today" },
          { className : "fa fa-warning text-yellow"      , info : "Very long description here that may not fit into thepage and may cause design problems" },
          { className : "fa fa-shopping-cart text-green" , info : "5 new members joined today" },
          // { className : "fa fa-users text-red"           , info : "5 new members joined"},
          // { className : "fa fa-users text-aqua"          , info : "5 new members joined today"}
        ],

        unreadTaskMsg_1:"您有",
        unreadTaskMsg_2:"条任务",
        readmoreTask:"查看全部",
        unreadTask:[ 
          { present : "20%" , className : "progress-bar progress-bar-aqua",     msg : "Design some buttons" },
          { present : "30%" , className : "progress-bar progress-bar-green",    msg : "Design some buttons" },
          { present : "30%" , className : "progress-bar progress-bar-red",      msg : "Design some buttons" },
          { present : "30%" , className : "progress-bar progress-bar-yellow",   msg : "Design some buttons" },
        ]
      },
      logo:{
        part1:"A",
        part2:"LT",
        part3:"Admin",
        part4:"LTE"
      }
    }
  },
  methods:{
    emailMoreInfo(){
      
    }
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
