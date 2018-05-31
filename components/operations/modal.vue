<template>

<div class="modal fade" :id="settings.id" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{{ settings.title }}</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="handleOk">Ok</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>

export default {
  props:['settings'],
  methods:{
    handleOk(evt){
      this.$emit('onModalOk',evt);
    }
  }
}

</script>

<style></style>
