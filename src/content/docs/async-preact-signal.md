---
title: Async Preact Signals
description: >
  Explore how to effectively manage asynchronous data with Preact Signals by
  creating a custom `asyncSignal` that handles loading, error, and data states
  without breaking the synchronous nature of signals.
date: '2025-01-28 12:00:00.000Z'
draft: false
tags:
  - Signals
  - Preact
  - Javascript
summary: >-
  Use signals in React to handle asynchronous data efficiently by leveraging
  synchronous operations and re-running asynchronous tasks when dependencies
  change, while avoiding the pitfalls of directly using async functions within
  signal effects.
embedding: >-
  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
related:
  - snippets/flutter-stream-widget.md
  - flutter/git-worktree-channels.md
  - signals-and-flutter-hooks.md
  - flutter-ssr-rfw.md
  - dart-html-web-components.md
---

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
