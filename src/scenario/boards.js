let boards;

//Factory that create boards
function create({ name, w, h, d }) {
    const new_board = {
        name: name,
        dimension: {
            width: w,
            height: h,
            depth: d
        }
    }
    boards.push(new_board);

    return new_board;
}

function remove(name) {
    const t = boards.length
     boards = boards.filter((b) => {
        return b.name !== name;
    });

    return boards.length < t;
}

function get() {
    return boards;
}

boards = [];

module.exports = { create, remove, get };