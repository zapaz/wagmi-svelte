export const resolveVal = (val) => (val instanceof Function ? val() : val);
