import {createFiltersTemplate} from "./components/filter";
import {createSiteMenuTemplate} from "./components/menu";
import {createBoardTemplate} from "./components/board";
import {createTaskTemplate} from "./components/task";
import {createTaskEditTemplate} from "./components/task-edit";
import {createLoadMoreButtonTemplate} from "./components/load-more-button";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteMainMenuElement = siteMainElement.querySelector(`.main__control`);

render(siteMainMenuElement, createSiteMenuTemplate(), `beforeend`);
render(siteMainElement, createFiltersTemplate(), `beforeend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);

new Array(TASK_COUNT)
  .fill(``)
  .forEach(() => render(taskListElement, createTaskTemplate(), `beforeend`));

render(taskListElement, createTaskEditTemplate(), `afterbegin`);
render(taskListElement, createLoadMoreButtonTemplate(), `afterend`);

