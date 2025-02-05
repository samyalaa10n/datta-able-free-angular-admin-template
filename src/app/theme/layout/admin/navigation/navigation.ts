export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;

  children?: NavigationItem[];
}
export const NavigationItems: NavigationItem[] = [
  {
    id: 'home',
    title: 'القائمة',
    type: 'group',
    icon: 'icon-navigation',
    children: [
      {
        id: 'company',
        title: 'الشركات',
        type: 'item',
        url: '/auth/signup',
        icon: 'feather icon-home',
        classes: 'nav-item'

      },
      {
        id: 'depart',
        title: 'الأقسام',
        type: 'item',
        url: '/auth/signup',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
      ,
      {
        id: 'places',
        title: 'اماكن العمل',
        type: 'item',
        url: '/auth/signup',
        icon: 'feather icon-home',
        classes: 'nav-item'
      }
    ]
  },
  
];
