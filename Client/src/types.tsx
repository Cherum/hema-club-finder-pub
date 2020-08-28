
export enum Weapons {
    Longsword = "Longsword",
    Rapier = "Rapier",
    Wrestling = "Wrestling",
    SwordAndBuckler = "Sword and Buckler"
}
export interface HemaGroup {
    name: string,
    city: string,
    street?: string,
    county: string,
    websites?: string[],
    primaryWeapons?: Weapons[],
    description?: string
}