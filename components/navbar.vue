<template>

  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#" >{{ band.title }}</a>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">

        <li v-for="(item,index) in links" :key="index" :class="getClass(item)" >
          <!-- 无下拉菜单 -->
          <div v-if="item.children.length==0">
            <a class="nav-link" :href="getHref(item)" >{{ item.label }}</a>
          </div>
          <!-- 下拉菜单 -->
          <div v-else>
            <a class="nav-link dropdown-toggle" href="javascript:void(0)" :id="item.id" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ item.label }}</a>
            <div class="dropdown-menu" :aria-labelledby="item.id">
              <a v-for="(sub_item,sub_index) in item.children" :key="sub_index" class="dropdown-item" :href="getHref(sub_item)">{{sub_item.label}}</a>
            </div>
          </div>
        </li>

      </ul>
    </div>

  </nav>

</template>
<style></style>
<script>
export default {
  data () {
    return { 
			band    : { title : "test" , href: ""  },
			links   : [ 
        // { 
        //   id:"HomeLink", 
        //   label : "Home" , 
        //   href : "" , 
        //   disabled : false , 
        //   children:[ 
        //     { id:"ActionLink", label : "Action" , href : "" , disabled : false } ,
        //     { id:"ActionLink", label : "Action2" , href : "" , disabled : false } 
        //   ]
        // },
        { 
          id:"HomeLink", 
          label : "Home" , 
          href : "" , 
          disabled : false , 
          children:[]
        }, 
      ],
			active  : 'Home'
		 }
  },
  methods:{
    getHref : function(item){
      if(!item.href){
        return "javascript:void(0)"
      }else{
        return item.href
      }
    },
    getClass : function(item) {
      let _that = this;
      let className = "nav-item";
      if(item.label == _that.active){
        className += " active";
      }
      if(item.disabled){
        className += " disabled"
      }
      if(item.children.length!=0){
        className += " dropdown"
      }
      return className;
    }
  }
}
</script>