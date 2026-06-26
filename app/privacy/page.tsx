import { Section } from "@/components/site/section";

export const metadata = {
  title: "Privacy Policy",
  description: "How Vibe Coding for Managers handles your email and privacy information.",
};

export default function PrivacyPage() {
  return (
    <main>
      <Section
        eyebrow="Privacy"
        title="Privacy Policy"
        intro="This site collects your email address when you request the free PDF so I can send the guide and occasional updates."
      >
        <div className="space-y-6 text-xl leading-8 text-black/80">
          <p>
            Your email is used only to deliver the PDF and related updates about Vibe Coding for Managers. I do not sell your information.
          </p>
          <p>
            You can unsubscribe at any time by replying to a message or contacting hello@vibecodingformanagers.com.
          </p>
          <p>
            This site uses email signup data for the purpose of sending the promised PDF and occasional product updates. The data is stored securely and only retained as long as needed for that purpose.
          </p>
        </div>
      </Section>
    </main>
  );
}
