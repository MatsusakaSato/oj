import { Role } from "@/enum/enum";
export interface Router {
  key: string;
  label: string;
  href: string;
  showInMenu?: boolean;
  requiresRole: Role[];
  children?: Router[];
}
