# AI Vendor Red Flag Guide
### A plain-English buyer's checklist for evaluating AI tools and vendors

*From the Epiphany Dynamics Module 5 — "Evaluating AI Tools and Vendors"*

---

## Section 1: 10 Red Flags in AI Sales Pitches

What vendors say — and what it actually means.

---

**1. "Our AI is powered by proprietary technology."**
*Translation:* We built a wrapper around an existing AI model (usually OpenAI, Google, or Anthropic) and aren't telling you that. Ask directly: what foundation model powers this? If they won't answer, that's your answer.

---

**2. "It learns and improves automatically."**
*Translation:* Most hosted AI tools don't actually retrain on your data. What they usually mean is that your past conversations get stored as context — the AI remembers what you told it, but it hasn't actually "learned" anything in a technical sense. Ask exactly how personalization works: is it fine-tuning, document retrieval, or just conversation history?

---

**3. "99% accuracy."**
*Translation:* Every AI system makes mistakes — that's how they're built. An accuracy claim without context is meaningless. Ask: accurate at what specific task? Measured on what data? Tested by the vendor or by an independent party? If they can't answer all three, the number is marketing, not a specification.

---

**4. "It replaces [X] employees."**
*Translation:* Under ideal conditions, with a skilled person operating it, the tool can handle some tasks those employees do. The realistic version: it handles the routine parts of those jobs, still needs oversight, and your team needs to learn how to use it effectively. Ask what the average implementation looks like, not the best-case story.

---

**5. "Set it and forget it."**
*Translation:* There is no such thing as a "set it and forget it" AI tool. Every deployment requires setup, testing, periodic review, and course corrections when the AI produces wrong outputs. Plan for ongoing maintenance time, not just an initial launch.

---

**6. "We integrate with everything."**
*Translation:* We connect to the 15-20 most popular tools via their standard APIs. Ask for your specific integration to be demonstrated live, with your actual data. Ask what happens when the integration breaks. "Native integration" often means a one-way data push with no error handling.

---

**7. "Our AI understands your industry."**
*Translation:* The underlying AI model is general-purpose — what's industry-specific are the prompts and the curated knowledge base the vendor built on top of it. Useful, but different from a model actually trained on industry data. Ask what happens when it produces wrong industry-specific information and whether there's a human review process.

---

**8. "No technical setup required — works out of the box."**
*Translation:* The default demo works immediately. Getting the tool to actually work for your specific business — connecting your data, configuring your workflows, setting guardrails, testing edge cases — takes real work. Plan for at least one to four weeks of setup for any serious deployment.

---

**9. "ROI guarantee — 10x your output in 30 days."**
*Translation:* This is a best-case result, selected from the most successful customer in their portfolio. Ask what the average time-to-value is across all customers, not just the success stories. Ask what the onboarding timeline looks like step by step before that ROI kicks in.

---

**10. "This feature is coming in Q3."**
*Translation:* That's an aspiration, not a commitment. Roadmap slides are not contracts. If a feature is important to your decision, either get a written guarantee with a refund clause, or wait until it ships. Buying based on roadmap promises is how businesses end up paying for tools that don't yet do what they need.

---

## Section 2: 12 Questions to Ask Before You Buy

For each question, here's what a good answer looks like — and what a bad one sounds like.

---

**1. What happens to my data?**
Good answer: "Your data is not used to train the model. Here's our Data Processing Agreement." Bad answer: "We take privacy seriously." — with no specifics. Check the actual privacy policy for the phrase "may be used to improve the service" — that often means your data trains the model unless you opt out.

---

**2. What does it actually cost after the trial — and at 3x my current usage?**
Good answer: A clear pricing table with usage tiers and overage rates. Bad answer: "We'll figure out a plan that works for you." AI pricing often scales aggressively. A tool that costs $99/month at your current usage can reach $800/month if you actually rely on it.

---

**3. Can I export all my data if I leave?**
Good answer: "Yes — here's how, and here's what format it exports in." Bad answer: "Our team can help you with that process." If you can't export your data independently, you're locked in. The best vendors make this easy because they're confident you'll stay.

---

**4. What does it do when it doesn't know the answer?**
Good answer: "Here's how errors surface — the tool shows a confidence score and flags when it's uncertain." Bad answer: "It rarely gets things wrong." Every AI tool is wrong sometimes. A good vendor explains how errors are handled, not whether errors happen.

---

**5. How often does it need human oversight?**
Good answer: "For this type of task, you should review outputs before they go out — here's what that workflow looks like." Bad answer: "The AI handles it automatically — no review needed." Any vendor claiming their AI never needs a second set of eyes is not being honest with you.

---

**6. Is my data used to train the model?**
Good answer: "No — and here's the signed Data Processing Agreement that confirms it." Bad answer: "We follow all standard privacy practices." Check the Terms of Service directly. For consumer and small business AI tools, opting out of training data use is often buried in the settings — not the default.

---

**7. What does cancellation look like?**
Good answer: "Cancel anytime, 30 days notice, your data is exportable for 60 days after cancellation." Bad answer: Unclear or requires a conversation with a "customer success manager." If the cancellation path is convoluted, it's designed to keep you paying. Ask this before you start, not when you want to leave.

---

