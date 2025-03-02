import {groq} from "../../index";

export const getGroqChatCompletion = async (messages, model) => {
    try {
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "you are a helpful assistant.",
                },
                ...messages.map(msg => ({
                    role: msg.isUser ? "user" : "assistant",
                    content: msg.text
                }))
            ],
            model: model,
            temperature: 0.5,
            max_completion_tokens: 1024,
            top_p: 1,
            stop: null,
            stream: false,
        });
        return response.choices[0].message.content;
    } catch (error) {
        console.error("Error getting chat completion:", error);
        return "Sorry, I encountered an error while processing your request.";
    }
};

export const generateFitnessPrompt = (survey) => {
    let prompt = "Based on the following survey answers, create a personalized fitness recommendation:\n";

    for (const [question, answer] of Object.entries(survey)) {
        prompt += `${question} ${answer}\n`;
    }

    prompt += "Please provide a workout plan tailored to these answers.";
    return prompt;
}
