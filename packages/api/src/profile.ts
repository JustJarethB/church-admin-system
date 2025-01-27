import $ from 'zod'
import { timestamp } from './timestamp'
export const profilePermission = $.enum(["Standard", "TeamLeader", "Admin"])
export type ProfilePermission = $.infer<typeof profilePermission>
export const profile = $.object({
    id: $.string(),
    churchId: $.string(),
    userId: $.string(),
    created: timestamp,
    updated: timestamp,
    permission: profilePermission
})
export type Profile = $.infer<typeof profile>

export const mock = profile.parse(({
    id: 'test-user/zCb7Xxp0Nif9xALfnVRl',
    churchId: "zCb7Xxp0Nif9xALfnVRl",
    created: Date.now(),
    permission: 'Admin',
    updated: Date.now(),
    userId: 'test-user'
}) satisfies Profile)