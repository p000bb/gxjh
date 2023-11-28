// const req = require.context('../../assets/icons/svg', false, /\.svg$/)
// const requireAll = requireContext => requireContext.keys()

// const re = /\.\/(.*)\.svg/

// const icons = requireAll(req).map(i => {
//   return i.match(re)[1]
// })

const array = ["gxjh"]; // 去除的图标
const icons = [] as string[];
const modules = import.meta.glob("../../icons/svg/*.svg");
for (const path in modules) {
  const p = path.split("icons/svg/")[1].split(".svg")[0];
  // 如果p的indexof不在array中，就添加到icons中
  for (const item of array) {
    if (p.indexOf(item) === -1) {
      icons.push(p);
      break;
    }
  }
}

export default icons;
