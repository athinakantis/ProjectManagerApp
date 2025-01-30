/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/base-component.ts":
/*!******************************************!*\
  !*** ./src/components/base-component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component)
                    /* harmony export */
});
                class Component {
                    constructor(templateId, hostElementId, insertAtStart, newElementId) {
                        this.templateElement = document.getElementById(templateId);
                        this.hostElement = document.getElementById(hostElementId);
                        const importedNode = document.importNode(this.templateElement.content, true);
                        this.element = importedNode.firstElementChild;
                        if (newElementId) {
                            this.element.id = newElementId;
                        }
                        this.attach(insertAtStart);
                    }
                    attach(insertAtBeginning) {
                        this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
                    }
                }


                /***/
}),

/***/ "./src/components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/components/project-input.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectInput": () => (/* binding */ ProjectInput)
                    /* harmony export */
});
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.ts");
/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/validation */ "./src/util/validation.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/project-state */ "./src/state/project-state.ts");
                var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                };




                class ProjectInput extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
                    constructor() {
                        super('project-input', 'app', true, 'user-input');
                        this.titleInputElement = this.element.querySelector('#title');
                        this.descriptionInputElement = this.element.querySelector('#description');
                        this.peopleInputElement = this.element.querySelector('#people');
                        this.configure();
                    }
                    configure() {
                        this.element.addEventListener('submit', this.submitHandler);
                    }
                    renderContent() { }
                    gatherUserInput() {
                        const enteredTitle = this.titleInputElement.value;
                        const enteredDescription = this.descriptionInputElement.value;
                        const enteredPeople = this.peopleInputElement.value;
                        const titleValidatable = {
                            value: enteredTitle,
                            required: true,
                        };
                        const descriptionValidatable = {
                            value: enteredDescription,
                            required: true,
                            minLength: 5,
                        };
                        const peopleValidatable = {
                            value: +enteredPeople,
                            required: true,
                            min: 1,
                            max: 5,
                        };
                        if (!(0, _util_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(titleValidatable) ||
                            !(0, _util_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(descriptionValidatable) ||
                            !(0, _util_validation__WEBPACK_IMPORTED_MODULE_1__.validate)(peopleValidatable)) {
                            alert('Invalid input, please try again!');
                            return;
                        }
                        else {
                            return [enteredTitle, enteredDescription, +enteredPeople];
                        }
                    }
                    clearInputs() {
                        this.titleInputElement.value = '';
                        this.descriptionInputElement.value = '';
                        this.peopleInputElement.value = '';
                    }
                    submitHandler(event) {
                        event.preventDefault();
                        const userInput = this.gatherUserInput();
                        if (Array.isArray(userInput)) {
                            const [title, desc, people] = userInput;
                            _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addProject(title, desc, people);
                            this.clearInputs();
                        }
                    }
                }
                __decorate([
                    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autobind
                ], ProjectInput.prototype, "submitHandler", null);


                /***/
}),

/***/ "./src/components/project-item.ts":
/*!****************************************!*\
  !*** ./src/components/project-item.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectItem": () => (/* binding */ ProjectItem)
                    /* harmony export */
});
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
                var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                };


                class ProjectItem extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
                    get persons() {
                        if (this.project.people === 1) {
                            return '1 person';
                        }
                        else {
                            return `${this.project.people} persons`;
                        }
                    }
                    constructor(hostId, project) {
                        super('single-project', hostId, false, project.id);
                        this.project = project;
                        this.configure();
                        this.renderContent();
                    }
                    dragStartHandler(event) {
                        event.dataTransfer.setData('text/plain', this.project.id);
                        event.dataTransfer.effectAllowed = 'move';
                    }
                    dragEndHandler(_) {
                        console.log('DragEnd');
                    }
                    configure() {
                        this.element.addEventListener('dragstart', this.dragStartHandler);
                        this.element.addEventListener('dragend', this.dragEndHandler);
                    }
                    renderContent() {
                        this.element.querySelector('h2').textContent = this.project.title;
                        this.element.querySelector('h3').textContent = this.persons + ' assigned';
                        this.element.querySelector('p').textContent = this.project.description;
                    }
                }
                __decorate([
                    _decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.autobind
                ], ProjectItem.prototype, "dragStartHandler", null);


                /***/
}),

