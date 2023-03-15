// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { configuration } from "../utils/constants";
import { OpenAIApi } from "openai";
import { initial_prompt, final_prompt } from "../utils/my_prompt";

type Data = {
  result: any;
};

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { input } = req.body;

  // using model from data1.jsonl
  // const response = await openai.createCompletion({
  //   model:
  //     "davinci:ft-personal:first-model-test-100examples-2023-03-02-09-33-14",
  //   prompt: `${initial_prompt} ${input} ${final_prompt}`,
  //   max_tokens: 900,
  //   temperature: 0,
  //   // top_p: 1,
  //   // n: 1,
  //   // stream: false,
  //   // logprobs: null,
  //   stop: ["\nEND"],
  // });

  // using model from data2.jsonl
  const response = await openai.createCompletion({
    model: "davinci:ft-personal:data2-2023-03-15-05-24-05",
    prompt: `${initial_prompt} ${input} ${final_prompt}`,
    max_tokens: 900,
    temperature: 0,
    // top_p: 1,
    // n: 1,
    // stream: false,
    // logprobs: null,
    stop: ["\nEND"],
  });

  const answer = response.data?.choices?.[0].text;

  if (answer === undefined) {
    throw new Error("No answer found");
  }

  res.status(200).json({ result: answer });
}
