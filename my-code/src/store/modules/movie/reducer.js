export default function movieReducer(
  state = { totalResults: 0, page: 0, pageCount: 0, searchStr: '', list: [] },
  action
) {
  switch (action.type) {
    case 'ADD_MOVIES':
      return {
        ...state,
        totalResults: action.movies.totalResults,
        page: action.movies.page,
        pageCount: action.movies.pageCount,
        searchStr: action.movies.searchStr,
        list: action.movies.list,
      };
    default:
      return state;
  }
}
