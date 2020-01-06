import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from "@angular/common/http";
import { Observable, of } from "rxjs";
import { delay, mergeMap, materialize, dematerialize } from "rxjs/operators";

import { Postcode } from "../../models/postcode";
export const postcodes: Postcode[] = [
  {
    postcode: " 0N4",
    latitude: 28.504386,
    longitude: 117.57372,
    id: 1
  },
  {
    postcode: "188355 8M6",
    latitude: 59.4225,
    longitude: 30.12389,
    id: 2
  },
  {
    postcode: "1150 4Q1",
    latitude: -37.758979,
    longitude: 176.4495638,
    id: 3
  },
  {
    postcode: " 0U1",
    latitude: -6.976504,
    longitude: 114.1112351,
    id: 4
  },
  {
    postcode: "79304 CEDEX 9N6",
    latitude: 46.8118134,
    longitude: -0.5451553,
    id: 5
  },
  {
    postcode: "379-2166 2Y6",
    latitude: 36.3798483,
    longitude: 139.1107678,
    id: 6
  },
  {
    postcode: "622052 9U3",
    latitude: 57.9093249,
    longitude: 60.166299,
    id: 7
  },
  {
    postcode: " 6J5",
    latitude: 42.4782102,
    longitude: 78.3955986,
    id: 8
  },
  {
    postcode: "69303 CEDEX 07 9O1",
    latitude: 45.7397125,
    longitude: 4.8372255,
    id: 9
  },
  {
    postcode: " 7H1",
    latitude: 29.746561,
    longitude: 111.778931,
    id: 10
  },
  {
    postcode: "1693 6V5",
    latitude: -25.99566,
    longitude: 28.1971031,
    id: 11
  },
  {
    postcode: "09015 1O2",
    latitude: 15.0690612,
    longitude: -91.6341489,
    id: 12
  },
  {
    postcode: " 7M4",
    latitude: 12.2651512,
    longitude: -85.0778886,
    id: 13
  },
  {
    postcode: " 5C5",
    latitude: 32.5836375,
    longitude: 14.0362587,
    id: 14
  },
  {
    postcode: "0173 5C8",
    latitude: 59.9278844,
    longitude: 10.7477822,
    id: 15
  },
  {
    postcode: " 3Y7",
    latitude: 47.4389969,
    longitude: 101.7525358,
    id: 16
  },
  {
    postcode: "140209 3X9",
    latitude: 51.5607333,
    longitude: 43.1402151,
    id: 17
  },
  {
    postcode: "41-840 9X9",
    latitude: 50.3055387,
    longitude: 18.7871344,
    id: 18
  },
  {
    postcode: "4705-653 3V7",
    latitude: 41.5054085,
    longitude: -8.4697574,
    id: 19
  },
  {
    postcode: "2170 3E8",
    latitude: 51.2472392,
    longitude: 4.4403455,
    id: 20
  },
  {
    postcode: " 1Q7",
    latitude: 8.2758676,
    longitude: -70.7659102,
    id: 21
  },
  {
    postcode: " 7E7",
    latitude: -8.401854,
    longitude: 114.118103,
    id: 22
  },
  {
    postcode: " 4M9",
    latitude: -8.1855421,
    longitude: 112.0178286,
    id: 23
  },
  {
    postcode: " 7X9",
    latitude: -0.677334,
    longitude: 34.779603,
    id: 24
  },
  {
    postcode: "2843 3S7",
    latitude: -32.4871605,
    longitude: -58.2510984,
    id: 25
  },
  {
    postcode: " 2T3",
    latitude: -7.3,
    longitude: 109.066667,
    id: 26
  },
  {
    postcode: " 6T4",
    latitude: 44.8990915,
    longitude: 110.1065717,
    id: 27
  },
  {
    postcode: " 2S3",
    latitude: -6.8931581,
    longitude: 112.438087,
    id: 28
  },
  {
    postcode: "79260-000 3O5",
    latitude: -21.9111483,
    longitude: -56.4719928,
    id: 29
  },
  {
    postcode: "34788 7F3",
    latitude: 19.3376878,
    longitude: -99.0591821,
    id: 30
  },
  {
    postcode: "40726 4I0",
    latitude: 3.0100681,
    longitude: 101.5326734,
    id: 31
  },
  {
    postcode: " 2X5",
    latitude: -8.0796655,
    longitude: 113.3049491,
    id: 32
  },
  {
    postcode: " 8K3",
    latitude: 8.34816,
    longitude: -71.85849,
    id: 33
  },
  {
    postcode: "129 55 8Y8",
    latitude: 59.2832062,
    longitude: 17.9570059,
    id: 34
  },
  {
    postcode: "2550-523 0B1",
    latitude: 39.2699174,
    longitude: -9.1052924,
    id: 35
  },
  {
    postcode: "M2K 3D7",
    latitude: 49.24993,
    longitude: -55.04816,
    id: 36
  },
  {
    postcode: "4740-497 5M3",
    latitude: 41.5237953,
    longitude: -8.7261408,
    id: 37
  },
  {
    postcode: " 4L6",
    latitude: -25.408157,
    longitude: -57.2875097,
    id: 38
  },
  {
    postcode: " 4K9",
    latitude: -9.833763,
    longitude: 124.458641,
    id: 39
  },
  {
    postcode: " 6V7",
    latitude: 25.783198,
    longitude: 109.607675,
    id: 40
  },
  {
    postcode: "1240 4W1",
    latitude: 44.351935,
    longitude: -87.8445954,
    id: 41
  },
  {
    postcode: "781-3223 4R2",
    latitude: 33.6450129,
    longitude: 133.4789243,
    id: 42
  },
  {
    postcode: "10520 6M8",
    latitude: 10.1096551,
    longitude: 99.822979,
    id: 43
  },
  {
    postcode: " 5O6",
    latitude: 36.2944144,
    longitude: 28.1620173,
    id: 44
  },
  {
    postcode: " 0X3",
    latitude: 29.2813,
    longitude: 117.22473,
    id: 45
  },
  {
    postcode: "180559 8W4",
    latitude: 57.8282585,
    longitude: 28.2416397,
    id: 46
  },
  {
    postcode: "43150 9Z3",
    latitude: 13.7768017,
    longitude: 100.5593109,
    id: 47
  },
  {
    postcode: " 5Y1",
    latitude: 30.7016468,
    longitude: 104.0663422,
    id: 48
  },
  {
    postcode: "40460 4E7",
    latitude: 2.9864896,
    longitude: 101.5395705,
    id: 49
  },
  {
    postcode: "4620-400 1N6",
    latitude: 41.0734417,
    longitude: -8.6358837,
    id: 50
  },
  {
    postcode: "346630 6S2",
    latitude: 47.5155739,
    longitude: 40.8140313,
    id: 51
  },
  {
    postcode: "20003 8A6",
    latitude: 14.7641115,
    longitude: -89.430685,
    id: 52
  },
  {
    postcode: "9500-014 4S7",
    latitude: 37.751046,
    longitude: -25.670123,
    id: 53
  },
  {
    postcode: "77915-000 2L0",
    latitude: -6.0768719,
    longitude: -47.8032284,
    id: 54
  },
  {
    postcode: "134548 8P3",
    latitude: 8.27533,
    longitude: -73.868176,
    id: 55
  },
  {
    postcode: " 2P9",
    latitude: 44.521785,
    longitude: 125.72862,
    id: 56
  },
  {
    postcode: " 0Y8",
    latitude: 27.768996,
    longitude: 112.792138,
    id: 57
  },
  {
    postcode: "77293 7R8",
    latitude: 29.8699072,
    longitude: -95.3298675,
    id: 58
  },
  {
    postcode: " 0N1",
    latitude: 10.7242788,
    longitude: 39.8733409,
    id: 59
  },
  {
    postcode: " 9V7",
    latitude: 34.878483,
    longitude: 113.277504,
    id: 60
  },
  {
    postcode: " 5P3",
    latitude: 30.118912,
    longitude: 111.484536,
    id: 61
  },
  {
    postcode: "83553 5S3",
    latitude: 29.0180288,
    longitude: -110.9119181,
    id: 62
  },
  {
    postcode: " 3C6",
    latitude: 10.1769828,
    longitude: 38.1239492,
    id: 63
  },
  {
    postcode: "2705-750 9N8",
    latitude: 38.8783335,
    longitude: -9.425154,
    id: 64
  },
  {
    postcode: "612730 5Q5",
    latitude: 51.247228,
    longitude: 58.498546,
    id: 65
  },
  {
    postcode: "95852 7F5",
    latitude: 38.6,
    longitude: -121.45,
    id: 66
  },
  {
    postcode: " 4J6",
    latitude: 49.0149775,
    longitude: 31.0539028,
    id: 67
  },
  {
    postcode: "41963 3Q2",
    latitude: 25.8007724,
    longitude: -100.4277766,
    id: 68
  },
  {
    postcode: "368608 3J4",
    latitude: 42.0813751,
    longitude: 48.2792467,
    id: 69
  },
  {
    postcode: " 5Y4",
    latitude: 27.08556,
    longitude: 112.949437,
    id: 70
  },
  {
    postcode: " 0V3",
    latitude: 50.2603928,
    longitude: 71.5485944,
    id: 71
  },
  {
    postcode: "S6J 1O7",
    latitude: 50.4163784,
    longitude: -105.5361463,
    id: 72
  },
  {
    postcode: " 9Q4",
    latitude: -0.2467982,
    longitude: 109.6163185,
    id: 73
  },
  {
    postcode: "80279 7L7",
    latitude: 39.7446895,
    longitude: -104.9933772,
    id: 74
  },
  {
    postcode: " 0U1",
    latitude: -8.1658601,
    longitude: 111.7763713,
    id: 75
  },
  {
    postcode: " 1D7",
    latitude: -7.2033646,
    longitude: 111.6630914,
    id: 76
  },
  {
    postcode: " 7E3",
    latitude: -7.633333,
    longitude: 108.133333,
    id: 77
  },
  {
    postcode: "6529 0R6",
    latitude: 51.8417492,
    longitude: 5.8715134,
    id: 78
  },
  {
    postcode: " 2O4",
    latitude: 9.0796794,
    longitude: 6.0097018,
    id: 79
  },
  {
    postcode: "76141 6I0",
    latitude: 26.2958582,
    longitude: 68.6359692,
    id: 80
  },
  {
    postcode: "542 95 1Z6",
    latitude: 58.6429512,
    longitude: 13.6587955,
    id: 81
  },
  {
    postcode: " 9O8",
    latitude: 20.2506149,
    longitude: 105.9744536,
    id: 82
  },
  {
    postcode: " 1T2",
    latitude: -7.0206795,
    longitude: 112.3963638,
    id: 83
  },
  {
    postcode: " 5H4",
    latitude: 20.007968,
    longitude: 110.293561,
    id: 84
  },
  {
    postcode: "309666 4Q1",
    latitude: 50.4213981,
    longitude: 37.8304992,
    id: 85
  },
  {
    postcode: "169511 2A4",
    latitude: 63.593219,
    longitude: 53.9068532,
    id: 86
  },
  {
    postcode: " 7T0",
    latitude: -8.2909,
    longitude: 123.2391,
    id: 87
  },
  {
    postcode: "37900-000 2F8",
    latitude: -20.7430332,
    longitude: -46.6096926,
    id: 88
  },
  {
    postcode: " 3B9",
    latitude: -7.1785873,
    longitude: -76.6889136,
    id: 89
  },
  {
    postcode: " 4G7",
    latitude: 25.770509,
    longitude: 113.014717,
    id: 90
  },
  {
    postcode: "2509 7T8",
    latitude: 15.69327,
    longitude: 120.45936,
    id: 91
  },
  {
    postcode: "595 94 8Z8",
    latitude: 58.3226908,
    longitude: 15.1335348,
    id: 92
  },
  {
    postcode: "3500-548 4X4",
    latitude: 40.5544993,
    longitude: -7.9843201,
    id: 93
  },
  {
    postcode: " 9M3",
    latitude: 32.032726,
    longitude: 35.288375,
    id: 94
  },
  {
    postcode: "722 44 2B0",
    latitude: 59.6637076,
    longitude: 16.5305978,
    id: 95
  },
  {
    postcode: " 1F3",
    latitude: -17.76667,
    longitude: -149.41667,
    id: 96
  },
  {
    postcode: " 6R7",
    latitude: 37.943121,
    longitude: 115.217658,
    id: 97
  },
  {
    postcode: "25045 CEDEX 0R4",
    latitude: 47.287125,
    longitude: 5.993932,
    id: 98
  },
  {
    postcode: " 5B8",
    latitude: 34.8066794,
    longitude: 32.4212424,
    id: 99
  },
  {
    postcode: " 0Y8",
    latitude: 36.373345,
    longitude: 100.103317,
    id: 100
  }
];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method } = request;
    // wrap in delayed observable to simulate server api call
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith("/postcode") && method == "GET":
          return getPostCodes();
        default:
          return next.handle(request);
      }
    }

    function getPostCodes() {
      return of(new HttpResponse({ status: 200, body: postcodes }));
    }
  }
}
