import { Project, ProjectStatus } from '../models/project-model';

// Project State Management
type Listener<T> = (items: T[]) => void;

export class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>) {
        this.listeners.push(listenerFn);
    }
}

export class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
        super();
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new ProjectState();
        return this.instance;
    }

    addProject(
        title: string,
        description: string,
        numOfPeople: number,
        comment: string
    ) {
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            numOfPeople,
            ProjectStatus.Active,
            comment
        );
        this.projects.push(newProject);
        localStorage.setItem('projects', JSON.stringify(this.projects));
        this.updateListeners();
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
        const project = this.projects.find((prj) => prj.id === projectId);
        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }

        const storageData = localStorage.getItem('projects');
        const storage = storageData ? JSON.parse(storageData) : [];
    }

    private updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

export const projectState = ProjectState.getInstance();

document.addEventListener('DOMContentLoaded', () => loadProjects());

const loadProjects = () => {
    const storageData = localStorage.getItem('projects');
    const storage = storageData ? JSON.parse(storageData) : [];
    for (const project of storage) {
        projectState.addProject(
            project.title,
            project.description,
            +project.people,
            project.comment
        );
    }
};
