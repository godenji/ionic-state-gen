# Ionic State Generator

Bash utility for generating ngrx state management boilerplate.

Run `./generate --help` for usage

# Requirements

The following directories must exist in your application's `src/app`:
> action, dao, effect, reducer, store

A model and optional key are required prior to running the source code generator. 
By convention the source file names for model and key should be in lower case hyphenated 
format. For example, a model class `FooBar` should be named `foo-bar.ts` and its key (if 
exists) `foo-bar-id.ts` (or for `CustomKey`, `custom-key.ts`).

Given a `Foo` model and `FooId`, the following source files must be defined:

```
// src/app/model/key/foo-id.ts
import { Id } from 'ionic-state'

export class FooId extends Id {
  private nominal
}

// src/app/model/foo.ts
import { Entity } from 'ionic-state'
import { FooId } from './key/foo-id'
import { plainToClass, Type } from 'class-transformer'

export class Foo extends Entity {
  ...
  @Type(() => FooId)
  id: FooId

  copy(data: { [key: string]: any }) {
    return plainToClass(Foo, {
      ...(<Foo>this),
      ...data
    })
  }

  static apply(data?: { [key: string]: any }) {
    return new Foo().copy(data)
  }
}
```
