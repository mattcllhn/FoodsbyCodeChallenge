import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';
import { DataGetterService } from './data-getter.service';
const sampleJson = require('../assets/deliveries-sample.json');

describe('DataGetterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule,
        HttpClientTestingModule
      ],
      providers: [DataGetterService]
    });
  });

  it('should be created', inject([DataGetterService], (service: DataGetterService) => {
    expect(service).toBeTruthy();
  }));

  it('#getData should return the contents of static json file', inject([DataGetterService], (service: DataGetterService) => {
    console.log('in the spec file', sampleJson);
    service.getData().subscribe(res => { 
      expect(res.data).toEqual(sampleJson)
    });
  }))
});
