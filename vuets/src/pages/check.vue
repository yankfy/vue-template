<template>
  <div>
		<MyCheckBox :label="checkbox.label" :id="checkbox.id" v-model="checkbox.model"></MyCheckBox>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MyCheckBox from '@/compontents/my-checkbox';
@Component({
	components:{
		MyCheckBox,
	}
})
</script>

<style>
</style>
