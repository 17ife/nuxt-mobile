<template>

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
        <li v-for="(item,index) in notifications.unreadTask" :key="index" :index="index">
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

</template>

<script>
export default {
  data(){
    return {
       notifications:{
        unreadTaskMsg_1:"您有",
        unreadTaskMsg_2:"条任务",
        readmoreTask:"查看全部",
        unreadTask:[ 
          { present : "20%" , className : "progress-bar progress-bar-aqua",     msg : "Design some buttons" },
          { present : "30%" , className : "progress-bar progress-bar-green",    msg : "Design some buttons" },
          { present : "30%" , className : "progress-bar progress-bar-red",      msg : "Design some buttons" },
          { present : "30%" , className : "progress-bar progress-bar-yellow",   msg : "Design some buttons" },
        ]
       }
    }
  }
}
</script>

<style scoped></style>