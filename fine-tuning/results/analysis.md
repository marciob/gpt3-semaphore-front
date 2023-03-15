# Model analytics

## - dataset: _Data1.jsonl_

Settings:

- 101 prompts/completions based on Semaphore documentation
- based model: davinci
- Temperature: 0
- max_tokens: 900
- deployed model name: "davinci:ft-personal:first-model-test-100examples-2023-03-02-09-33-14"
- based prompt:

#### results:

**Q: What is Semaphore and what cases it should be used for?**
A: Semaphore is a privacy protocol that enables anonymous signaling on Ethereum. It can be used for applications like whistleblowing, voting, and proving identity without revealing the user's identity.

**Q: How to generate a semaphore id?**
To generate a semaphore id, you can use the generateId() function from the @semaphore-protocol/protocol library. Here is an example: `import { generateId } from "@semaphore-protocol/protocol" const id = generateId()` This will generate a unique id for the user who runs the code.

**Q: What is the SemaphoreVerifier.sol contract used for?**
A: The SemaphoreVerifier.sol contract contains a function to verify Semaphore proofs.

**Q: How can I get group data from a supported network using the Semaphore CLI?**
A: To get group data from a supported network using the Semaphore CLI, you can run the following command: `semaphore get-groups --network goerli` This will output the groups available on the Goerli network.

**Q: What is the Trusted Setup Ceremony, and how was it used in the development of Semaphore?**
A: The Trusted Setup Ceremony is a process in which a group of participants generate the initial parameters used in a cryptographic system, with the assumption that none of them are malicious. In the development of Semaphore, a group of 10 participants generated the initial parameters used in the system.

## - dataset: _Data2.jsonl_

Settings:

- 464 prompts/completions based on data1.jsonl, generating new versions of those same 101 examples
- based model: davinci
- Temperature: 0
- - max_tokens: 900
- deployed model name: "davinci:ft-personal:data2-2023-03-15-05-24-05"

#### results:

**Q: What is Semaphore and what cases it should be used for?**
A: Semaphore is a zero-knowledge protocol that allows Ethereum users to prove their membership in a group and send signals anonymously, without revealing their original identity. It can be used by individuals who wish to join a group without disclosing their identity, as well as by groups who wish to verify the membership of a user without knowing their original identity.

**Q: How to generate a semaphore id?**
A: To generate a semaphore id, use the Semaphore.createId() method.

**Q: What is the SemaphoreVerifier.sol contract used for?**
A: The SemaphoreVerifier.sol contract is used for verifying Semaphore proofs.

**Q: How can I get group data from a supported network using the Semaphore CLI?**
A: To get group data from a supported network using the Semaphore CLI, use the command `semaphore get-groups --network goerli` (or the name of the network you prefer). This command will return information about the groups that are available on the specified network.

**Q: What is the Trusted Setup Ceremony, and how was it used in the development of Semaphore?**
A: The Trusted Setup Ceremony is a process in which a group of participants generate the initial parameters used in a cryptographic system, with the assumption that none of them are malicious. In the development of Semaphore, a Trusted Setup Ceremony was used to generate the secure parameters for the zero-knowledge proofs.
