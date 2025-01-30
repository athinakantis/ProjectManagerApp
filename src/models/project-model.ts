export enum ProjectStatus {
    Active,
    Finished,
}

export class Project {
    constructor(
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus,
        public comment: string,
        public id: string,
    ) {}
}
