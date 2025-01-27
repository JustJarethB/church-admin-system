import $ from 'zod';
import { timestamp } from './timestamp';

// todo: move church
export const church = $.object({
    id: $.string(),
    created: timestamp,
    logoUrl: $.string(),
    displayName: $.string()
});
export type Church = $.infer<typeof church>;

export const mock = church.parse(({
    id: "zCb7Xxp0Nif9xALfnVRl",
    created: Date.now(),
    displayName: 'Test Church',
    logoUrl: 'https://imgs.search.brave.com/I0jvzT62ce0JJ1XEHHjGL1f0avB2GQ-g2na7CaVBFCk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9jaHVy/Y2gtaW4taGV4YWdv/bi0xODMwbGQucG5n/P253bT0xJm53cz0x/JmluZHVzdHJ5PWNo/dXJjaCZzZj0'
}) satisfies Church)