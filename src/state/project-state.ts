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
    status: ProjectStatus,
    comment: string,
    id: string = Math.random().toString()
  ) {
    const newProject = new Project(
      title,
      description,
      numOfPeople,
      status,
      comment,
      id
    );
    this.projects.push(newProject);
    localStorage.setItem('projects', JSON.stringify(this.projects));
    this.updateListeners();
  }

  moveProject(
    projectId: string,
    newStatus: ProjectStatus = ProjectStatus.Finished
  ) {
    const project = this.projects.find((prj) => prj.id === projectId);
    if (project && project.status !== newStatus) {
      project.status = newStatus;
      this.updateListeners();
    }

    const storageData = localStorage.getItem('projects');
    const storage = storageData ? JSON.parse(storageData) : [];
    const storageProject = storage.find(
      (project: Project) => project.id === projectId
    );
    storageProject.status = newStatus;
    localStorage.setItem(
      'projects',
      JSON.stringify(Object.assign(storage, storageProject))
    );
  }

  private updateListeners() {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }

  clearProjects() {
      console.log('clearing')
    this.projects = [];
    localStorage.removeItem('projects');
    console.log(this.projects)
  }
}

export const projectState = ProjectState.getInstance();

/* Load projects when DOM content has loaded */
document.addEventListener('DOMContentLoaded', () => loadProjects());

const loadProjects = () => {
  const storageData = localStorage.getItem('projects');
  const storage = storageData ? JSON.parse(storageData) : [];
  for (const project of storage) {
    projectState.addProject(
      project.title,
      project.description,
      project.people,
      project.status,
      project.comment,
      project.id
    );
    if (project.status === ProjectStatus.Finished) {
      projectState.moveProject(project.id, ProjectStatus.Finished);
    }
  }
};