/***/ "./src/components/project-list.ts":
/*!****************************************!*\
  !*** ./src/components/project-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectList": () => (/* binding */ ProjectList)
                    /* harmony export */
});
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ "./src/components/base-component.ts");
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/project-model */ "./src/models/project-model.ts");
/* harmony import */ var _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../decorators/autobind */ "./src/decorators/autobind.ts");
/* harmony import */ var _state_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state/project-state */ "./src/state/project-state.ts");
/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-item */ "./src/components/project-item.ts");
                var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
                    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
                    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                    return c > 3 && r && Object.defineProperty(target, key, r), r;
                };





                class ProjectList extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {
                    constructor(type) {
                        super('project-list', 'app', false, `${type}-projects`);
                        this.type = type;
                        this.assignedProjects = [];
                        this.configure();
                        this.renderContent();
                    }
                    dragOverHandler(event) {
                        if (event.dataTransfer && event.dataTransfer.types[0] === 'text/plain') {
                            event.preventDefault();
                            const listEl = this.element.querySelector('ul');
                            listEl.classList.add('droppable');
                        }
                    }
                    dropHandler(event) {
                        const prjId = event.dataTransfer.getData('text/plain');
                        _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.moveProject(prjId, this.type === 'active' ? _models_project_model__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Active : _models_project_model__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Finished);
                    }
                    dragLeaveHandler(_) {
                        const listEl = this.element.querySelector('ul');
                        listEl.classList.remove('droppable');
                    }
                    configure() {
                        this.element.addEventListener('dragover', this.dragOverHandler);
                        this.element.addEventListener('dragleave', this.dragLeaveHandler);
                        this.element.addEventListener('drop', this.dropHandler);
                        _state_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addListener((projects) => {
                            const relevantProjects = projects.filter((prj) => {
                                if (this.type === 'active') {
                                    return prj.status === _models_project_model__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Active;
                                }
                                return prj.status === _models_project_model__WEBPACK_IMPORTED_MODULE_1__.ProjectStatus.Finished;
                            });
                            this.assignedProjects = relevantProjects;
                            this.renderProjects();
                        });
                    }
                    renderContent() {
                        const listId = `${this.type}-projects-list`;
                        this.element.querySelector('ul').id = listId;
                        this.element.querySelector('h2').textContent =
                            this.type.toUpperCase() + ' PROJECTS';
                    }
                    renderProjects() {
                        const listEl = document.getElementById(`${this.type}-projects-list`);
                        listEl.innerHTML = '';
                        for (const prjItem of this.assignedProjects) {
                            new _project_item__WEBPACK_IMPORTED_MODULE_4__.ProjectItem(this.element.querySelector('ul').id, prjItem);
                        }
                    }
                }
                __decorate([
                    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autobind
                ], ProjectList.prototype, "dragOverHandler", null);
                __decorate([
                    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autobind
                ], ProjectList.prototype, "dropHandler", null);
                __decorate([
                    _decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autobind
                ], ProjectList.prototype, "dragLeaveHandler", null);


                /***/
}),

/***/ "./src/decorators/autobind.ts":
/*!************************************!*\
  !*** ./src/decorators/autobind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "autobind": () => (/* binding */ autobind)
                    /* harmony export */
});
                function autobind(_, _2, descriptor) {
                    const originalMethod = descriptor.value;
                    const adjDescriptor = {
                        configurable: true,
                        get() {
                            const boundFn = originalMethod.bind(this);
                            return boundFn;
                        },
                    };
                    return adjDescriptor;
                }


                /***/
}),

