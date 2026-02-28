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
  Learn how to effectively use async data with preact/signals, including
  handling Promises and rerun operations for dynamic updates, while
  understanding the importance of synchronous computations for signal integrity.
embedding: >-
  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
related:
  - >-
    videos/flutter/introducing-the-signals_hooks-package-for-flutter-hooks-and-signals.md
  - dart/html-web-components.md
  - videos/flutter/rody-davis-building-adaptive-uiux-in-flutter.md
  - >-
    videos/firebase-studio/compile-sqlite-from-source-to-wasm-in-firebase-studio.md
  - videos/take-5/responsive-design-flutter.md
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
