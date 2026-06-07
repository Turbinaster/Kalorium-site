import type { Metadata } from "next";

import { CalculatorFaqSection } from "@/components/sections/calculator/calculator-faq-section";
import {
  CalculatorProvider,
} from "@/components/sections/calculator/calculator-form-section";
import { CalculatorHeroSection } from "@/components/sections/calculator/calculator-hero-section";
import { CalculatorResultSection } from "@/components/sections/calculator/calculator-result-section";
import { CalculationMethodSection } from "@/components/sections/calculator/calculation-method-section";
import { GoalsSection } from "@/components/sections/calculator/goals-section";
import { MetricExplanationsSection } from "@/components/sections/calculator/metric-explanations-section";
import { NextStepsSection } from "@/components/sections/calculator/next-steps-section";
import { WhyDifferentSection } from "@/components/sections/calculator/why-different-section";
import { WhyNotEnoughSection } from "@/components/sections/calculator/why-not-enough-section";
import { JsonLd } from "@/components/seo/json-ld";
import { CtaSection } from "@/components/ui/cta-section";
import { calculatorFinalCta } from "@/data/calculator";
import { createMetadata } from "@/lib/seo";
import { createBreadcrumbStructuredData } from "@/lib/structured-data";

const baseMetadata = createMetadata("/calculator");

export const metadata: Metadata = {
  ...baseMetadata,
  title: "Калькулятор калорий онлайн — расчёт нормы калорий и КБЖУ | Калориум",
  description:
    "Калькулятор калорий онлайн: рассчитайте суточную норму калорий, КБЖУ, воду и клетчатку с учётом пола, возраста, роста, веса, активности и цели.",
  openGraph: {
    ...baseMetadata.openGraph,
    title: "Калькулятор калорий онлайн — расчёт нормы калорий и КБЖУ | Калориум",
    description:
      "Калькулятор калорий онлайн: рассчитайте суточную норму калорий, КБЖУ, воду и клетчатку с учётом пола, возраста, роста, веса, активности и цели.",
  },
  twitter: {
    ...baseMetadata.twitter,
    title: "Калькулятор калорий онлайн — расчёт нормы калорий и КБЖУ | Калориум",
    description:
      "Калькулятор калорий онлайн: рассчитайте суточную норму калорий, КБЖУ, воду и клетчатку с учётом пола, возраста, роста, веса, активности и цели.",
  },
};

export default function CalculatorPage() {
  return (
    <>
      <JsonLd data={createBreadcrumbStructuredData("/calculator", "Калькулятор калорий")} />
      <CalculatorProvider>
        <CalculatorHeroSection />
        <CalculatorResultSection />
      </CalculatorProvider>
      <CalculationMethodSection />
      <MetricExplanationsSection />
      <GoalsSection />
      <WhyDifferentSection />
      <NextStepsSection />
      <WhyNotEnoughSection />
      <CalculatorFaqSection />
      <CtaSection
        downloadActions
        description={calculatorFinalCta.text}
        note={calculatorFinalCta.note}
        secondaryAction={{
          label: calculatorFinalCta.secondaryCta,
          href: "/diary",
        }}
        title={calculatorFinalCta.title}
      />
    </>
  );
}
