import OpenAI from "openai";
const openai = new OpenAI({apiKey: process.env.CHAGPT_KEY});

export default async function handler(req, res) {

        res.setHeader('Access-Control-Allow-Credentials', true)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
        res.setHeader(
          'Access-Control-Allow-Headers',
          'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
        )


        if (req.method === 'OPTIONS') {
            res.status(200).end()
            return
          }

       res.json("hello world");

/*
    const search = 'complete this sentence - ' + req.query.search;
    const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      { role: "user", content: search },
    ],
    model: "gpt-4-1106-preview",
    response_format: { type: "json_object" },
    });
      res.json(completion.choices[0].message.content);
      console.log(completion.choices[0].message.content);
*/
}