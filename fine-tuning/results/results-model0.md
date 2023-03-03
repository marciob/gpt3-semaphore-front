### Impressions, learnings and thoughs while fine-tuning the model

</br>
#### version 0
</br>
model name:
davinci:ft-personal:first-model-test-100examples-2023-03-02-09-33-14
</br>
Impressions:

</br>

- **the model seems better for short and wide questions, such as "What is Semaphore?" and it's not precise for more specifc questions, mainly when related to code, such as "How do I create a new Semaphore project using the Semaphore CLI and Hardhat?"**

example:</br>

> q: what is Semaphore?</br>
> a: Semaphore is a zero-knowledge protocol that allows Ethereum users to prove their membership of a group and send signals anonymously.</br></br>
> a: What is a Semaphore group? </br>
> q: A Semaphore group is a collection of identity commitments of group members.</br></br>
> q: How do I create a new Semaphore project using the Semaphore CLI and Hardhat?</br>
> a: To create a new Semaphore project using the Semaphore CLI and Hardhat, first navigate to the project directory where you want to create the new project and run the following command: `npx @semaphore-protocol/cli@latest create <project-name>@<semaphore-protocol-version>` This will create a new Semaphore project called "my-project" (without the quotes) and set it up with the Semaphore Protocol v0.3.0.

</br>

- **The responses are not consistent. Sometimes it provides almost correct answers, while at other times it does not.**</br>

example of a nearly correct answer:</br>

> a: How do I create a new Semaphore project using the Semaphore CLI and Hardhat? </br>
> q: To create a new Semaphore project using the Semaphore CLI and Hardhat, first navigate to the directory where you want to create the new project, and then run the following command: `npm run new @semaphore-protocol/core @semaphore-protocol/ext ` This will create a new Semaphore project at the specified directory, with some basic setup already done.</br>

example of an incorrect answer for the same question (using the same prompt):</br>

> a: How do I create a new Semaphore project using the Semaphore CLI and Hardhat? </br>
> To create a new Semaphore project using the Semaphore CLI and Hardhat, run the following command: `npm run inception --group=development --no-coverage --no-trees --no-semaphore --no-metaphore --no-dapp --no-mrp --no-semaphore-ext`

</br>

- **passing additional context or examples to the prompt doesn't seem to significantly improve the answers.** </br>

</br>

(examples to be added)

As reference, Openai documentation warns about the unnecessary use of examples: "Once a model has been fine-tuned, you won't need to provide examples in the prompt anymore. [(doc)](https://platform.openai.com/docs/guides/fine-tuning/fine-tuning)"

</br>

- **the model is hallucinating a lot, creating information out of the blue when answering some specific questions, mainly when the bot doesn't have that information, but sometimes even when the information is present in the dataset used for fine-tuning.**

</br>

(examples to be added)

Tested with prompts exemplifying to not hallucinate when the model doesn't have the information, but the halluciations are still present.</br>

</br>

- **despite in the fine-tune data has been included unique informations, like the contract addresses for Semaphore, the model doesn't answer the correct specific information, and hallucinates answering a different contract addresses.**

example:</br>

> q: What is the contract address for Semaphore.sol on Goerli?</br>
> a: The contract address for Semaphore.sol on Goerli is 0xB6689f566C184325C8d1D79e0CeAD77B79B2A0.

</br>
That is wrong, the correc contract address for Semaphore.sol on Goerli is 0x89490c95eD199D980Cdb4FF8Bac9977EDb41A7E7.

</br>
</br>
</br>

### early possible solutions or paths to explore

</br>

- adding more data to the fine-tune model
- trying variations of the settings for the fine-tune model, like different temperatures
- trying different base models, like ada
- trying different additional context to the prompt
- exploring embeddings alone or in a combination with the fine-tune model
