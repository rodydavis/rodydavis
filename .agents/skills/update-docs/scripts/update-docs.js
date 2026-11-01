import { runIndexPipeline } from "../../../../scripts/index-chunks.ts";

const args = process.argv.slice(2);
runIndexPipeline({
  force: args.includes("--force"),
  updateTags: args.includes("--tags"),
}).catch((err) => {
  console.error("[update-docs] Error:", err);
  process.exit(1);
});
