import * as fromDataLayer\store\action\digitalData from './data-layer\store\action\digital-data.actions';

describe('loadDataLayer\store\action\digitalDatas', () => {
  it('should return an action', () => {
    expect(fromDataLayer\store\action\digitalData.loadDataLayer\store\action\digitalDatas().type).toBe('[DataLayer\store\action\digitalData] Load DataLayer\store\action\digitalDatas');
  });
});
