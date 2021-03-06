import { Vue, Component } from 'vue-property-decorator';

// declare module 'vue/types/vue' {
//   interface Vue {
//     testMixinArg: string
//     testMixinFunc (): void
//   }
// }

/**
 * Mixin test
 *
 * @export
 * @class TestMixin
 * @extends {Vue}
 */
@Component({})
export default class TestMixin extends Vue {
  public testMixinArg: string = 'this is test mixin arg';
  // 空白类型 void
  public testMixinFunc(): void {
    // alert('this string is from test mixin console.log');
    console.log('this string is from test mixin console.log');
  }
}
