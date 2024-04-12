import { json } from '@sveltejs/kit';
import { links } from '$lib/links.js';

export const GET = () => {
    // return new Response(JSON.stringify(links), {status: 200});
    return json(links);

}

// export async function GET(event) {
//     return json(filtered);
// }
