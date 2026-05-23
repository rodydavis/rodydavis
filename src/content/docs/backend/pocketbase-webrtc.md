---
title: How to Build a WebRTC Signal Server with PocketBase
date: '2025-01-18 22:32:05.045Z'
draft: false
tags:
  - firebase
  - html
  - css
  - sqlite
  - video
  - pocketbase
  - webrtc
  - javascript
  - github
  - web
  - google
summary: >-
  This guide details how to construct a WebRTC signal server using PocketBase,
  demonstrating real-time communication capabilities powered by SQLite and
  Server-Sent Events (SSE).
embedding: >-
  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
related:
  - dart/export-sqlite.md
  - astro/ssr-pocketbase.md
  - flutter/ssr-rfw.md
  - lit/vscode-extension.md
  - backend/pocketbase-cloudrun.md
last_updated_metadata: '2026-05-23T00:09:01.495Z'
---

# How to Build a WebRTC Signal Server with PocketBase

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

![](../../../assets/web_rtc_1_sxepcsqwya.png)

### Creating the collections 

#### ice\_servers 

Create a new collection named `ice_servers` with the following columns:

Column Name

Column Type

url

Plain text

![](../../../assets/web_rtc_2_18muflf746.png)

Add the following API rule to the List/Search and View:

```markdown
@request.auth.id != ''
```

![](../../../assets/web_rtc_3_zhpjwks4he.png)

After the collection is created add 2 records for each of the following values for the url:

```markdown
stun:stun1.l.google.com:19302
stun:stun2.l.google.com:19302
```

![](../../../assets/web_rtc_4_u30xyj67qq.png)

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

 

![](../../../assets/web_rtc_5_3x9zuluckq.png)

it is also possible to limit the user to one call each by setting the Unique constraint on the `user_id` column.

![](../../../assets/web_rtc_6_epid0nfuym.png)

Add the following API rule to all of the methods:

```markdown
@request.auth.id != ''
```

![](../../../assets/web_rtc_7_6pyvjpk8jx.png)

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

 

![](../../../assets/web_rtc_8_c1ecscf02n.png)

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

 

![](../../../assets/web_rtc_9_8urvznju5m.png)

Add the following API rule to all of the methods:

```markdown
@request.auth.id != ''
```

![](../../../assets/web_rtc_10_rj34gi9mwc.png)

#### users 

For demo purposes we will not be including an auth form for the user, but to make the example simple create a new user with the same login info for the admin.

![](../../../assets/web_rtc_11_a359eqpxdy.png)

![](../../../assets/web_rtc_12_m6rwgbmoum.png)

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

![](../../../assets/web_rtc_13_9b6nwkhq3i.png)

In the first window click `Start webcam` and then `Create Call (offer)`.

This will ask for camera permission and then generate a new id and add it to the `Join a Call` text field.

![](../../../assets/web_rtc_14_rat2efjyy3.png)

Copy the new id and paste it in the second window field and click `Start webcam`.

![](../../../assets/web_rtc_15_438n00ql98.png)

Then click `Hangup` when you are done with the call 🎉.

Conclusion 
-----------

You can find the source code [here](https://github.com/rodydavis/webrtc-pocketbase-demo).
