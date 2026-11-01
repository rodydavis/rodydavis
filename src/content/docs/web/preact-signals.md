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
  - flutter/signals-and-hooks.md
  - flutter/ssr-rfw.md
  - >-
    videos/flutter/introducing-the-signals_hooks-package-for-flutter-hooks-and-signals.mdx
  - dart/html-web-components.md
  - flutter/web-push-notifications.md
last_updated_metadata: '2026-11-01T02:31:29.231Z'
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
