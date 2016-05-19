import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { PoschorAppComponent } from '../app/poschor.component';

beforeEachProviders(() => [PoschorAppComponent]);

describe('App: Poschor', () => {
  it('should create the app',
      inject([PoschorAppComponent], (app: PoschorAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'poschor works!\'',
      inject([PoschorAppComponent], (app: PoschorAppComponent) => {
    expect(app.title).toEqual('poschor works!');
  }));
});
