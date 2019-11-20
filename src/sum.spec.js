import { expect } from 'chai';
import sum from './sum';

describe('True or False', () => {
  it('true is true', () => {
    expect(true).to.eql(true);
  });
  it('false is false', () => {
    expect(false).to.eql(false);
  });
});

describe('sum() function', () => {
  it('sums two integers', () => {
    expect(sum(1, -3)).to.eql(-2);
  });
});