/***/ "./src/models/project-model.ts":
/*!*************************************!*\
  !*** ./src/models/project-model.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "ProjectStatus": () => (/* binding */ ProjectStatus)
                    /* harmony export */
});
                var ProjectStatus;
                (function (ProjectStatus) {
                    ProjectStatus[ProjectStatus["Active"] = 0] = "Active";
                    ProjectStatus[ProjectStatus["Finished"] = 1] = "Finished";
                })(ProjectStatus || (ProjectStatus = {}));
                class Project {
                    constructor(id, title, description, people, status) {
                        this.id = id;
                        this.title = title;
                        this.description = description;
                        this.people = people;
                        this.status = status;
                    }
                }


                /***/
}),

/***/ "./src/state/project-state.ts":
/*!************************************!*\
  !*** ./src/state/project-state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProjectState": () => (/* binding */ ProjectState),
/* harmony export */   "State": () => (/* binding */ State),
/* harmony export */   "projectState": () => (/* binding */ projectState)
                    /* harmony export */
});
/* harmony import */ var _models_project_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/project-model */ "./src/models/project-model.ts");

                class State {
                    constructor() {
                        this.listeners = [];
                    }
                    addListener(listenerFn) {
                        this.listeners.push(listenerFn);
                    }
                }
                class ProjectState extends State {
                    constructor() {
                        super();
                        this.projects = [];
                    }
                    static getInstance() {
                        if (this.instance) {
                            return this.instance;
                        }
                        this.instance = new ProjectState();
                        return this.instance;
                    }
                    addProject(title, description, numOfPeople) {
                        const newProject = new _models_project_model__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, description, numOfPeople, _models_project_model__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active);
                        this.projects.push(newProject);
                        localStorage.setItem('Projects', JSON.stringify(this.projects))
                        this.updateListeners();
                    }
                    moveProject(projectId, newStatus) {
                        const project = this.projects.find((prj) => prj.id === projectId);
                        if (project && project.status !== newStatus) {
                            project.status = newStatus;
                            this.updateListeners();
                        }
                    }
                    updateListeners() {
                        for (const listenerFn of this.listeners) {
                            listenerFn(this.projects.slice());
                        }
                    }
                }
                const projectState = ProjectState.getInstance();


                /***/
}),

