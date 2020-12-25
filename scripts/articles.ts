import { exec, ExecException } from 'child_process';

export async function run(user: string, articles: string[]) {
  for (const path of articles) {
    sh(
      `mediumexporter https://medium.com/@${user}/${path} > medium/${path}.md`,
    );
  }
}

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @return {Object} { stdout: String, stderr: String }
 */
async function sh(cmd: string): Promise<any> {
  return new Promise(function (resolve, reject) {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout, stderr });
      }
    });
  });
}

run('rody.davis.jr', [
  'how-to-send-push-notifications-on-flutter-web-fcm-b3e64f1e2b76',
  'creating-your-first-flutter-project-58fd0312204b',
  'how-to-host-your-podcast-for-free-on-github-pages-4d701a6704ac',
  'deep-linking-for-flutter-web-a34c2c181df0',
  'displaying-html-in-flutter-8da44773764',
  'flutter-cheat-sheet-terminal-43893c0b72a5',
  'host-your-flutter-project-as-a-rest-api-751b8301f71f',
  'using-fastlane-in-flutter-and-ci-550cd52f0dfc',
  'how-to-build-a-native-cross-platform-project-with-flutter-372b9e4b504f',
  'launching-space-curiosity-96036b0e9f3',
]);
