import { CustomCountPipe } from './custom-count.pipe';

describe('CustomCountPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomCountPipe();
    expect(pipe).toBeTruthy();
  });
});
