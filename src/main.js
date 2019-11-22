import {getBoardTemplate} from './components/board.js';
import {getFilterTemplate} from './components/filter.js';
import {getLoadMoreButtonTemplate} from './components/load-more-button.js';
import {getMenuTemplate} from './components/menu.js';
import {getTaskTemplate} from './components/task.js';
import {getTaskEditTemplate} from './components/task-edit.js';

const TASK_COUNT = 3;

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = document.querySelector(`.main__control`);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

render(siteHeaderElement, getMenuTemplate(), `beforeend`);
render(siteMainElement, getFilterTemplate(), `beforeend`);
render(siteMainElement, getBoardTemplate(), `beforeend`);

const taskListElement = siteMainElement.querySelector(`.board__tasks`);
render(taskListElement, getTaskEditTemplate(), `beforeend`);

for (let i = 0; i < TASK_COUNT; i++) {
  render(taskListElement, getTaskTemplate(), `beforeend`);
}

const boardElement = siteMainElement.querySelector(`.board`);
render(boardElement, getLoadMoreButtonTemplate(), `beforeend`);
