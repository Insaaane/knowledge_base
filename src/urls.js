const isProduction = true;

const SERVER = isProduction
  ? "https://management-system-production.up.railway.app"
  : "http://127.0.0.1:8000"; 

const URLS = {
  login: `${SERVER}/api/login/token/`,
  profile: `${SERVER}/api/me/profile/`,
  restore: `${SERVER}/api/restore-article/`, // + article_id post
  refresh: `${SERVER}/api/login/token-refresh/`,
  articles: `${SERVER}/api/articles/`, // иногда + id_folder
  search: `${SERVER}/api/search/`, // + текст
  archive: `${SERVER}/api/archive-articles/`,
  versions: `${SERVER}/api/past-articles/`, // + version_id
  folders: `${SERVER}/api/folders/`, // иногда + id_folder
  formulas: `${SERVER}/api/formula/`, // иногда + id_formula
  formulaImg: `https://latex.codecogs.com/svg.image?\\LARGE&space;`,
  employees: `${SERVER}/api/employee-profiles/`,
  newEmployee: `${SERVER}/admin/backend_drf/account/add/`,
  comments: `${SERVER}/articles/`, // <int:article_id>/comments/
  comments_delete: `${SERVER}/comments/`, // <int:comment_id>/
}

export {URLS};