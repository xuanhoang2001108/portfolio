export interface TabItem {
    id: number;
    tabName: string;
    path: string;
}

export const tabData: TabItem[] = [
    {
        id: 1,
        tabName: 'Home',
        path: 'home'
    },
    {
        id: 2,
        tabName: 'About',
        path: 'about'
    },
    {
        id: 3,
        tabName: 'Experience',
        path: 'experience'

    },
    {
        id: 4,
        tabName: 'Contact',
        path: 'contact'
    }
]