export const RBAC_RULES = {
  admin: {
    view: ["homepage", "dashboard"],
    actions: [
      "products:get",
      "product:post",
      "product:edit",
      "product:delete",
      "user:findAll",
      "user:findByEmail",
      "user:delete",
    ],
  },
  user: { view: ["homepage"], actions: ["products:get"] },
};
