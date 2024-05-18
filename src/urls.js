const SERVER = "http://127.0.0.1:8000";

const URLS = {
  login: `${SERVER}/api/login/token/`,
  refresh: `${SERVER}/api/login/token-refresh/`,
  archive: `${SERVER}/api/archive-articles/`,
  versions: `${SERVER}/api/past-articles/`, // + version_id
  folders: `${SERVER}/api/folders/`, // иногда + id_folder
  formulas: `${SERVER}/api/formula/`, // иногда + id_formula
  formulaImg: `https://latex.codecogs.com/svg.image?\\LARGE&space;`,
}

export {URLS};