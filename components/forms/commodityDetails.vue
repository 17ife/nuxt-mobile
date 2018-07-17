<template>
  <form class="form-horizontal"> 
    <div class="form-group" v-if="typeof(formdata.brand) != 'undefined'">
      <label for="inputBrand" class="col-sm-4 control-label">品牌</label>
      <div class="col-sm-8"><input type="email" class="form-control" id="inputBrand" placeholder="brand" v-model="formdata.brand"/></div>
    </div>

    <div class="form-group" v-if="typeof(formdata.shelfLife) != 'undefined'">
      <label for="inputPassword" class="col-sm-4 control-label">保质期（天）</label>
      <div class="col-sm-8"><input type="number" class="form-control" id="inputShelfLife"  v-model="formdata.shelfLife"/></div>
    </div>

    <div class="form-group" v-if="typeof(formdata.type) != 'undefined'">
      <label for="inputPassword" class="col-sm-4 control-label">分类</label>
      <div class="col-sm-8"><input type="text" class="form-control" id="inputType"  v-model="formdata.type"/></div>
    </div>

    <div class="form-group" v-if="typeof(formdata.suit) != 'undefined'">
      <label for="inputPassword" class="col-sm-4 control-label">适合肤质</label>
      <div class="col-sm-8">
        <div class="checkbox">
          <label v-for="(item,index) in formdata.suit" :key="item" ><input type="checkbox" value="1" v-model="formdata.suit"/>checkbox1</label>
        </div>
      </div>
    </div>

    <div class="form-group" v-if="typeof(formdata.type) != 'undefined'">
      <label for="inputPassword" class="col-sm-4 control-label">规格</label>
      <div class="col-sm-8"><input type="number" class="form-control" id="inputType"  v-model="formdata.size"/></div>
    </div>

  </form>
</template>

<script>
export default {
  props:[ "formdata" ]
}
</script>