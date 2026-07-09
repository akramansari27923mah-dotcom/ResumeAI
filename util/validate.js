import z from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email"),
  password: z.string().min(8),
});

export const signupSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.email("Please enter a valid email"),
  password: z.string().min(8),
});
