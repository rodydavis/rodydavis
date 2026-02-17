---
title: How to Build a WebRTC Signal Server with PocketBase
description: >
  Learn how to build a simple WebRTC video call application using PocketBase as
  a signaling server, enabling peer-to-peer communication with SQLite on the
  server and realtime updates via Server Sent Events.
date: '2025-01-18 22:32:05.045Z'
draft: false
tags:
  - PocketBase
  - Go
  - Javascript
  - CSS
  - HTML
  - SQLite
summary: >-
  This tutorial demonstrates setting up a WebRTC video calling example using
  PocketBase as a signaling server with SQLite and Server Sent Events, providing
  instructions for server setup and collection creation.
embedding: >-
  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
related:
  - astro-ssr-pocketbase-single-server.md
  - lit-rich-text-editor.md
  - palm-2-api-dart.md
  - deep-linking-flutter-web.md
  - figma-and-lit.md
---

Overview 
---------

If you are new to WebRTC then I suggest checking out this great Fireship video on [WebRTC in 100 seconds](https://youtu.be/WmR9IMUD_CY?si=c6xEDVslDOsIJzyP):

Also if you are looking for a [Firebase](https://firebase.google.com/) example then check out [this repository](https://github.com/fireship-io/webrtc-firebase-demo) which this example is largely based on.

This example is built using [PocketBase](https://pocketbase.io/) as the [signal server](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API/Signaling_and_video_calling) for [WebRTC](https://webrtc.org/) and runs [SQLite](https://www.sqlite.org/index.html) on the server with easy to use realtime SDKs built on top of [Server Sent Events (SSE)](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events).

Setting up the server 
----------------------

[Download PocketBase](https://pocketbase.io/docs/) and create a new directory that we will use for the project.

```markdown
mkdir webrtc-pocketbase-demo
cd webrtc-pocketbase-demo
```

Copy the PocketBase binary into the directory you just created under a sub directory `.pb`. If you are on MacOS you will need to [allow the executable](https://discussions.apple.com/thread/253681758) to run in settings.

Start the PocketBase server with the following command:

```markdown
.pb/pocketbase serve
```

If all goes well you should see the following:

```markdown
2023/11/04 15:10:56 Server started at http://127.0.0.1:8090
├─ REST API: http://127.0.0.1:8090/api/
└─ Admin UI: http://127.0.0.1:8090/_/
```

Open up the Admin UI url and create a new username and password.

For this example the email and password will be the following:

Key

Value

Email

[test@example.com](mailto:test@example.com)

Password

Test123456789

You should now see the following:

![](../../assets/web_rtc_1_sxepcsqwya.png)

### Creating the collections 

#### ice\_servers 

Create a new collection named `ice_servers` with the following columns:

Column Name

Column Type

url

Plain text

![](../../assets/web_rtc_2_18muflf746.png)

Add the following API rule to the List/Search and View:

```markdown
@request.auth.id != ''
```

![](../../assets/web_rtc_3_zhpjwks4he.png)

After the collection is created add 2 records for each of the following values for the url:

```markdown
stun:stun1.l.google.com:19302
stun:stun2.l.google.com:19302
```

![](../../assets/web_rtc_4_u30xyj67qq.png)

#### calls 

Create a new collection named `calls` with the following columns:

Column Name

Column Type

Column Settings

user\_id

Relation

Non empty, `users`, Cascade delete is `true`

offer

JSON

 

answer

JSON

 

![](../../assets/web_rtc_5_3x9zuluckq.png)

it is also possible to limit the user to one call each by setting the Unique constraint on the `user_id` column.

![](../../assets/web_rtc_6_epid0nfuym.png)

Add the following API rule to all of the methods:

```markdown
@request.auth.id != ''
```

![](../../assets/web_rtc_7_6pyvjpk8jx.png)

#### offer\_candidates 

Create a new collection named `offer_candidates` with the following columns:

Column Name

Column Type

Column Settings

call\_id

Relation

Non empty, `calls`, Cascade delete is `true`

data

JSON

 

![](../../assets/web_rtc_8_c1ecscf02n.png)

Add the following API rule to all of the methods:

```markdown
@request.auth.id != ''
```

#### answer\_candidates 

Create a new collection named `answer_candidates` with the following columns:

Column Name

Column Type

Column Settings

call\_id

Relation

Non empty, `calls`, Cascade delete is `true`

data

JSON

 

![](../../assets/web_rtc_9_8urvznju5m.png)

Add the following API rule to all of the methods:

```markdown
@request.auth.id != ''
```

![](../../assets/web_rtc_10_rj34gi9mwc.png)

#### users 

For demo purposes we will not be including an auth form for the user, but to make the example simple create a new user with the same login info for the admin.

![](../../assets/web_rtc_11_a359eqpxdy.png)

![](../../assets/web_rtc_12_m6rwgbmoum.png)

Setting up the client 
----------------------

Navigate to the directory and run the following commands to get started:

 
```markdown
npm init -y
npm i -D vite
npm i pocketbase
```

Update the `package.json` to be the following:

```javascript
{
  "name": "webrtc-pocketbase-demo",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "serve": "vite preview"
  },
  "devDependencies": {
    "vite": "^4.5.0"
  },
  "dependencies": {
    "pocketbase": "^0.19.0"
  }
}
```

If you are in a Git repository update/create the `.gitignore` to have the following:

```markdown
node_modules
.DS_Store
dist
dist-ssr
*.local
.pb
.env
```

### HTML 

Create `index.html` and add the following:

```markup
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WebRTC Pocketbase Demo</title>
  </head>
  <body>
    <h2>1. Start your Webcam</h2>
    <div class="videos">
      <span>
        <h3>Local Stream</h3>
        <video id="webcamVideo" autoplay playsinline></video>
      </span>
      <span>
        <h3>Remote Stream</h3>
        <video id="remoteVideo" autoplay playsinline></video>
      </span>
    </div>
    <button id="webcamButton">Start webcam</button>
    <h2>2. Create a new Call</h2>
    <button id="callButton" disabled>Create Call (offer)</button>``
    <h2>3. Join a Call</h2>
    <p>Answer the call from a different browser window or device</p>
    <input id="callInput" />
    <button id="answerButton" disabled>Answer</button>
    <h2>4. Hangup</h2>
    <button id="hangupButton" disabled>Hangup</button>
    <script type="module" src="/main.js"></script>
  </body>
</html>
```

### CSS 

Create `style.css` and add the following:

```css
body {
  --text-color: #2c3e50;
  --video-background-color: #2c3e50;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--text-color);
  margin: 80px 10px;
}

video {
  width: 40vw;
  height: 30vw;
  margin: 2rem;
  background: var(--video-background-color);
}

.videos {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

### JS 

Create `main.js` and add the following:

```javascript
import "./style.css";

import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const calls = pb.collection("calls");
const offerCandidates = pb.collection("offer_candidates");
const answerCandidates = pb.collection("answer_candidates");

const webcamButton = document.getElementById("webcamButton");
const webcamVideo = document.getElementById("webcamVideo");
const callButton = document.getElementById("callButton");
const callInput = document.getElementById("callInput");
const answerButton = document.getElementById("answerButton");
const remoteVideo = document.getElementById("remoteVideo");
const hangupButton = document.getElementById("hangupButton");

const auth = await pb
  .collection("users")
  .authWithPassword(
    import.meta.env.VITE_POCKETBASE_USERNAME,
    import.meta.env.VITE_POCKETBASE_PASSWORD
  );
const userId = auth.record.id;
const iceServers = await pb.collection("ice_servers").getFullList();

const servers = {
  iceServers: [{ urls: iceServers.map((e) => e.url) }],
  iceCandidatePoolSize: 10,
};

const pc = new RTCPeerConnection(servers);
let localStream = null;
let remoteStream = null;

webcamButton.onclick = async () => {
  localStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });
  remoteStream = new MediaStream();

  localStream.getTracks().forEach((track) => {
    pc.addTrack(track, localStream);
  });

  pc.ontrack = (event) => {
    const stream = event.streams[0];
    stream.getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };

  webcamVideo.srcObject = localStream;
  remoteVideo.srcObject = remoteStream;

  callButton.disabled = false;
  answerButton.disabled = false;
  webcamButton.disabled = true;
};

callButton.onclick = async () => {
  const call = await calls.create({
    user_id: userId,
  });
  const callId = call.id;

  callInput.value = callId;

  pc.onicecandidate = (event) => {
    event.candidate &&
      offerCandidates.create({
        call_id: callId,
        data: event.candidate.toJSON(),
      });
  };

  const offerDescription = await pc.createOffer();
  await pc.setLocalDescription(offerDescription);

  const offer = {
    sdp: offerDescription.sdp,
    type: offerDescription.type,
  };

  await calls.update(callId, { offer });

  calls.subscribe(callId, (e) => {
    const data = e.record;
    if (!pc.currentRemoteDescription && data?.answer) {
      const answerDescription = new RTCSessionDescription(data.answer);
      pc.setRemoteDescription(answerDescription);
    }
  });

  answerCandidates.subscribe("*", (e) => {
    if (e.action === "create") {
      if (e.record?.call_id === callId) {
        const data = e.record.data;
        const candidate = new RTCIceCandidate(data);
        pc.addIceCandidate(candidate);
      }
    }
  });

  hangupButton.disabled = false;
};

answerButton.onclick = async () => {
  const callId = callInput.value;
  const call = await calls.getOne(callId);

  pc.onicecandidate = (event) => {
    event.candidate &&
      answerCandidates.create({
        call_id: call.id,
        data: event.candidate.toJSON(),
      });
  };

  const offerDescription = call.offer;
  const remoteDescription = new RTCSessionDescription(offerDescription);
  await pc.setRemoteDescription(remoteDescription);

  const answerDescription = await pc.createAnswer();
  await pc.setLocalDescription(answerDescription);

  const answer = {
    type: answerDescription.type,
    sdp: answerDescription.sdp,
  };

  await calls.update(call.id, { answer });

  offerCandidates.subscribe("*", async (e) => {
    if (e.record?.call_id === call.id) {
      if (e.action === "create") {
        const data = e.record.data;
        const candidate = new RTCIceCandidate(data);
        await pc.addIceCandidate(candidate);
      } else if (e.action === "delete") {
        await offerCandidates.unsubscribe();
        window.location.reload();
      }
    }
  });
};

hangupButton.onclick = async () => {
  const callId = callInput.value;
  pc.close();
  await calls.unsubscribe(callId);
  await calls.delete(callId);
  await answerCandidates.unsubscribe();
  window.location.reload();
};
```

Running the example 
--------------------

Run the following command to start the client (make sure the server is running in a separate terminal client):

```markdown
npm run dev
```

If successful you should see the following:

```markdown
  VITE v4.5.0  ready in 547 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

Open up two browsers with the same url:

![](../../assets/web_rtc_13_9b6nwkhq3i.png)

In the first window click `Start webcam` and then `Create Call (offer)`.

This will ask for camera permission and then generate a new id and add it to the `Join a Call` text field.

![](../../assets/web_rtc_14_rat2efjyy3.png)

Copy the new id and paste it in the second window field and click `Start webcam`.

![](../../assets/web_rtc_15_438n00ql98.png)

Then click `Hangup` when you are done with the call 🎉.

Conclusion 
-----------

You can find the source code [here](https://github.com/rodydavis/webrtc-pocketbase-demo).
