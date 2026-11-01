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
  lulXvRH8Lz0qqn49WFnbuwEZurxcdzM9SgnBvLx3VLzmrbq8U3n7vb5LqbwYXV67KXcfvT9YBr28ICI9mDWxuYP4wLuHpmy8PWAePcZqk72qY5U7thSQvXFyvzyop4+7Ci1rvBxg5jyXxcS84PaEvS1dAb1GKEY+bhVEvNU/CDtuFQS9+TFmvCjUsz32fK091lgCPc3O4j2OkEE9DfwovGe6VzzFjPA7VaLsPP64fTwotVc9lMDmuyhFKz1ZMJG9G2OnPOVGUT22gNC84xfePOxMITzulw89N6U8vMl0aLs17He7+ItZPDVCPz2fIZw8QBQMPbth2zsbE4I9ls8yPWLbIrxSuQm8g6W6uFyq0jzUf9Y7TkeAvASNGbvBGfy8uB4FPaX4+DzncZi8Rpr4vPqAwL1agoy7iumCvZD1VLxZbJO8s12hPJMaWjzyKBU8vFetPK702rsZkL285Z0DPXbeBr0O2FU8wf/WPMZPYz2QT0i9VG9NPRDoDL0mNp+88N+8u1n3Dz2NRn69Ub21PF/QAr0JN5k8/kN6vKtdkzw9uSa7I2sNPegUZLz85Kg8uXGLvFteObz6CHy8i/2FvvnWB7zONcw7FAmmPF/PZz6Br4i9lFD6PM2xvDxCBQc9g25vvVc+qz29NAU9eM+BvJ/IEzuASpU86ZhzPMglDrttGlu9qb0IvVRW0zzQ8ry8e6LrOzmbjji+MBm8f7zXvILiRzxaS0G9I6IYO4DXJ73iAHo8s80NvCAkizwkuJE8Nuk2vJ/mZD02j0M8Q/6ZvTC6PLyU9/E8B5lkvavRqzwtJcu82WCBvcUACb0eboe7af6YPeEKqLwO2ms9TfglPKkzN73YSFI9B3jSu0rOST1/Mds8O+KQPMZuX723mYq8SnzuvGVSw7x4Rhs9qknwu8cu0bxb6qC8K/aXPETC9zvjN0W9s0VSPa/sgrzSqpY7xXWMPDuNtLuOO6U86rBCvGstTDzl1M48BvTCvOvJfLwB+6i9i/sPPML2Uz29Uha9e0/lO/je3zmD/Ow8+FPjvEHVaLwQrZW8xEAXvbA7XT2Bs5S7ldX0PCSbqzsKndc9vOfAvK7xGb17TKQ8YmafvLqiFDrhRd+80J3APZLMajxmMAa9chWLvD+Rpzwk0yE8nFIevft4KD3Q8dG7XD4SvOhNBT0rhms90uJMPUtcBz3EJ506S1cwvCef3j0t7VQ8pwaavJQXGTuvtIy7f00Wva3BezwEyNC8flNYPZj75LoRxs+8V+0aPd7jzDwvw389fGKduzbJjzxAapM8+cCOvH/1uDwZOCA9VvIxPBO2nzupoCI9OrJyvNRH4Dwk8Ae8EaoUPceb/Lw334g8fjfduw9FgT2Qos48PdQ2PLCrCb0BbSu9rtSzOgsL7jx9JRC8o0AfO+3YiDwgmKM829/ZO27c4jyXx5o8ycwFvf8/Dr1zDp68tJHruyi2gjwO2NU7/WbiPMjT8jxVpMI6TgkIvNiDib2LVJi8vtnmOw+bCD06IXS9z9zDPCxHyDno20I95NyGPZF+Oz3hJ4489uw5vLB1aT2NCpy7UyUKvXxHDTwr37O8lXxsvNtq1jwz3IA8tRdRPBf1yTz4/Rs8SU07PC9sDT0Dl8e7klhSPSOhrTyF0aw7FogePENUYbzvGjS9uVEkvR8UlDtvnmq82o2+vL1tJjyxMwW8E9bGu7lSr71fQgW95zqNu7RxRLylSpS8iUWMvPimKT2V9LC8AaWhvW0cMbxKz/S7Mc30PPFog73HK1C9qdsZvZFiAD1augK8yR22PL4WdDz67Wu6lWHcPJiGYb2twBC+Jo3Ru8Jrl7tPIgK9/BlevMLZrTw4u7U85zSLPMU56jyu78M8zjVMush4FLw/Gzk8n1ZRPDBIOj3Qta88ZHUrvMMtnzyrenk8MxkOvTuPCj1IN0I8fnEpPBJqhjxKl348h8LnPHQMCD0xCoK804QtvShhJr0dAdw7wJMWPcvVD7zrxOU6ie9EPT+oi7v0/Ok8CAF5PEg1LD2h98a65gIXPDcWlLw2H1e88WWiuji7NTvD19e7p+kzPADiLjwWUCg9eUBZuwFRYD5mMbG8kYG8vFEWvrt0RhS9/FVAvcxBkL269Zq8vVMBvZjBmDxGlgw9x/baPAt+W71sQIQ8pUoUPNWytTuRRZo6vTpHvU56X7x7hvC8PkLNOpG2MT0wDq68aOvgOfT86TycFry7K6NRvfOQqTxz2748+3WnvJmBSjwOhyU85PmMvKw6az1I+N68qKpQu/q5Yb3H8q67c5xbPBjNyrzspam8ZD4gvUAUTDzOqYQ9+n1/PMvVjzyl2qe8UP6uvf34y7wvT+e7XHPHPGSQOzsMyx+8eZQKvTqQ9TwWa7i6MzdfvBoZZLxXWga94ukVPAEUo7wIdZE7jNmSPC+KHr1oIJa8iL67PCxnbzsHCCa9z/SSPI3vC7w1Q6o7ggCZvNIYrTygxdI8aEFovRIu5LwawrG8x9azvNGtVzu0OU69PuhZvBPWRjzWcBE8Jm+APMH+Kz0ZA2s7uAa2O1QbnLqmm0S8aXHGO0kTbztwsaK8xSCwPP+uT7sTnHq8MQgsO/Imv7xyxcU89wRJvdNrMzxA9vo8qfbpuuW36DsPnLM82V2guzCbgDyo5Ye8/1lzPFk0HTxINAE9a2PsPM0/+rtl+5A8oYDtuwRZz7wPttg8zZQWvkceCDws9AE9IqpwPDZcZDwPX2Y9JHuEu9fZEDxor768cM/zPHS2gDrhfdU8sRkgvQmKn7zEB/a8twn3O3dllzzjqFw7SE8RvJyjDrz+SJG8MugEuuM1r7v2z1O84A9/PRRfbbuTqu28oI1cvbGI4byxwNc8Ug8RvbvRx7uDTgi9QwNxPWq9Hz0Np8w848atvNXNBb3a5ds8zjeiPLTk8bthG/E7D7ZYPbd547xCQD67095gvFHbBjxtHie+3LsGPUwaI71znBs9IGPuvHoZxTvA0KO8M6MfvSWxpDvK4j69Oh8evaosijw7VT684Qm9vFpjUL09Q7i8rKgBPdZwkbw1zxG9KSOuPIU+GD0STou8aJNDPB2uVbyNDDI9knj5PDhoLzxRgv473NWrO8H+6zv68Ky8h8PSO0Jg5bvwbA88PX7vvJuq+zxGfKe8niiJPMAFWTxXlmg88uxyvDoCODwpCQk96NsCPMS1WjzP21i7t9AVuzQr27w1l5s8GlFaPJMdW72Muta8PjzLvI+JFDy+aE+9QPflu560MD1v2DY8vhLIPF8mCjtxPYq8OleUO3TT5jzxgZ28xjCnvDAR77ypojg9JET5PA6CDrxbXU49/P5NvTCCRj0omZw7cF6cOzs2Aj1O7CG8nBRmvPMEwrzURQq9CJTNvLh2Irxm3NS6WtfovH8XtrwsZZk8N28cvRMsjrzvcSa8YVGRvDRlJzwCZRM9vydWvHPWpzvkFQg8X3kQPco3Wzwb8eS8bTzYu7ltXzxNE7a888kKvRfWDTzr4yE9EY1uPOOOtzw9uaY6RluVvKQXNTwX7wc9dJkaPEPjiTqp9mk8ZTbIO1XejjwaahS9b/CFPDYjg7teZAI9TG1pPQQCnTy/SdM6a348vTleATy0PuU6Tg6fPFH2lrvUmma8X0UGPdPZSbu2hWc9LEkePF+bDT2LqAm8Crq9u0Wbg738G7Q8chm3PLSwpzyRnTc8O98PvfYItTyVEKw82qw6PekMjDvE6g86oihQPD4Htj20HdM8oKeBPOnvJTpGeSY9qIopvET3rLz6CtK8pUqUPHGNz7xv8ls90GE+vO1KC70fvDY9JhqkO83OIjym1ZC6NnaJPMb8HD2LGze9raMqvBb2NLyaRD06KEdBPaUyxbumYw69nS/2vKCkQLzbTlu9DqK1u/8hfTzRPIC8ZvgvPmgDMD1Wuju9ofKvvLnetrwEkBq9EvbtPKtaUrwIPRu97bq3u3tPZbvWVQG9raZrPDdtRjwFM6Y6datnvXLChLx+kCW9WtWSu/VmVDsRAQe74lkCPHPZ6LwleS48ZykZvQhb7DtDdTM93iHFuPq4trzLEp087zsGvKcERLtoQai8OswXPJZDCzuaeEc9
related:
  - astro/ssr-pocketbase.md
  - flutter/ssr-rfw.md
  - web/file-based-routing.md
  - flutter/lit-interop.md
  - flutter/host-rest-api.md
last_updated_metadata: '2026-11-01T02:28:42.931Z'
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