**8. Can I talk to two or three actual customers in my situation?**
Good answer: "Absolutely — here are three customers in similar businesses who opted in to speak with prospects." Bad answer: "We have these case studies on our website." Case studies are curated. Unscripted conversations with real customers are how you find out what doesn't work. If a vendor won't connect you with references, they're hiding something.

---

**9. What's your uptime track record?**
Good answer: A publicly accessible status page showing 90-plus days of uptime history. Bad answer: "We have enterprise-grade infrastructure." If the tool becomes part of your daily operations, its downtime is your downtime. No published uptime history means they're not confident you'd like what you'd see.

---

**10. What does a failed implementation look like — and how common is it?**
Good answer: "Here are the most common reasons it doesn't work and what we do differently when we recognize those patterns." Bad answer: Discomfort, deflection, or "it always works when customers follow the process." Vendors who can answer this question honestly have learned from failures — which means they've actually shipped this to real customers.

---

**11. What does onboarding actually involve, step by step?**
Good answer: A clear timeline — kickoff, data connection, configuration, testing, go-live — with realistic timelines for each stage. Bad answer: "You'll be up in minutes." Ask specifically: who does the work — you, their team, or a third-party partner? How long does it realistically take to get value for a business like yours?

---

**12. What does this cost at 10x my current usage?**
Good answer: A clear answer with specific numbers at the higher volume. Bad answer: "We have plans for businesses of all sizes." The question isn't what it costs today — it's what it costs if the tool actually works and you use it heavily. Understand the pricing ceiling before you get there.

---

## Section 3: Do You Actually Need AI?

Answer these five questions honestly before buying or building anything.

| Question | Yes | No |
|---|---|---|
| **Is the task repetitive?** You do it often, in roughly the same way each time. | AI might help | You probably just need better organization |
| **Does it involve language or text?** Writing, summarizing, answering questions, sorting documents, drafting responses. | AI might help | AI may not be the right tool for this |
| **Is good enough better than nothing?** The task is currently not done at all, or done slowly and inconsistently. | AI might help | If accuracy is critical, the cost of AI errors may exceed the benefit |
| **Do you have examples of good output?** You can describe (or show) what a correct result looks like. | AI might help | Without examples, you can't train, test, or verify the AI's work |
| **Can you verify the output?** Someone on your team can review AI results and catch mistakes before they cause problems. | AI might help | If no one can verify it, AI errors will be invisible until they cause damage |

**If you answered Yes to most of these:** AI is worth exploring. Start with a low-commitment trial on one specific task before rolling it out broadly.

**If you answered No to most of these:** You may not have an AI problem. You may have a process problem. Better workflows, clearer responsibilities, or simpler tools might solve it faster and cheaper.

**One more question to ask yourself first:** Is this task currently being done poorly because of missing technology — or because of missing time, unclear ownership, or inconsistent processes? AI layered on top of a broken process produces broken results faster. Fix the process first.

---

## Section 4: Pricing Models Decoded

A quick reference for the most common AI pricing structures.

---

**Per Seat / Per User**
You pay a fixed monthly fee for each person who has access. Example: $50 per user per month.

Works well when adoption is high and all users actually use the tool regularly.
Watch out for: paying for inactive seats. If half your team rarely opens the tool, you're wasting half your spend.

---

**Per API Call / Per Token**
You pay based on what you actually use. Example: $0.002 per 1,000 words processed.

Works well when usage is variable or hard to predict upfront.
Watch out for: surprise bills. One large batch job or unexpected traffic spike can generate a very large bill overnight. Always set a spending cap before you deploy a consumption-priced tool.

---

**Flat Monthly Fee**
One price for access up to a defined limit (or "unlimited," with conditions). Example: $299 per month.

Works well when you have high, consistent usage and want predictable costs.
Watch out for: what "unlimited" actually means. Most flat-rate plans have a fair use clause or a soft limit where throttling or overage charges kick in. Read the fine print before you hit the ceiling.

---

**Usage-Based / Metered (Tiered)**
A flat rate at each usage tier, with step-up pricing as you grow. Example: $49/month up to 5,000 messages, $299/month for 5,001 to 25,000 messages.

Works well at smaller scales as an entry point.
Watch out for: steep jumps between tiers. If you're near the top of a cheap tier and growing, your cost can jump 5x with one month of growth. Project your cost at 3x and 10x your current usage before committing.

---

**"Free Forever"**
The core product is free. The features you actually need are paid add-ons.

What it actually means: The demo is free. Useful integrations, export capabilities, higher usage limits, and advanced features are behind paywalls. By the time you've added everything you need, the "free" tool often costs more than a competing product with transparent flat-rate pricing. Factor all the add-ons into your comparison, not just the headline price.

---

**The Cost the Pricing Page Never Shows**

Whatever the pricing page says, the real first-year cost is higher. Factor in:

- Time to set it up and configure it for your business
- Time to connect it to your existing tools
- Time to train your team
- Time spent reviewing and correcting AI outputs
- The cost of switching to something else if it doesn't work out

A $99/month tool that takes 40 hours of setup has a real first-year cost that is thousands of dollars higher than the subscription alone.

---

## Final Note

The best AI vendors welcome hard questions. They've built real products for real customers, they know where the edges are, and they're confident enough in what they've built to be honest about what it doesn't do.

If asking any of these questions makes a vendor uncomfortable, defensive, or evasive — that tells you everything you need to know.

---

*Epiphany Dynamics — epiphanydynamics.ai*