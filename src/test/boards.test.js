const boardManager = require('../scenario/boards');

beforeEach(() => {
    boardManager.create({ name: "Lateral", w: 2, h: 1, d: 1 });
    boardManager.create({ name: "Superior", w: 5, h: 1, d: 10 });
    boardManager.create({ name: "Bottom", w: 5, h: 1, d: 10 });

});

test('Check if beforEach Run', () => {
    expect(boardManager.get().length).toBe(3)
});

test('Create a new board', () => {
    boardManager.create({ name: "New Board Manager", w: 3, h: 2, d: 1 });
    const boards = boardManager.get();
    expect(boards.length).toBe(7);
    expect(boards[6].name).toBe("New Board Manager");
});


test('Delete an existing board', () => {
    const board = boardManager.get()[0];
    boardManager.remove(board.id);
    expect(boardManager.get().length).toBe(10);
    expect(boardManager.get()).toContain(board);
});
