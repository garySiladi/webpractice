export default function (state = "Projects", action) {
    switch (action.type) {
    case 'HEADER_SELECT_TAB':
      return action.payload;
      break;
  }
  return state;
}
