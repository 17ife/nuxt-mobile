<template>
  <form class="form-horizontal"> 
    <div class="form-group" v-if="typeof(formdata.email) != 'undefined'">
      <label for="inputEmail" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10"><input type="email" class="form-control" id="inputEmail" placeholder="Email" v-model="formdata.email"/></div>
    </div>

    <div class="form-group" v-if="typeof(formdata.password) != 'undefined'">
      <label for="inputPassword" class="col-sm-2 control-label">Password</label>
      <div class="col-sm-10"><input type="password" class="form-control" id="inputPassword"  v-model="formdata.password"/></div>
    </div>
  </form>
</template>

<script>
export default {
  props:[ "formdata" ]
}
</script>