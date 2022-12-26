import CheckAdmin from "../containers/CheckAdmin";

const adminRoutes=[
    {
        path : "/admin",
        exact : true,
        page : CheckAdmin,
        role:'admin',
    },
    {
        path : "/admin/order",
        exact : false,
        page : CheckAdmin,
        role:'order',
    },
    {
        path : "/admin/product/:id",
        exact : false,
        page : CheckAdmin,
        role:'productDetail',
    },
    {
        path : "/admin/product",
        exact : false,
        page : CheckAdmin,
        role:'product',
    }
]

export default adminRoutes;