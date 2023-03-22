## Explaining files / tests

| **File**    | **What is that**                                                                                                                                                                            | **Observations** |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| data1.jsonl | Data related to Semaphore, it's a mix of some generated prompts with documentation's information plus some content manually created. Chatgpt 3.5 was used to help to generat some of those. |                  |
| data2.jsonl | It's similar as data1.json, but for each example it was generated 4 more, written in different way, using Chatgpt for that.                                                                 |                  |
| data3.jsonl | Bunch of prompt/completions extracted from messages received on Discord/Telegram, in a .jsonl format required for fine-tuning. that.                                                        |                  |

<br>

recomendations from OpenAI for how this specific dataset should be used:

After you’ve fine-tuned a model, remember that your prompt has to end with the indicator string `?\n\n###\n\n` for the model to start generating completions, rather than continuing with the prompt. Make sure to include `stop=["\nEND"]` so that the generated texts ends at the expected place.

<br>
