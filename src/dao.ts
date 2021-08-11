import { Dao, NetworkService, StorageApi } from 'ionic-state'
import { HttpResponse } from '@angular/common/http'
import { {Entity} } from '../model/{entity}'

export class {Entity}Dao extends Dao<{Entity}> {
  constructor(protected api: StorageApi, protected network: NetworkService) {
    super(api, network, '{entity}')
  }

  deserialize(x: HttpResponse<{Entity}>) {
    return x.clone({ body: Entity.apply<{Entity}>(x.body) })
  }

  deserializeMany(x: HttpResponse<{Entity}[]>) {
    return x.clone({ body: x.body.map(x => Entity.apply<{Entity}>(x)) })
  }
}
