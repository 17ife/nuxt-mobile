<template>
<li class="dropdown messages-menu">
  <a href="#" class="dropdown-toggle" data-toggle="dropdown">
    <i class="fa fa-envelope-o"></i>
    <span class="label label-success">{{ notifications.unreadEmail.length }}</span>
  </a>
  <ul class="dropdown-menu">
    <li class="header">{{ notifications.unreadEmailMsg_1 }} {{ notifications.unreadEmail.length }} {{ notifications.unreadEmailMsg_2 }}</li>
    <li>
      <ul class="menu">
        <li v-for="(item,index) in notifications.unreadEmail" :key="item" :index="index">
          <a href="javascript:void(0)">
            <div class="pull-left"><img :src="item.image" class="img-circle" alt="User Image"/> </div>
            <h4>{{ item.title }} <small><i class="fa fa-clock-o"></i> {{ item.time }}</small> </h4>
            <p>{{ item.msg }}</p>
          </a>
        </li>
      </ul>
    </li>
    <li class="footer"><a href="javascript:void(0)" :click="emailMoreInfo()">{{ notifications.readmoreEmail}}</a></li>
  </ul>
</li>
</template>
<script>
export default {
  data(){
    return {
      notifications:{
        unreadEmailMsg_1:'您有',
        unreadEmailMsg_2:"条未读",
        readmoreEmail:"查看全部",
        unreadEmail:[
          { image:'/img/user2-160x160.jpg' , title:'Support Team' , time:'5mins' , msg: 'Why not buy a new awesome theme?' },
          { image:'/img/user3-128x128.jpg' , title:'AdminLTE Design Team' , time:'2hours' , msg: 'Why not buy a new awesome theme?' },
          { image:"/img/user4-128x128.jpg" , title:'AdminLTE Design Team' , time:'2hours' , msg: 'Why not buy a new awesome theme?' }
        ],
      }
    }
  },
  methods:{
    emailMoreInfo(){}
  }
}
</script>
