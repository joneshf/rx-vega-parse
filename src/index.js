import {Observable} from 'rx';
import {parse} from 'vega';
import schema from 'vega/src/core/schema';
import tv4 from 'tv4';

const vegaSchema = schema();

export const vegaParseSpec = spec =>
  Observable.create(obs => {
    if (tv4.validate(spec, vegaSchema)) {
      parse.spec(spec, parsed => {
        obs.onNext(parsed);
        obs.onCompleted();
      });
    } else {
      obs.onError(tv4.error);
    }
  });
