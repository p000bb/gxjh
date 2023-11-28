import * as ElIcons from "@element-plus/icons-vue";

const elementIcons = [];

for (const name in ElIcons) {
  elementIcons.push(name);
}
console.log(elementIcons);
export default elementIcons;
