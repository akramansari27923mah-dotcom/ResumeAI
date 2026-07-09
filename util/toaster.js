import { toast } from "sonner";

export const showError = (msg) => {
  toast.error(msg);
};

export const showSuccess = (msg) => {
  toast.success(msg);
};
export const warning = (msg) => {
  toast.warning(msg);
};
export const information = (msg) => {
  toast.info(msg);
};
