import { HfInference } from "@huggingface/inference";

const client = new HfInference("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");

export async function getChatResponse(prompt: string) {
  let out = "";

  const stream = client.chatCompletionStream({
    model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
    messages: [{ role: "user", content: prompt }],
    max_tokens: 500,
  });

  for await (const chunk of stream) {
    if (chunk.choices && chunk.choices.length > 0) {
      const newContent = chunk.choices[0].delta.content;
      out += newContent;
    }
  }

  return out;
}
