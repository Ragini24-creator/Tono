function rephraseWithTone(text, tone) {
    const originalText = text.trim();
    const lowerText = originalText.toLowerCase();

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
                "fix": "resolve",
                "need": "require"
            }
        },
        friendly: {
            phrases: [
                { match: "can you", replace: "hey, could you" },
                { match: "please", replace: "pretty please" },
                { match: "soon", replace: "whenever you're free" }
            ],
            words: {
                "task": "thing",
                "help": "give me a hand",
                "fix": "take a look at",
                "need": "could use"
            }
        },
        casual: {
            phrases: [
                { match: "can you", replace: "mind just" },
                { match: "please", replace: "plz" },
                { match: "soon", replace: "real quick" }
            ],
            words: {
                "task": "stuff",
                "help": "help out",
                "fix": "sort it",
                "need": "need"
            }
        },
        sarcastic: {
            intro: "Oh sure, because I have *nothing* better to do than to",
            words: {
                "task": "life-threatening situation",
                "help": "summon divine powers",
                "fix": "magically solve everything"
            }
        },
        neutral: {
            phrases: [],
            words: {}
        }
    };

    const rules = toneMap[tone.toLowerCase()] || toneMap["neutral"];

    // Sarcastic: humor and exaggeration
    if (tone.toLowerCase() === "sarcastic" && lowerText.startsWith("can you")) {
        const rest = originalText.slice(8).trim();
        const sarcasticText = rest.replace(/[?!.]*$/, "");
        return `${rules.intro} ${sarcasticText}? 😂`;
    }

    // Phrase substitutions
    let rephrased = originalText;
    if (rules.phrases) {
        rules.phrases.forEach(({ match, replace }) => {
            rephrased = rephrased.replace(
                new RegExp(`\\b${match}\\b`, "gi"),
                replace
            );
        });
    }

    // Word substitutions
    if (rules.words) {
        Object.keys(rules.words).forEach(word => {
            const regex = new RegExp(`\\b${word}\\b`, "gi");
            rephrased = rephrased.replace(regex, rules.words[word]);
        });
    }

    // Ensure sentence ends with punctuation
    if (!/[.?!]$/.test(rephrased.trim())) {
        rephrased += ".";
    }

    // Capitalize first letter
    return rephrased.charAt(0).toUpperCase() + rephrased.slice(1);
}

module.exports = { rephraseWithTone };
