<template>
	
</template>
<script lang="ts">
import { Component, Model, Vue } from 'vue-property-decorator';
@Component
export default class MyCheckBox extends Vue {
  @Model('change') checked: boolean;
  changed(ev:any) {
    this.$emit('change', ev.target.checked);
  }
}
</script>
