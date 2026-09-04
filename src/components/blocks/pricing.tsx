import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";
import NumberFlow from "@number-flow/react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
  onSelectPlan?: (planName: string) => void;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you.\nAll plans include access to our platform, lead generation tools, and dedicated support.",
  onSelectPlan,
}: PricingProps) {
  const [isMonthly, setIsMonthly] = useState(true);
  const switchRef = useRef<HTMLButtonElement>(null);

  const handleToggle = (checked: boolean) => {
    setIsMonthly(!checked);
    if (checked && switchRef.current) {
      const rect = switchRef.current.getBoundingClientRect();
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x: rect.left / window.innerWidth + rect.width / (2 * window.innerWidth), y: rect.top / window.innerHeight },
        colors: ["#2563EB", "#60A5FA", "#93C5FD", "#DBEAFE"],
        ticks: 200,
        gravity: 1.2,
        decay: 0.94,
        startVelocity: 30,
        shapes: ["circle"],
      });
    }
  };

  return (
    <div className="py-20 px-5 sm:px-8 lg:px-12 bg-[#F4F7FC]">
      <div className="mx-auto max-w-[1440px]">
        <div className="text-center space-y-4 mb-12">
          <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-600">Ways to engage</span>
          <h2 className="text-[clamp(2.2rem,5vw,4.8rem)] font-medium leading-[0.98] tracking-[-0.055em] text-[#0B1020]">
            {title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg whitespace-pre-line max-w-2xl mx-auto leading-7">
            {description}
          </p>
        </div>

        <div className="flex justify-center items-center gap-3 mb-10">
          <span className={cn("text-sm font-semibold", isMonthly ? "text-[#0B1020]" : "text-slate-400")}>Monthly</span>
          <Label>
            <Switch
              ref={switchRef as React.RefObject<HTMLButtonElement>}
              checked={!isMonthly}
              onCheckedChange={handleToggle}
            />
          </Label>
          <span className={cn("text-sm font-semibold", !isMonthly ? "text-[#0B1020]" : "text-slate-400")}>
            Annual <span className="text-blue-600">(Save 20%)</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{
                y: plan.isPopular ? -20 : 0,
                opacity: 1,
                x: index === 2 ? -30 : index === 0 ? 30 : 0,
                scale: index === 0 || index === 2 ? 0.94 : 1.0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, type: "spring", stiffness: 100, damping: 30, delay: 0.4 }}
              className={cn(
                "rounded-2xl border p-6 bg-white text-center flex flex-col relative",
                plan.isPopular ? "border-blue-600 border-2 shadow-[0_28px_80px_rgba(37,99,235,0.12)]" : "border-slate-200",
                !plan.isPopular && "mt-5",
              )}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-blue-600 py-0.5 px-2 rounded-bl-xl rounded-tr-xl flex items-center">
                  <Star className="text-white h-4 w-4 fill-current" />
                  <span className="text-white ml-1 font-semibold text-xs">Popular</span>
                </div>
              )}
              <div className="flex-1 flex flex-col">
                <p className="text-sm font-bold text-slate-500 uppercase tracking-[0.1em]">{plan.name}</p>
                <div className="mt-6 flex items-center justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-[#0B1020]">
                    <NumberFlow
                      value={isMonthly ? Number(plan.price) : Number(plan.yearlyPrice)}
                      format={{ style: "currency", currency: "USD", minimumFractionDigits: 0, maximumFractionDigits: 0 }}
                      willChange
                    />
                  </span>
                  {plan.period !== "Next 3 months" && (
                    <span className="text-sm font-semibold text-slate-400">/ {plan.period}</span>
                  )}
                </div>
                <p className="text-xs text-slate-400 mt-1">{isMonthly ? "billed monthly" : "billed annually"}</p>

                <ul className="mt-5 gap-2 flex flex-col text-left">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-blue-600 mt-1 flex-shrink-0" />
                      <span className="text-sm text-slate-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <hr className="w-full my-5 border-slate-100" />

                <button
                  onClick={() => onSelectPlan?.(plan.name)}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "group relative w-full gap-2 overflow-hidden text-sm font-semibold tracking-tight",
                    "transform-gpu transition-all duration-300 ease-out hover:ring-2 hover:ring-blue-600 hover:ring-offset-1 hover:bg-blue-600 hover:text-white",
                    plan.isPopular ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700" : "bg-white text-[#0B1020]"
                  )}
                >
                  {plan.buttonText}
                </button>
                <p className="mt-4 text-xs text-slate-400 leading-5">{plan.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ONYIIX-specific pricing plans
export const onyiixPlans = [
  {
    name: "Website Launch",
    price: "2500",
    yearlyPrice: "2000",
    period: "project",
    features: [
      "Custom responsive website",
      "CMS or lead capture",
      "Technical SEO + analytics",
      "Campaign-ready launch",
      "1-month bug warranty",
    ],
    description: "Focused, credible digital presence. Delivery in 1–3 weeks.",
    buttonText: "Scope this engagement",
    href: "#contact",
    isPopular: false,
  },
  {
    name: "Growth Platform",
    price: "6500",
    yearlyPrice: "5200",
    period: "project",
    features: [
      "Multi-page product experience",
      "Conversion journeys + analytics",
      "CRM and marketing integrations",
      "Performance QA + SEO",
      "1-month bug warranty",
    ],
    description: "Commerce and measurable customer journeys. Delivery in 3–6 weeks.",
    buttonText: "Scope this engagement",
    href: "#contact",
    isPopular: true,
  },
  {
    name: "SaaS / Custom System",
    price: "15000",
    yearlyPrice: "12000",
    period: "project",
    features: [
      "Product and architecture sprint",
      "Roles, data and dashboards",
      "Billing or workflow automation",
      "Phased production releases",
      "1-month bug warranty",
    ],
    description: "Products with deeper logic and scale. Delivery in 6–12+ weeks.",
    buttonText: "Scope this engagement",
    href: "#contact",
    isPopular: false,
  },
];
