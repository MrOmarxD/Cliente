export interface CreditsResponse {
    id: number;
    cast: Cast[];
    crew: Cast[];
}

export interface Cast {
    adult:              boolean;
    gender:             number;
    id:                 number;
    knownForDepartment: string;
    name:               string;
    originalName:       string;
    popularity:         number;
    profilePath:        null | string;
    castID:             number;
    character?:         string;
    creditID:           string;
    order?:             number;
    department?:        string;
    job?:               string;
}