const initState = {
  notes: [
    { id: "1", title: "note 1", content: "lalalala" },
    { id: "2", title: "note 1", content: "lalalala" },
    { id: "3", title: "note 1", content: "lalalala" }
  ]
};

const noteReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_NOTE":
      console.log("created note: ", action.note);
      return state;
    case "CREATE_NOTE_ERROR":
      console.log("create note error: ", action.err);
      return state;
    default:
      return state;
  }
};

export default noteReducer;
