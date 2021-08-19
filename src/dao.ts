import { Dao, KeyType, NetworkService, StorageApi } from 'ionic-state'
import { {Entity} } from '../model/{entity}'

export class {Entity}Dao extends Dao<{Entity}> {
  keyType: KeyType = {KeyType}

  constructor(protected api: StorageApi, protected network: NetworkService) {
    super(api, network, '{entity}')
  }
}
