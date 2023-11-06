import { createWebHashHistory, createRouter } from "vue-router";

/* Layout */
export const Layout = () => import("@/layout/index.vue");

// 公共路由
export const constantRoutes = [
	{
		path: "",
		component: Layout,
		redirect: "/home",
		hidden: true,
		children: [
			{
				path: "/home",
				component: () => import("@/views/Home/index.vue"),
				name: "Home",
			},
			{
				path: "/about",
				component: () => import("@/views/About/index.vue"),
				name: "About",
			},
			{
				path: "/dynamic",
				component: () => import("@/views/Dynamic/index.vue"),
				name: "Dynamic",
			},
			{
				path: "/contact",
				component: () => import("@/views/Contact/index.vue"),
				name: "Contact",
			},

		],
	},
	{
		path: "/loading",
		component: () => import("@/components/loading/index.vue"),
		name: "Loading",
	},
];

const router = createRouter({
	history: createWebHashHistory('/'),
	routes: constantRoutes,
	  scrollBehavior: () => ({ left: 0, top: 0 }),

});

export default router;
