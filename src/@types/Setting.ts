export type Pin = string;

export interface Setting {
  isPassword?: boolean | null,
  pin?: Pin | null,
}
