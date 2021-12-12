const Tree = require('./index');

describe('Test the implementation of BFSelect', () => {
  it('should filter by value', () => {
    const root1 = new Tree(1);
    const branch2 = root1.addChild(2);
    const branch3 = root1.addChild(3);
    const leaf4 = branch2.addChild(4);
    const leaf5 = branch2.addChild(5);
    const leaf6 = branch3.addChild(6);
    const leaf7 = branch3.addChild(7);
    const filter = (value, depth) => value % 2;
    expect(root1.BFSelect(filter)).toEqual([1, 3, 5, 7]);
  });
  it('should filter by depth', () => {
    const root1 = new Tree(1);
    const branch2 = root1.addChild(2);
    const branch3 = root1.addChild(3);
    const leaf4 = branch2.addChild(4);
    const leaf5 = branch2.addChild(5);
    const leaf6 = branch3.addChild(6);
    const leaf7 = branch3.addChild(7);
    const filter = (value, depth) => depth === 1;
    expect(root1.BFSelect(filter)).toEqual([2, 3]);
  });
});
