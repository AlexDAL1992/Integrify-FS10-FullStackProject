export const RBAC_RULES = {
  'admin': {
    view: ["dashboard"],
    actions: ["products:get"],
  },
  'user': { view: ["homepage"], actions: [] },
};
