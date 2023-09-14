export interface Dropdown {
  list: Array<DropdownItem>;
}

export interface DropdownItem {
  icon?: string;
  translationKey?: string;
  action: (...args: any[]) => void;
}
