import { paginate } from "../views/pagination.js";

const changePageSize = (value) => {
  const { renderPages } = paginate(Number(value));
  renderPages();
};

export default changePageSize;
