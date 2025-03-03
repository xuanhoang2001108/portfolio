export interface TabItem {
    id: number;
    tabName: string;
    path: string;
}

export const tabData: TabItem[] = [
    {
        id: 1,
        tabName: '',
        path: 'home'
    },
    {
        id: 2,
        tabName: 'About',
        path: 'about'
    },
    {
        id: 3,
        tabName: 'Skill',
        path: 'skill'
    },
    {
        id: 4,
        tabName: 'Education',
        path: 'education'
    },
    {
        id: 5,
        tabName: 'Experience',
        path: 'experience'

    },
    {
        id: 6,
        tabName: 'Contact',
        path: 'contact'
    }
]