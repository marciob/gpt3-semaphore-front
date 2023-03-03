recomendations from OpenAI for how this specific dataset should be used:

After you’ve fine-tuned a model, remember that your prompt has to end with the indicator string `?\n\n###\n\n` for the model to start generating completions, rather than continuing with the prompt. Make sure to include `stop=["\nEND"]` so that the generated texts ends at the expected place.
