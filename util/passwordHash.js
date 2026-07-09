import bcrypt from "bcrypt";

export const hashPassword = async (password) => {
  const hasedPassword = await bcrypt.hash(password, 10);
  return hasedPassword;
};
