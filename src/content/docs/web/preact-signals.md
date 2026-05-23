---
title: Async Preact Signals
date: '2025-01-28 12:00:00.000Z'
draft: false
tags:
  - dart
  - javascript
  - github
  - web
  - signals
summary: >-
  Learn how to manage asynchronous data fetching (Promises) with Preact signals
  by using side effects, ensuring state integrity, and handling dependency
  changes through proper request cancellation.
embedding: >-
  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
related:
  - >-
    videos/flutter/introducing-the-signals_hooks-package-for-flutter-hooks-and-signals.mdx
  - backend/pocketbase-webrtc.md
  - flutter/snippets/stream-widget.md
  - flutter/graph-database.md
  - dart/palm-2-api.md
last_updated_metadata: '2026-05-23T00:22:10.304Z'
---

# Async Preact Signals

When working with [signals](https://github.com/preactjs/signals) in Javascript, it is very common to work with async data from [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).

Async vs Sync
-------------

But unlike other state management libraries, signals do not have an _asynchronous_ state graph and all values must be computed _synchronously_.

When people first start using signals they want to simply add **async** to the function callback but this breaks how they work under the hood and leads to **undefined** behavior. ☹️

Async functions are a leaky abstraction and force you to handle them all the way up the graph. Async is also not always better and can have a [performance impact](https://madelinemiller.dev/blog/javascript-promise-overhead/). 😬

Working with Promises
---------------------

We can still do so much with sync operations, and make it eaiser to work with common async patterns.

For example when you make a **http** request using [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), you want to return the data in the **Promise** and update some UI.

```javascript
const el = document.querySelector('#output');
let postId = '123';
fetch(`/posts/${postId}`).then(res => res.json()).then(post => {
    el.innerText = post.title;
})
```

Now when we add signals we can rerun the fetch everytime the post id changes.

```javascript
import { effect, signal } from "@preact/signals-core";

const el = document.querySelector('#output');
const postId =  signal( '123');

effect(() => {
    fetch(`/posts/${postId.value}`).then(res => res.json()).then(post => {
        el.innerText = post.title;
    });
});
```

This is better, but now we need to handle stopping the previous request if the post id changes before the previous fetch completes.

```javascript
import { effect, signal } from "@preact/signals-core";

const el = document.querySelector('#output');
const postId =  signal( '123');
let controller;

effect(() => {
    if (controller) {
         controller.abort();
    }
    controller = new AbortController();
    const signal = controller.signal;
    try {
       fetch(`/posts/${postId.value}`, { signal }).then(res => res.json()).then(post => {
            el.innerText = post.title;
        }); 
    } catch (err) {
       // todo: show error message
    }
});
```

But this still skips a lot of things we normally want to show like loading states and error states.

```javascript
import { effect, signal, batch } from "@preact/signals-core";

const el = document.querySelector('#output');
const postId =  signal( '123');
const postData = signal({});
const errorMessage = signal('');
const loading = signal(false);
let controller;

effect(() => {
    if (controller) {
         controller.abort();
    }
    controller = new AbortController();
    const signal = controller.signal;
    batch(() => {
       loading.value = true;
       errorMessage.value = '';
       postData.value = {};
    });
    try {
       fetch(`/posts/${postId.value}`, { signal }).then(res => res.json()).then(post => {
            batch(() => {
                 postData.value = post;
                 loading.value = false;
             });
        }); 
    } catch (err) {
        errorMessage.value = err.message;
    }
});
effect(() =>  {
    if (loading.value) {
        el.innerText = 'Loading...';
    } else if (errorMessage.value) {
        el.innerText = `Error: ${errorMessage.value}`;
    } else {
        el.innerText = postData.value.title;
    }
});
```

Now we can show the proper states, but this is only for one request...

We could wrap this up in a class to reuse or create a new type of signal that can work with asynchronous data.

AsyncState
----------

We want to have a base class that we can make our loading states easily extend from:

```javascript
export class AsyncState<T> {
  constructor() {}

  get value(): T | null {
    return null;
  }

  get requireValue(): T {
    throw new Error("Value not set");
  }

  get error(): any {
    return null;
  }

  get isLoading(): boolean {
    return false;
  }

  get hasValue(): boolean {
    return false;
  }

  get hasError(): boolean {
    return false;
  }

  map<R>(builders: {
    onLoading: () => R;
    onError: (error: any) => R;
    onData: (data: T) => R;
  }): R {
    if (this.hasError) {
      return builders.onError(this.error);
    }
    if (this.hasValue) {
      return builders.onData(this.requireValue);
    }
    return builders.onLoading();
  }
}
```

> [This class](https://dartsignals.dev/async/state/) actually comes from a [Dart port of preact signals](https://github.com/rodydavis/signals.dart) I created.

This allows us to easily check if there is an actual value, error or if it is loading. It also provides an easy builder method to map the state to another value. 🤩

### AsyncData

The loading state extends **AsyncState** and passes the value in the constructor to the overriden methods.

```javascript
export class AsyncData<T> extends AsyncState<T> {
  private _value: T;

  constructor(value: T) {
    super();
    this._value = value;
  }

  get requireValue(): T {
    return this._value;
  }

  get hasValue(): boolean {
    return true;
  }

  toString() {
    return `AsyncData{${this._value}}`;
  }
}
```

### AsyncLoading

For the loading state we override the methods like **AsyncData**.

```javascript
export class AsyncLoading<T> extends AsyncState<T> {
  get value(): T | null {
    return null;
  }

  get isLoading(): boolean {
    return true;
  }

  toString() {
    return `AsyncLoading{}`;
  }
}
```

### AsyncError

For the error state we can pass an object of any type to return the error as value instead of throwing an exception (like Go).

```javascript
export class AsyncError<T> extends AsyncState<T> {
  private _error: any;

  constructor(error: any) {
    super();
    this._error = error;
  }

  get error(): any {
    return this._error;
  }

  get hasError(): boolean {
    return true;
  }

  toString() {
    return `AsyncError{${this._error}}`;
  }
}
```

asyncSignal
-----------

Now we the state classes created, we can create a function to create an asynchronous signal with all the logic we talked about earlier.

We need to show the sync value at any time and have a way to abort previous requests.

```javascript
export function asyncSignal<T>(
  cb: () => Promise<T>
): ReadonlySignal<AsyncState<T>> {
  const loading = new AsyncLoading<T>();
  const reset = Symbol("reset");
  const s = signal<AsyncState<T>>(loading);
  const c = computed<Promise<T>>(cb);
  let controller: AbortController | null;
  let abortSignal: AbortSignal | null;

  function execute(cb: Promise<T>, cancel: AbortSignal) {
    (async () => {
      s.value = loading;
      try {
        const result = await new Promise<T>(async (resolve, reject) => {
          if (cancel.aborted) {
            reject(cancel.reason);
          }
          cancel.addEventListener("abort", () => {
            reject(cancel.reason);
          });
          try {
            const result = await cb;
            if (cancel.aborted) {
              reject(cancel.reason);
              return;
            }
            resolve(result);
          } catch (error) {
            reject(error);
          }
        });
        s.value = new AsyncData<T>(result);
      } catch (error) {
        if (error === reset) {
          s.value = loading;
        } else {
          s.value = new AsyncError<T>(error);
        }
      }
    })();
  }

  effect(() => {
    if (controller != null) {
      controller.abort(reset);
    }
    controller = new AbortController();
    abortSignal = controller.signal;
    execute(c.value, abortSignal);
  });

  return s;
}
```

This makes it very easy to create multiple asynchronous signals and also use it anywhere else you have signals in the application like effects and computeds.

```javascript
const el = document.querySelector('#output');
const postId =  signal('123');

const result = asyncSignal(() => fetch(`/posts/${postId.value}`).then(res => res.json()));

effect(() => {
   el.innerText = result.value.map({
      onLoading: () => 'Loading...',
      onError: (err) => `Error: ${err}`,
      onData: (post) => post.title, 
   });
});

postId.value = '456';
```

Conclusion
----------

I have started a Preact Signals GitHub discussion [here](https://github.com/preactjs/signals/discussions/648) and you can find a gist with the [final source code here](https://gist.github.com/rodydavis/3b5266da2cc07f6574d425f5ce6e1e31). 🎉

This has made working with asynchronous data a lot eaiser to work with and would love to hear your thoughts about ways to improve it 👀

Also if you are curious about how Angular does asynchronous signals you can check out the [resource signal](https://angular.dev/guide/signals/resource) and the [computedFrom/Async signal](https://justangular.com/blog/building-computed-async-for-signals-in-angular).
