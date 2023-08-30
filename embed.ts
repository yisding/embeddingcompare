// Get OpenAI embedding for a file
// npx tsx embed.ts <file>

import fs from "node:fs/promises";
import process from "node:process";
import OpenAI from "openai";

(async () => {
  const args = process.argv.slice(2);
  const file = args[0];

  if (!file) {
    console.log("Usage: npx tsx embed.ts <file>");
    process.exit(1);
  }

  // Read file

  const text = await fs.readFile(file, "utf-8");

  // Get OpenAI embedding

  const openai = new OpenAI();
  const model = "text-embedding-ada-002";
  const embedding = (
    await openai.embeddings.create({ input: text, model: model })
  ).data[0].embedding;
  console.dir(embedding, { maxArrayLength: null });
})();
