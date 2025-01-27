import $ from 'zod';

// todo: move timestamp
export const timestamp = $.number().int().min(0).default(Date.now())
export type Timestamp = $.TypeOf<typeof timestamp>;
