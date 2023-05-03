import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};
