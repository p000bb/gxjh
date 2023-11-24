import dayjs from "dayjs";
import { removeConfigLayout } from "@admin/utils/cache/local-storage";

/** 格式化时间 */
export const formatDateTime = (time: string | number | Date, format: string = "YYYY-MM-DD HH:mm:ss") => {
  return time ? dayjs(new Date(time)).format(format) : "N/A";
};

/** 用 JS 获取全局 css 变量 */
export const getCssVariableValue = (cssVariableName: string) => {
  let cssVariableValue = "";
  try {
    // 没有拿到值时，会返回空串
    cssVariableValue = getComputedStyle(document.documentElement).getPropertyValue(cssVariableName);
  } catch (error) {
    console.error(error);
  }
  return cssVariableValue;
};

/** 用 JS 设置全局 CSS 变量 */
export const setCssVariableValue = (cssVariableName: string, cssVariableValue: string) => {
  try {
    document.documentElement.style.setProperty(cssVariableName, cssVariableValue);
  } catch (error) {
    console.error(error);
  }
};

/** 重置项目配置 */
export const resetConfigLayout = () => {
  removeConfigLayout();
  location.reload();
};

/** 数组结构转换成树形结构 */
/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
// prettier-ignore
export const arrayToTree = (data: any, id: any = "id", parentId: any = "parentId", children: any = "children") => {
  let config = {
    id: id ,
    parentId: parentId,
    childrenList: children
  };

  var childrenListMap = {};
  var nodeIds = {};
  var tree = [];

  for (let d of data) {
    let parentId = d[config.parentId];
    if (childrenListMap[parentId] == null) {
      childrenListMap[parentId] = [];
    }
    nodeIds[d[config.id]] = d;
    childrenListMap[parentId].push(d);
  }

  for (let d of data) {
    let parentId = d[config.parentId];
    if (nodeIds[parentId] == null) {
      tree.push(d);
    }
  }

  for (let t of tree) {
    adaptToChildrenList(t);
  }

  function adaptToChildrenList(o: { [x: string]: any }) {
    if (childrenListMap[o[config.id]] !== null) {
      o[config.childrenList] = childrenListMap[o[config.id]];
    }
    if (o[config.childrenList]) {
      for (let c of o[config.childrenList]) {
        adaptToChildrenList(c);
      }
    }
  }
  return tree;
};

/* 树形结构转换成平级结构 */
export const treeToArray = (tree: any[], parentId: string | number = 0) => {
  const result: any[] = [];
  tree.forEach((item) => {
    const { children, ...rest } = item;
    result.push(rest);
    if (children && children.length > 0) {
      result.push(...treeToArray(children, item.id));
    }
  });
  return result;
};
