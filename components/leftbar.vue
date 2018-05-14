<template>
<aside class="main-sidebar">
  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar" style="height: auto;">
    <ul class="sidebar-menu tree" data-widget="tree">

      <li class="treeview">
        <a href="#">
          <i class="fa fa-info-circle"></i>
          <span>资讯</span>
          <span class="pull-right-container">
            <span class="label label-primary pull-right">4</span>
          </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="pages/layout/top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>
          <li><a href="pages/layout/boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>
          <li><a href="pages/layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>
          <li><a href="pages/layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
        </ul>
      </li>

      <li class="treeview">
        <a href="#">
          <i class="fa fa-plus-square"></i>
          <span>商品维护</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="javascript:void(0)"><i class="fa fa-clipboard"></i>商品</a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-list"></i> 类别</a></li>
        </ul>
      </li>

      <li class="treeview">
        <a href="#">
          <i class="fa fa-archive"></i>
          <span>我的仓库</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu">
          <li v-for="(item,index) in tags" :key="index" :index="index" ><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> {{ item.tag_name }}</a></li>
        </ul>
      </li>

      <li class="treeview">
        <a href="#">
          <i class="fa fa-angellist"></i>
          <span>订单信息</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> 未采购</a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> 已采购</a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> 未到货</a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> 已到货</a></li>
        </ul>
      </li>

      <li class="treeview">
        <a href="#">
          <i class="fa fa-cubes"></i>
          <span>物流信息</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> 全部</a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> 未发货</a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> 已发货</a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> 已到货</a></li>
        </ul>
      </li>

      <li class="treeview">
        <a href="#">
          <i class="fa fa-users"></i>
          <span>顾客信息</span>
          <span class="pull-right-container">
            <i class="fa fa-angle-left pull-right"></i>
          </span>
        </a>
        <ul class="treeview-menu">
          <li><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> 全部</a></li>
          <li><a href="javascript:void(0)"><i class="fa fa-circle-o"></i> 新增</a></li>
        </ul>
      </li>

    </ul>
  </section>
  <!-- /.sidebar -->
</aside>
</template>
<script>

export default {
  data(){
    return {}
  },
  props: ['tags'],
  methods:{

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
