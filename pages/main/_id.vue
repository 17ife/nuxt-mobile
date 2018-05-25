<template>
<div class="page-root">

<section class="content">
  <div class="row">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">商品信息列表</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <table id="example-table" class="table table-bordered table-striped">
            <thead>
            <tr>
              <th>商品名称</th>
              <th>单价</th>
              <th>规模</th>
              <th>简介</th>
              <th>操作</th>
            </tr>
            </thead>
            <tbody v-for="(item,index) in list" :key="index" :index="index">
            <tr> 
              <td>{{ item.name }}</td>
              <td>{{ item.price }} {{ item.unit }}</td>
              <td>{{ item.size }}</td>
              <td>{{ item.detail }}</td>
              <td>
                <a class="modal-link" @click="openDetail(item)">维护详情</a>
                <a class="modal-link" @click="getLink(item)"> 推荐连接</a>
                <a class="modal-link" @click="buildAD(item)"> 生成图片</a>
              </td>
            </tr>
            </tbody>
            <tfoot>
            <tr>
              <th>商品名称</th>
              <th>单价</th>
              <th>规模</th>
              <th>单位</th>
              <th>操作</th>
            </tr>
            </tfoot>
          </table>
        </div>
        <!-- /.box-body -->
      </div>
      <!-- /.box -->
    </div>
    <!-- /.col -->
  </div>
  <!-- /.row -->
</section>

<modal
  :settings="detailSettings"
  @onModalOk="saveDetail"></modal>

<modal
  :settings="getLinkSettings"
  @onModalOk="commonSave"></modal>

<modal
  :settings="buildAdSettings"
  @onModalOk="commonSave"></modal>

</div>

</template>

<script>

import { getData } from '~/plugins/axios';
import modal from "~/components/operations/modal";

export default {
  async asyncData({ params, env, error }) {
    // let list = await getData('/getCommodities/:id','get',null);
    let all = await getData('/commodities','get',null);
    return { id : params.id , list : all.data };
  },

  data(){
    return {
      detailSettings:{
        id:"addDetail",
        title:"维护详情",
        bodyHtml:"<p>系统异常请联系管理员</p>"
      },
      getLinkSettings:{
        id:"getLinksDetail",
        title:"请复制推广链接",
        bodyHtml:"<p>系统异常请联系管理员</p>"
      },
      buildAdSettings:{
        id:"buildAdDetail",
        title:"生成广告图",
        bodyHtml:"<p>系统异常请联系管理员</p>"
      }
    }
  },
  methods:{
    openDetail(item){
      let vm = this;
      console.log(item);
      vm.bodyHtml = `
        <div>
          
        </div>
      `
      vm.commonOpen(vm.detailSettings.id);
    },
    getLink(){
      let vm = this;
      vm.commonOpen(vm.getLinkSettings.id);
    },
    buildAD(){
      let vm = this;
      vm.commonOpen(vm.buildAdSettings.id);
    },
    saveDetail(){
      console.log("ok");
    },
    commonSave(){},
    commonOpen(id){
      $("#"+id).modal('show')
    }
  },
  components:{
    modal
  },
  // 生命周期
  beforeCreate(){},
  created(){},
  beforeMount(){},
  mounted(){
    $('#example-table').DataTable()
  },
  beforeUpdate(){},
  updated(){}

}
</script>
<style scroped>

.modal-link{
  cursor:pointer;
}

</style>