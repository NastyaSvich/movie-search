const buttons = require('./sum');
const states = require('./index_for_test');

let statesAbbrList;
let statesAbbrList1;
let statesAbbrList2;
beforeEach(() => {
  statesAbbrList = states.getStatesAbbrList();
  statesAbbrList2 = buttons.getStatesAbbrList();
  statesAbbrList1 = buttons.getStatesAbbrList();
});

describe('getStatesAbbrList', () => {
  it('should return list of abbreviations', () => {
    expect(statesAbbrList2).toBeDefined();
  });
});

describe('getStatesAbbrList', () => {
  it('should return list array', () => {
    // Defined/Undefined
    expect(statesAbbrList1).toBeDefined();
    // Types
    expect(statesAbbrList1).toBeInstanceOf(Array);
    expect(statesAbbrList1).toEqual(expect.anything());
    expect(statesAbbrList1).toEqual(expect.anything());
    expect(statesAbbrList1).toEqual(expect.any(Array));
  });
});

describe('getStatesAbbrList', () => {
  it('should return list of abbreviations', () => {
    expect(statesAbbrList.length).toBe(51);
  });
});

describe('zipLookup', () => {
  it('should resolve correct zip', () => states.zipLookup('94085').then((state) => expect(state).toEqual('CA')));

  it('should resolve correct zip | using resolves', () => {
    expect.assertions(1);
    return expect(states.zipLookup('94085')).resolves.toEqual('CA');
  });

  it('should reject on invalid zip', () => {
    expect.assertions(1);
    return states.zipLookup('').catch((e) => expect(e).toEqual('Zip code is required'));
  });

  it('should reject on invalid zip | using rejects', () => {
    expect.assertions(1);
    return expect(states.zipLookup('')).rejects.toMatch('Zip code is required');
  });
});
