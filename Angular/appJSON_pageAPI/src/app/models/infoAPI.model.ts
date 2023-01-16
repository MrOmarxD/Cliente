export interface infoAPIResponse{
    count: number,
    entries: infoAPI[]
}

export interface infoAPI{
    API: string,
    Description: string,
    Link: string,
    Category: string,
    Cors: string
}