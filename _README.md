## Endpoints:

### Grab a random joke!

[https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke](https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke)

### Grab ten random jokes!

[https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten](https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten)



## How I collected these jokes

How did the jokes get collected?

I have some pretty funny friends. And of course, I did a lot of googling.
Many of them are also open-source contributed!

### Got a good joke?

Directions to submit:

Submit a Pull Request, with your joke added to the jokes/index.json file. Make sure the joke is in this format:

```javascript
{
  "id": <one higher than the previous joke>,
  "type": "your joke's type",
  "setup": "your joke's setup line",
  "punchline": "your joke's punchline"
}
```
