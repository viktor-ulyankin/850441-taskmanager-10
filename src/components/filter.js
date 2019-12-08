import AbstractComponent from './abstract-component.js';

const getFilterMarkup = (filter, isChecked) => {
  const {title, count} = filter;

  return (
    `<input
        type="radio"
        id="filter__${title}"
        class="filter__input visually-hidden"
        name="filter"
        ${isChecked ? `checked` : ``}
      />
      <label for="filter__${title}" class="filter__label">
        ${title} <span class="filter__${title}-count">${count}</span>
      </label>`
  );
};

const getFilterTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => getFilterMarkup(it, i === 0)).join(`\n`);

  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};

export default class Filter extends AbstractComponent {
  constructor(filters) {
    super();

    this._filters = filters;
  }

  getTemplate() {
    return getFilterTemplate(this._filters);
  }
}
