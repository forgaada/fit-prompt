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
            max_completion_tokens: 2024,
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
    let prompt = "Based on the following personalized fitness profile, please create a tailored workout and nutrition plan:\n\n";

    for (const [question, answer] of Object.entries(survey)) {
        const formattedQuestion = question.charAt(0).toUpperCase() + question.slice(1);
        prompt += `${formattedQuestion}: ${answer}\n`;
    }

    prompt += "\nPlease provide a comprehensive fitness recommendation including:\n";
    prompt += "1. A weekly workout schedule\n";
    prompt += "2. Specific exercises for each workout session\n";
    prompt += "3. Nutrition guidelines and meal suggestions\n";
    prompt += "4. Tips for staying motivated and tracking progress\n";
    prompt += "5. Any necessary precautions based on the individual's profile\n";
    prompt += "\nEnsure the plan is tailored to the individual's goals, fitness level, and personal circumstances.";

    return prompt;
}
