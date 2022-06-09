import { RBAC_RULES } from "../types/roles";

const check = (rules: any, role: any, action: any) => {
  const permissions = rules[role];

  if (!permissions) {
    return false;
  }

  const staticPermissions = permissions.view;
  if (staticPermissions && staticPermissions.includes(action)) {
    return true;
  }

  const dynamicPermissions = permissions.actions;
  if (dynamicPermissions) {
    const permissionCondition = dynamicPermissions.includes(action);
    if (!permissionCondition) {
      return false;
    }
    return true;
  }
  return false;
};

const Can = ({ role, perform, yes, no }: any) => {
  return check(RBAC_RULES, role, perform) ? yes() : no();
};

Can.defaultProps = {
  yes: () => null,
  no: () => null,
  role: "",
  perform: "",
};

export default Can;
