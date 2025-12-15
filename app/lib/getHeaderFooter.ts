import { getMenu } from './getMenu';
import { fetchWP } from './api';

export async function getHeaderFooter() {
    console.log(process.env.NEXT_PUBLIC_WP_URL);
    const options = await fetchWP('/acf/v3/options/options');

    const primaryMenu = await getMenu('primary');
    const footerMenu = await getMenu('footer');

    return {
        acf: options.acf,
        primaryMenu,
        footerMenu
    };
}


