import { fetchWP } from './api';

export async function getMenu(location: string) {
    const locations = await fetchWP('/wp/v2/menu-locations');
    const menuId = locations[location]?.id;

    if (!menuId) return [];

    const menu = await fetchWP(`/wp/v2/menus/${menuId}`);
    return menu.items;
}
