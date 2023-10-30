import { type RouteLocationNormalized } from "vue-router"

/* 前端门户预览路由 */
const previewRoute: string[] = ["/loading", "/home", "/about", "/dynamic", "/contact"]

/** 免登录白名单（匹配路由 path） */
const whiteListByPath: string[] = ["/login", ...previewRoute]

/** 免登录白名单（匹配路由 name） */
const whiteListByName: string[] = []

/** 判断是否在白名单 */
const isWhiteList = (to: RouteLocationNormalized) => {
  // path 和 name 任意一个匹配上即可
  return whiteListByPath.indexOf(to.path) !== -1 || whiteListByName.indexOf(to.name as any) !== -1
}

export default isWhiteList