/***/ "./src/util/validation.ts":
/*!********************************!*\
  !*** ./src/util/validation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                __webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validate": () => (/* binding */ validate)
                    /* harmony export */
});
                function validate(validatableInput) {
                    let isValid = true;
                    if (validatableInput.required) {
                        isValid = isValid && validatableInput.value.toString().trim().length !== 0;
                    }
                    if (validatableInput.minLength != null &&
                        typeof validatableInput.value === 'string') {
                        isValid =
                            isValid && validatableInput.value.length >= validatableInput.minLength;
                    }
                    if (validatableInput.maxLength != null &&
                        typeof validatableInput.value === 'string') {
                        isValid =
                            isValid && validatableInput.value.length <= validatableInput.maxLength;
                    }
                    if (validatableInput.min != null &&
                        typeof validatableInput.value === 'number') {
                        isValid = isValid && validatableInput.value >= validatableInput.min;
                    }
                    if (validatableInput.max != null &&
                        typeof validatableInput.value === 'number') {
                        isValid = isValid && validatableInput.value <= validatableInput.max;
                    }
                    return isValid;
                }


                /***/
})

        /******/
});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
            /******/
}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
            /******/
};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for (var key in definition) {
/******/ 				if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
                    /******/
}
                /******/
}
            /******/
};
        /******/
})();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
})();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
                /******/
}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
            /******/
};
        /******/
})();
    /******/
    /************************************************************************/
    var __webpack_exports__ = {};
    // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
    (() => {
        /*!********************!*\
          !*** ./src/app.ts ***!
          \********************/
        __webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_project_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/project-input */ "./src/components/project-input.ts");
/* harmony import */ var _components_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/project-list */ "./src/components/project-list.ts");


        new _components_project_input__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();
        new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('active');
        new _components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('finished');

    })();

    /******/
})()
    ;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMERBQU8sNERBQTRELHVFQUFvQjtBQUN0SDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7QUN2Q0E7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN4QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOMEQ7QUFDRjtBQUN4RCxJQUFJLG1FQUFZO0FBQ2hCLElBQUksaUVBQVc7QUFDZixJQUFJLGlFQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdG1hbmFnZXItdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL2Jhc2UtY29tcG9uZW50LnRzIiwid2VicGFjazovL3Byb2plY3RtYW5hZ2VyLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWlucHV0LnRzIiwid2VicGFjazovL3Byb2plY3RtYW5hZ2VyLXR5cGVzY3JpcHQvLi9zcmMvY29tcG9uZW50cy9wcm9qZWN0LWl0ZW0udHMiLCJ3ZWJwYWNrOi8vcHJvamVjdG1hbmFnZXItdHlwZXNjcmlwdC8uL3NyYy9jb21wb25lbnRzL3Byb2plY3QtbGlzdC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0bWFuYWdlci10eXBlc2NyaXB0Ly4vc3JjL2RlY29yYXRvcnMvYXV0b2JpbmQudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdG1hbmFnZXItdHlwZXNjcmlwdC8uL3NyYy9tb2RlbHMvcHJvamVjdC1tb2RlbC50cyIsIndlYnBhY2s6Ly9wcm9qZWN0bWFuYWdlci10eXBlc2NyaXB0Ly4vc3JjL3N0YXRlL3Byb2plY3Qtc3RhdGUudHMiLCJ3ZWJwYWNrOi8vcHJvamVjdG1hbmFnZXItdHlwZXNjcmlwdC8uL3NyYy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vcHJvamVjdG1hbmFnZXItdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wcm9qZWN0bWFuYWdlci10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm9qZWN0bWFuYWdlci10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJvamVjdG1hbmFnZXItdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Byb2plY3RtYW5hZ2VyLXR5cGVzY3JpcHQvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHRlbXBsYXRlSWQsIGhvc3RFbGVtZW50SWQsIGluc2VydEF0U3RhcnQsIG5ld0VsZW1lbnRJZCkge1xuICAgICAgICB0aGlzLnRlbXBsYXRlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRlbXBsYXRlSWQpO1xuICAgICAgICB0aGlzLmhvc3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaG9zdEVsZW1lbnRJZCk7XG4gICAgICAgIGNvbnN0IGltcG9ydGVkTm9kZSA9IGRvY3VtZW50LmltcG9ydE5vZGUodGhpcy50ZW1wbGF0ZUVsZW1lbnQuY29udGVudCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGltcG9ydGVkTm9kZS5maXJzdEVsZW1lbnRDaGlsZDtcbiAgICAgICAgaWYgKG5ld0VsZW1lbnRJZCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmlkID0gbmV3RWxlbWVudElkO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0YWNoKGluc2VydEF0U3RhcnQpO1xuICAgIH1cbiAgICBhdHRhY2goaW5zZXJ0QXRCZWdpbm5pbmcpIHtcbiAgICAgICAgdGhpcy5ob3N0RWxlbWVudC5pbnNlcnRBZGphY2VudEVsZW1lbnQoaW5zZXJ0QXRCZWdpbm5pbmcgPyAnYWZ0ZXJiZWdpbicgOiAnYmVmb3JlZW5kJywgdGhpcy5lbGVtZW50KTtcbiAgICB9XG59XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCB7IHZhbGlkYXRlIH0gZnJvbSAnLi4vdXRpbC92YWxpZGF0aW9uJztcbmltcG9ydCB7IGF1dG9iaW5kIH0gZnJvbSAnLi4vZGVjb3JhdG9ycy9hdXRvYmluZCc7XG5pbXBvcnQgeyBwcm9qZWN0U3RhdGUgfSBmcm9tICcuLi9zdGF0ZS9wcm9qZWN0LXN0YXRlJztcbmV4cG9ydCBjbGFzcyBQcm9qZWN0SW5wdXQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncHJvamVjdC1pbnB1dCcsICdhcHAnLCB0cnVlLCAndXNlci1pbnB1dCcpO1xuICAgICAgICB0aGlzLnRpdGxlSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpO1xuICAgICAgICB0aGlzLnBlb3BsZUlucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjcGVvcGxlJyk7XG4gICAgICAgIHRoaXMuY29uZmlndXJlKCk7XG4gICAgfVxuICAgIGNvbmZpZ3VyZSgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3VibWl0SGFuZGxlcik7XG4gICAgfVxuICAgIHJlbmRlckNvbnRlbnQoKSB7IH1cbiAgICBnYXRoZXJVc2VySW5wdXQoKSB7XG4gICAgICAgIGNvbnN0IGVudGVyZWRUaXRsZSA9IHRoaXMudGl0bGVJbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgIGNvbnN0IGVudGVyZWREZXNjcmlwdGlvbiA9IHRoaXMuZGVzY3JpcHRpb25JbnB1dEVsZW1lbnQudmFsdWU7XG4gICAgICAgIGNvbnN0IGVudGVyZWRQZW9wbGUgPSB0aGlzLnBlb3BsZUlucHV0RWxlbWVudC52YWx1ZTtcbiAgICAgICAgY29uc3QgdGl0bGVWYWxpZGF0YWJsZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBlbnRlcmVkVGl0bGUsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb25WYWxpZGF0YWJsZSA9IHtcbiAgICAgICAgICAgIHZhbHVlOiBlbnRlcmVkRGVzY3JpcHRpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1pbkxlbmd0aDogNSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcGVvcGxlVmFsaWRhdGFibGUgPSB7XG4gICAgICAgICAgICB2YWx1ZTogK2VudGVyZWRQZW9wbGUsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIG1pbjogMSxcbiAgICAgICAgICAgIG1heDogNSxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZSh0aXRsZVZhbGlkYXRhYmxlKSB8fFxuICAgICAgICAgICAgIXZhbGlkYXRlKGRlc2NyaXB0aW9uVmFsaWRhdGFibGUpIHx8XG4gICAgICAgICAgICAhdmFsaWRhdGUocGVvcGxlVmFsaWRhdGFibGUpKSB7XG4gICAgICAgICAgICBhbGVydCgnSW52YWxpZCBpbnB1dCwgcGxlYXNlIHRyeSBhZ2FpbiEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBbZW50ZXJlZFRpdGxlLCBlbnRlcmVkRGVzY3JpcHRpb24sICtlbnRlcmVkUGVvcGxlXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhcklucHV0cygpIHtcbiAgICAgICAgdGhpcy50aXRsZUlucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMucGVvcGxlSW5wdXRFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgdXNlcklucHV0ID0gdGhpcy5nYXRoZXJVc2VySW5wdXQoKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodXNlcklucHV0KSkge1xuICAgICAgICAgICAgY29uc3QgW3RpdGxlLCBkZXNjLCBwZW9wbGVdID0gdXNlcklucHV0O1xuICAgICAgICAgICAgcHJvamVjdFN0YXRlLmFkZFByb2plY3QodGl0bGUsIGRlc2MsIHBlb3BsZSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFySW5wdXRzKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5fX2RlY29yYXRlKFtcbiAgICBhdXRvYmluZFxuXSwgUHJvamVjdElucHV0LnByb3RvdHlwZSwgXCJzdWJtaXRIYW5kbGVyXCIsIG51bGwpO1xuIiwidmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLWNvbXBvbmVudCc7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvYXV0b2JpbmQnO1xuZXhwb3J0IGNsYXNzIFByb2plY3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBnZXQgcGVyc29ucygpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvamVjdC5wZW9wbGUgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiAnMSBwZXJzb24nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGAke3RoaXMucHJvamVjdC5wZW9wbGV9IHBlcnNvbnNgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKGhvc3RJZCwgcHJvamVjdCkge1xuICAgICAgICBzdXBlcignc2luZ2xlLXByb2plY3QnLCBob3N0SWQsIGZhbHNlLCBwcm9qZWN0LmlkKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcbiAgICAgICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgfVxuICAgIGRyYWdTdGFydEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZGF0YVRyYW5zZmVyLnNldERhdGEoJ3RleHQvcGxhaW4nLCB0aGlzLnByb2plY3QuaWQpO1xuICAgICAgICBldmVudC5kYXRhVHJhbnNmZXIuZWZmZWN0QWxsb3dlZCA9ICdtb3ZlJztcbiAgICB9XG4gICAgZHJhZ0VuZEhhbmRsZXIoXykge1xuICAgICAgICBjb25zb2xlLmxvZygnRHJhZ0VuZCcpO1xuICAgIH1cbiAgICBjb25maWd1cmUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCB0aGlzLmRyYWdTdGFydEhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIHRoaXMuZHJhZ0VuZEhhbmRsZXIpO1xuICAgIH1cbiAgICByZW5kZXJDb250ZW50KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaDInKS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC50aXRsZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2gzJykudGV4dENvbnRlbnQgPSB0aGlzLnBlcnNvbnMgKyAnIGFzc2lnbmVkJztcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3AnKS50ZXh0Q29udGVudCA9IHRoaXMucHJvamVjdC5kZXNjcmlwdGlvbjtcbiAgICB9XG59XG5fX2RlY29yYXRlKFtcbiAgICBhdXRvYmluZFxuXSwgUHJvamVjdEl0ZW0ucHJvdG90eXBlLCBcImRyYWdTdGFydEhhbmRsZXJcIiwgbnVsbCk7XG4iLCJ2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2Jhc2UtY29tcG9uZW50JztcbmltcG9ydCB7IFByb2plY3RTdGF0dXMgfSBmcm9tICcuLi9tb2RlbHMvcHJvamVjdC1tb2RlbCc7XG5pbXBvcnQgeyBhdXRvYmluZCB9IGZyb20gJy4uL2RlY29yYXRvcnMvYXV0b2JpbmQnO1xuaW1wb3J0IHsgcHJvamVjdFN0YXRlIH0gZnJvbSAnLi4vc3RhdGUvcHJvamVjdC1zdGF0ZSc7XG5pbXBvcnQgeyBQcm9qZWN0SXRlbSB9IGZyb20gJy4vcHJvamVjdC1pdGVtJztcbmV4cG9ydCBjbGFzcyBQcm9qZWN0TGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICBzdXBlcigncHJvamVjdC1saXN0JywgJ2FwcCcsIGZhbHNlLCBgJHt0eXBlfS1wcm9qZWN0c2ApO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSBbXTtcbiAgICAgICAgdGhpcy5jb25maWd1cmUoKTtcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gICAgfVxuICAgIGRyYWdPdmVySGFuZGxlcihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci50eXBlc1swXSA9PT0gJ3RleHQvcGxhaW4nKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgICAgICAgICBsaXN0RWwuY2xhc3NMaXN0LmFkZCgnZHJvcHBhYmxlJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZHJvcEhhbmRsZXIoZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcHJqSWQgPSBldmVudC5kYXRhVHJhbnNmZXIuZ2V0RGF0YSgndGV4dC9wbGFpbicpO1xuICAgICAgICBwcm9qZWN0U3RhdGUubW92ZVByb2plY3QocHJqSWQsIHRoaXMudHlwZSA9PT0gJ2FjdGl2ZScgPyBQcm9qZWN0U3RhdHVzLkFjdGl2ZSA6IFByb2plY3RTdGF0dXMuRmluaXNoZWQpO1xuICAgIH1cbiAgICBkcmFnTGVhdmVIYW5kbGVyKF8pIHtcbiAgICAgICAgY29uc3QgbGlzdEVsID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJyk7XG4gICAgICAgIGxpc3RFbC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wcGFibGUnKTtcbiAgICB9XG4gICAgY29uZmlndXJlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmRyYWdPdmVySGFuZGxlcik7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCB0aGlzLmRyYWdMZWF2ZUhhbmRsZXIpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuZHJvcEhhbmRsZXIpO1xuICAgICAgICBwcm9qZWN0U3RhdGUuYWRkTGlzdGVuZXIoKHByb2plY3RzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWxldmFudFByb2plY3RzID0gcHJvamVjdHMuZmlsdGVyKChwcmopID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnYWN0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJqLnN0YXR1cyA9PT0gUHJvamVjdFN0YXR1cy5BY3RpdmU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBwcmouc3RhdHVzID09PSBQcm9qZWN0U3RhdHVzLkZpbmlzaGVkO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmFzc2lnbmVkUHJvamVjdHMgPSByZWxldmFudFByb2plY3RzO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmVuZGVyQ29udGVudCgpIHtcbiAgICAgICAgY29uc3QgbGlzdElkID0gYCR7dGhpcy50eXBlfS1wcm9qZWN0cy1saXN0YDtcbiAgICAgICAgdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuaWQgPSBsaXN0SWQ7XG4gICAgICAgIHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdoMicpLnRleHRDb250ZW50ID1cbiAgICAgICAgICAgIHRoaXMudHlwZS50b1VwcGVyQ2FzZSgpICsgJyBQUk9KRUNUUyc7XG4gICAgfVxuICAgIHJlbmRlclByb2plY3RzKCkge1xuICAgICAgICBjb25zdCBsaXN0RWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aGlzLnR5cGV9LXByb2plY3RzLWxpc3RgKTtcbiAgICAgICAgbGlzdEVsLmlubmVySFRNTCA9ICcnO1xuICAgICAgICBmb3IgKGNvbnN0IHByakl0ZW0gb2YgdGhpcy5hc3NpZ25lZFByb2plY3RzKSB7XG4gICAgICAgICAgICBuZXcgUHJvamVjdEl0ZW0odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3VsJykuaWQsIHByakl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuX19kZWNvcmF0ZShbXG4gICAgYXV0b2JpbmRcbl0sIFByb2plY3RMaXN0LnByb3RvdHlwZSwgXCJkcmFnT3ZlckhhbmRsZXJcIiwgbnVsbCk7XG5fX2RlY29yYXRlKFtcbiAgICBhdXRvYmluZFxuXSwgUHJvamVjdExpc3QucHJvdG90eXBlLCBcImRyb3BIYW5kbGVyXCIsIG51bGwpO1xuX19kZWNvcmF0ZShbXG4gICAgYXV0b2JpbmRcbl0sIFByb2plY3RMaXN0LnByb3RvdHlwZSwgXCJkcmFnTGVhdmVIYW5kbGVyXCIsIG51bGwpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGF1dG9iaW5kKF8sIF8yLCBkZXNjcmlwdG9yKSB7XG4gICAgY29uc3Qgb3JpZ2luYWxNZXRob2QgPSBkZXNjcmlwdG9yLnZhbHVlO1xuICAgIGNvbnN0IGFkakRlc2NyaXB0b3IgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgY29uc3QgYm91bmRGbiA9IG9yaWdpbmFsTWV0aG9kLmJpbmQodGhpcyk7XG4gICAgICAgICAgICByZXR1cm4gYm91bmRGbjtcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIHJldHVybiBhZGpEZXNjcmlwdG9yO1xufVxuIiwiZXhwb3J0IHZhciBQcm9qZWN0U3RhdHVzO1xuKGZ1bmN0aW9uIChQcm9qZWN0U3RhdHVzKSB7XG4gICAgUHJvamVjdFN0YXR1c1tQcm9qZWN0U3RhdHVzW1wiQWN0aXZlXCJdID0gMF0gPSBcIkFjdGl2ZVwiO1xuICAgIFByb2plY3RTdGF0dXNbUHJvamVjdFN0YXR1c1tcIkZpbmlzaGVkXCJdID0gMV0gPSBcIkZpbmlzaGVkXCI7XG59KShQcm9qZWN0U3RhdHVzIHx8IChQcm9qZWN0U3RhdHVzID0ge30pKTtcbmV4cG9ydCBjbGFzcyBQcm9qZWN0IHtcbiAgICBjb25zdHJ1Y3RvcihpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBwZW9wbGUsIHN0YXR1cykge1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnBlb3BsZSA9IHBlb3BsZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgUHJvamVjdCwgUHJvamVjdFN0YXR1cyB9IGZyb20gJy4uL21vZGVscy9wcm9qZWN0LW1vZGVsJztcbmV4cG9ydCBjbGFzcyBTdGF0ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgfVxuICAgIGFkZExpc3RlbmVyKGxpc3RlbmVyRm4pIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lckZuKTtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUHJvamVjdFN0YXRlIGV4dGVuZHMgU3RhdGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgUHJvamVjdFN0YXRlKCk7XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cbiAgICBhZGRQcm9qZWN0KHRpdGxlLCBkZXNjcmlwdGlvbiwgbnVtT2ZQZW9wbGUpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KE1hdGgucmFuZG9tKCkudG9TdHJpbmcoKSwgdGl0bGUsIGRlc2NyaXB0aW9uLCBudW1PZlBlb3BsZSwgUHJvamVjdFN0YXR1cy5BY3RpdmUpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIG1vdmVQcm9qZWN0KHByb2plY3RJZCwgbmV3U3RhdHVzKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB0aGlzLnByb2plY3RzLmZpbmQoKHByaikgPT4gcHJqLmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgICBpZiAocHJvamVjdCAmJiBwcm9qZWN0LnN0YXR1cyAhPT0gbmV3U3RhdHVzKSB7XG4gICAgICAgICAgICBwcm9qZWN0LnN0YXR1cyA9IG5ld1N0YXR1cztcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdGVuZXJzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlTGlzdGVuZXJzKCkge1xuICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyRm4gb2YgdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyRm4odGhpcy5wcm9qZWN0cy5zbGljZSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBjb25zdCBwcm9qZWN0U3RhdGUgPSBQcm9qZWN0U3RhdGUuZ2V0SW5zdGFuY2UoKTtcbiIsImV4cG9ydCBmdW5jdGlvbiB2YWxpZGF0ZSh2YWxpZGF0YWJsZUlucHV0KSB7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgIGlmICh2YWxpZGF0YWJsZUlucHV0LnJlcXVpcmVkKSB7XG4gICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwO1xuICAgIH1cbiAgICBpZiAodmFsaWRhdGFibGVJbnB1dC5taW5MZW5ndGggIT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaXNWYWxpZCA9XG4gICAgICAgICAgICBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUubGVuZ3RoID49IHZhbGlkYXRhYmxlSW5wdXQubWluTGVuZ3RoO1xuICAgIH1cbiAgICBpZiAodmFsaWRhdGFibGVJbnB1dC5tYXhMZW5ndGggIT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaXNWYWxpZCA9XG4gICAgICAgICAgICBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUubGVuZ3RoIDw9IHZhbGlkYXRhYmxlSW5wdXQubWF4TGVuZ3RoO1xuICAgIH1cbiAgICBpZiAodmFsaWRhdGFibGVJbnB1dC5taW4gIT0gbnVsbCAmJlxuICAgICAgICB0eXBlb2YgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgaXNWYWxpZCA9IGlzVmFsaWQgJiYgdmFsaWRhdGFibGVJbnB1dC52YWx1ZSA+PSB2YWxpZGF0YWJsZUlucHV0Lm1pbjtcbiAgICB9XG4gICAgaWYgKHZhbGlkYXRhYmxlSW5wdXQubWF4ICE9IG51bGwgJiZcbiAgICAgICAgdHlwZW9mIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlzVmFsaWQgPSBpc1ZhbGlkICYmIHZhbGlkYXRhYmxlSW5wdXQudmFsdWUgPD0gdmFsaWRhdGFibGVJbnB1dC5tYXg7XG4gICAgfVxuICAgIHJldHVybiBpc1ZhbGlkO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0SW5wdXQgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdC1pbnB1dCc7XG5pbXBvcnQgeyBQcm9qZWN0TGlzdCB9IGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0LWxpc3QnO1xubmV3IFByb2plY3RJbnB1dCgpO1xubmV3IFByb2plY3RMaXN0KCdhY3RpdmUnKTtcbm5ldyBQcm9qZWN0TGlzdCgnZmluaXNoZWQnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==