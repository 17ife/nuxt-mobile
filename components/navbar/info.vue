<template>

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
        <li v-for="(item,index) in notifications.unreadInfo" :key="index" :index="index">
          <a href="javascript:void(0)">
            <i :class="item.className"></i> {{ item.info }}
          </a>
        </li>
      </ul>
    </li>
    <li class="footer"><a href="javascript:void(0)">{{ notifications.readmoreInfo }}</a></li>
  </ul>
</li>

</template>

<script>
export default {
  data(){
    return {
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
        ]
       }
    }
  }
}
</script>

<style scoped></style>