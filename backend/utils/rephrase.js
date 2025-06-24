function rephraseWithTone(text, tone) {
    const lowerText = text.toLowerCase().trim();

    const toneMap = {
        formal: {
            phrases: [
                { match: "can you", replace: "could you please" },
                { match: "please", replace: "kindly" },
                { match: "soon", replace: "at your earliest convenience" }
            ],
            words: {
                "task": "assignment",
                "help": "assist",
                "fix": "resolve"
            }
        },
        friendly: {
            phrases: [
                { match: "can you", replace: "hey! could you" },
                { match: "soon", replace: "when you get a chance" }
            ],
            words: {
                "task": "thing",
                "help": "give me a hand",
                "fix": "take a look at"
            }
        },
        casual: {
            phrases: [
                { match: "can you", replace: "mind just" },
                { match: "soon", replace: "real quick" }
            ],
            words: {
                "task": "stuff",
                "help": "help out",
                "fix": "sort it"
            }
        },
        sarcastic: {
            intro: "Of course! I’ve been waiting my whole life just to ",
            words: {
                "task": "little world-ending problem",
                "help": "perform miracles",
                "fix": "wave your magic wand over"
            }
        }
    };

    const rules = toneMap[tone.toLowerCase()];
    if (!rules) return text;

    // Special handling for sarcastic tone
    if (tone.toLowerCase() === "sarcastic" && lowerText.startsWith("can you")) {
        const restOfText = text.slice(8).trim(); // remove "can you"
        const sarcasticResponse = `${rules.intro}${restOfText.replace(/[?!.]*$/, "")}!`;
        return sarcasticResponse;
    }

    // General tone handling (formal, friendly, casual)
    let rephrased = text;

    // Apply phrase-based replacements
    if (rules.phrases) {
        rules.phrases.forEach(rule => {
            rephrased = rephrased.replace(new RegExp(`${rule.match}(?=[\\s\\?\\.!]|$)`, "gi"), rule.replace);
        });
    }

    // Apply word-based substitutions
    if (rules.words) {
        Object.keys(rules.words).forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, "gi");
            rephrased = rephrased.replace(regex, rules.words[word]);
        });
    }

    // Capitalize first letter
    return rephrased.charAt(0).toUpperCase() + rephrased.slice(1);
}

module.exports = { rephraseWithTone };
