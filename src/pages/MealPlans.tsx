import { useMemo, useState } from "react";
import {
  ArrowRight,
  Target,
  Dumbbell,
  Leaf,
  Sparkles,
  HeartPulse,
  Activity,
  Sun,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const termsLines = [
  "By filling out this form, you agree to allow Reah's Foods to collect and use the personal information you provide including your name, WhatsApp number, dietary preferences, health goals, physical details and location solely for the purpose of building a personalised meal plan for you.",
  "Your information will not be shared with any third parties.",
  "It will only be used by Reah's Foods to contact you via WhatsApp, understand your nutritional needs and curate a custom menu that suits your lifestyle and goals.",
  "You may withdraw your consent at any time by contacting us directly on WhatsApp at +254 710 883 315 or by emailing reahsfoods@gmail.com.",
];

const goalOptions = [
  { value: "Weight Loss", label: "Weight Loss", Icon: Target, description: "Lean, balanced meals to help you reduce body fat." },
  { value: "Weight Gain", label: "Weight Gain", Icon: ArrowRight, description: "Higher calorie meals designed to support healthy gains." },
  { value: "Body Building", label: "Body Building", Icon: Dumbbell, description: "Protein rich meals to support muscle growth." },
  { value: "Keto Diet", label: "Keto Diet", Icon: Leaf, description: "Low carbohydrate meals with healthy fats." },
  { value: "Vegan", label: "Vegan", Icon: Sparkles, description: "Plant based meals with strong nutritional balance." },
  { value: "Other", label: "Other", Icon: HeartPulse, description: "Share a custom goal and we will build around it." },
];

const mealCountOptions = [2, 3, 4, 5];
const protocolOptions = [
  "None",
  "Intermittent Fasting",
  "OMAD",
  "Other",
];

const dietaryOptions = [
  "None",
  "Halal Only",
  "No Gluten",
  "No Dairy",
  "No Pork",
  "No Nuts",
  "No Eggs",
  "Other",
];

const organicOptions = [
  "Yes fully organic",
  "Where possible",
  "No preference",
];

const daysOptions = [3, 5, 7];

const activityOptions = [
  {
    value: "Sedentary",
    label: "Sedentary",
    Icon: ShieldCheck,
    subtitle: "Little or no exercise.",
  },
  {
    value: "Lightly Active",
    label: "Lightly Active",
    Icon: Sun,
    subtitle: "Light exercise or walking.",
  },
  {
    value: "Active",
    label: "Active",
    Icon: Zap,
    subtitle: "Moderate exercise most days.",
  },
  {
    value: "Very Active",
    label: "Very Active",
    Icon: Activity,
    subtitle: "Intense daily training.",
  },
];

const whatsappNumber = "254710883315";

const MealPlans = () => {
  const [step, setStep] = useState<"terms" | "form">("terms");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [fullName, setFullName] = useState("");
  const [whatsappNumberInput, setWhatsappNumberInput] = useState("");
  const [goal, setGoal] = useState("");
  const [otherGoal, setOtherGoal] = useState("");
  const [mealsPerDay, setMealsPerDay] = useState<number | null>(null);
  const [eatingProtocol, setEatingProtocol] = useState("");
  const [otherEatingProtocol, setOtherEatingProtocol] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string[]>([]);
  const [otherDietaryRestriction, setOtherDietaryRestriction] = useState("");
  const [organicPreference, setOrganicPreference] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState<number | null>(null);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState("");
  const [excludeFoods, setExcludeFoods] = useState("");
  const [favoriteFoods, setFavoriteFoods] = useState("");
  const [deliveryArea, setDeliveryArea] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const selectedGoal = goal === "Other" ? otherGoal.trim() : goal;
  const selectedEatingProtocol = eatingProtocol === "Other" ? otherEatingProtocol.trim() : eatingProtocol;
  const selectedDietaryRestrictions = dietaryRestrictions.includes("Other")
    ? ["Other", otherDietaryRestriction.trim()].filter(Boolean)
    : dietaryRestrictions;

  const goalComplete = Boolean(selectedGoal);
  const protocolComplete = Boolean(selectedEatingProtocol);
  const dietaryComplete = dietaryRestrictions.length > 0 && (!dietaryRestrictions.includes("Other") || otherDietaryRestriction.trim().length > 0);
  const detailsComplete = weight.trim().length > 0 && height.trim().length > 0;
  const isFormValid =
    fullName.trim().length > 0 &&
    whatsappNumberInput.trim().length > 0 &&
    goalComplete &&
    mealsPerDay !== null &&
    protocolComplete &&
    dietaryComplete &&
    organicPreference.length > 0 &&
    daysPerWeek !== null &&
    detailsComplete &&
    activityLevel.length > 0 &&
    deliveryArea.trim().length > 0;

  const completedFields = [
    fullName.trim().length > 0,
    whatsappNumberInput.trim().length > 0,
    goalComplete,
    mealsPerDay !== null,
    protocolComplete,
    dietaryComplete,
    organicPreference.length > 0,
    daysPerWeek !== null,
    detailsComplete,
    activityLevel.length > 0,
    deliveryArea.trim().length > 0,
    favoriteFoods.trim().length > 0,
  ].filter(Boolean).length;

  const progress = useMemo(() => Math.round((completedFields / 12) * 100), [completedFields]);

  const toggleDietaryRestriction = (value: string) => {
    setDietaryRestrictions((current) => {
      if (value === "None") {
        return current.includes("None") ? [] : ["None"];
      }

      if (current.includes(value)) {
        return current.filter((item) => item !== value);
      }

      const next = current.filter((item) => item !== "None");
      return [...next, value];
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isFormValid) return;

    const lines = [
      "*New Menu Request - Reah's Foods*",
      "",
      `*Full name:* ${fullName.trim()}`,
      `*WhatsApp number:* ${whatsappNumberInput.trim()}`,
      `*Goal:* ${selectedGoal}`,
      `*Meals per day:* ${mealsPerDay}`,
      `*Eating protocol:* ${selectedEatingProtocol}`,
      `*Dietary restrictions:* ${selectedDietaryRestrictions.join(", ") || "None"}`,
      `*Organic preference:* ${organicPreference}`,
      `*Days of meals per week:* ${daysPerWeek}`,
      `*Current weight:* ${weight.trim()}`,
      `*Current height:* ${height.trim()}`,
      `*Activity level:* ${activityLevel}`,
      `*Foods to exclude:* ${excludeFoods.trim() || "None"}`,
      `*Favourite foods:* ${favoriteFoods.trim() || "None"}`,
      `*Delivery area in Nairobi:* ${deliveryArea.trim()}`,
      `*Additional notes:* ${additionalNotes.trim() || "None"}`,
      "",
      "_Sent via Reah's Foods Meal Plans page_",
    ].join("\n");

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="pt-24 pb-16 min-h-screen bg-background">
      <div className="container mx-auto px-4">
        <section className="max-w-5xl mx-auto">
          <div className="mb-10 text-center">
            <p className="text-sm tracking-[0.32em] uppercase font-semibold text-primary">Build Your Meal plan</p>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold mt-4">Build your Menu</h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-3xl mx-auto">
              Tell us your preferences and we will curate a meal plan that fits your goals, dietary needs, and lifestyle.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl sm:rounded-[2rem] border border-border bg-card shadow-elevated min-h-[560px] sm:min-h-[640px] md:min-h-[680px]">
            <div
              className={cn(
                "absolute inset-0 p-4 sm:p-8 overflow-hidden transition-transform duration-700 ease-in-out",
                step === "terms" ? "translate-x-0" : "-translate-x-full"
              )}
            >
              <div className="h-full flex flex-col">
                <div className="mb-8">
                  <span className="text-sm tracking-[0.3em] uppercase font-semibold text-primary">
                    Before we get started
                  </span>
                  <h2 className="mt-4 text-3xl sm:text-4xl font-heading font-bold">
                    Please read and accept our terms before building your menu
                  </h2>
                </div>

                <div className="flex-1 overflow-hidden rounded-[1.5rem] border border-border bg-background p-6 shadow-inner">
                  <div className="h-full overflow-y-auto pr-4 text-sm leading-7 text-muted-foreground">
                    {termsLines.map((line, index) => (
                      <p key={index} className={index < termsLines.length - 1 ? "mb-4" : ""}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <label className="inline-flex items-center gap-3 text-sm text-foreground">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(event) => setAcceptedTerms(event.target.checked)}
                      className="h-5 w-5 rounded border-border text-teal-600 focus:ring-teal-500"
                    />
                    I have read and I agree to the Terms and Conditions
                  </label>

                  <Button
                    type="button"
                    className={cn(
                      "w-full justify-center gap-2 py-4 text-base font-semibold",
                      acceptedTerms
                        ? "bg-teal-600 text-white hover:bg-teal-700"
                        : "bg-slate-300 text-slate-600 cursor-not-allowed"
                    )}
                    disabled={!acceptedTerms}
                    onClick={() => setStep("form")}
                  >
                    Agree and Continue
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={cn(
                "absolute inset-0 p-4 sm:p-8 overflow-y-auto transition-transform duration-700 ease-in-out",
                step === "form" ? "translate-x-0" : "translate-x-full"
              )}
            >
              <form onSubmit={handleSubmit} className="h-full flex flex-col">
                <div className="mb-8">
                  <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className="text-sm tracking-[0.3em] uppercase font-semibold text-primary">
                        Build Your Meal plan
                      </p>
                      <h2 className="mt-4 text-3xl sm:text-4xl font-heading font-bold">
                        Build your Menu
                      </h2>
                    </div>
                    <div className="w-full max-w-md">
                      <div className="text-sm text-muted-foreground mb-2">Progress</div>
                      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
                        <div className="h-full bg-teal-600 transition-all duration-500" style={{ width: `${progress}%` }} />
                      </div>
                      <div className="text-xs text-muted-foreground mt-2">{progress}% complete</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-10 pr-2">
                  <div className="grid gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Full name</label>
                      <input
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">WhatsApp number</label>
                      <input
                        type="tel"
                        value={whatsappNumberInput}
                        onChange={(event) => setWhatsappNumberInput(event.target.value)}
                        placeholder="+254 7XX XXX XXX"
                        className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-sm font-medium text-foreground">Goal</p>
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {goalOptions.map(({ value, label, Icon, description }) => {
                        const selected = goal === value;
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setGoal(value)}
                            className={cn(
                              "group flex flex-col rounded-[1.5rem] border p-5 text-left transition-all duration-200",
                              selected
                                ? "border-teal-600 bg-teal-50 shadow-sm"
                                : "border-border bg-background hover:border-teal-300"
                            )}
                          >
                            <div className={cn("mb-4 inline-flex h-12 w-12 items-center justify-center rounded-3xl", selected ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-700")}>
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{label}</p>
                              <p className="mt-2 text-sm text-muted-foreground">{description}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                    {goal === "Other" && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-foreground mb-2">Please tell us your goal</label>
                        <input
                          value={otherGoal}
                          onChange={(event) => setOtherGoal(event.target.value)}
                          className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                          placeholder="Write your custom goal"
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <p className="mb-4 text-sm font-medium text-foreground">Meals per day</p>
                      <div className="flex flex-wrap gap-3">
                        {mealCountOptions.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => setMealsPerDay(option)}
                            className={cn(
                              "rounded-full border px-4 py-2 text-sm font-medium transition",
                              mealsPerDay === option
                                ? "border-teal-600 bg-teal-600 text-white"
                                : "border-border bg-background text-foreground hover:border-teal-300"
                            )}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="mb-4 text-sm font-medium text-foreground">Eating protocol</p>
                      <div className="flex flex-wrap gap-3">
                        {protocolOptions.map((option) => {
                          const selected = eatingProtocol === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setEatingProtocol(option)}
                              className={cn(
                                "rounded-full border px-4 py-2 text-sm font-medium transition",
                                selected
                                  ? "border-teal-600 bg-teal-600 text-white"
                                  : "border-border bg-background text-foreground hover:border-teal-300"
                              )}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                      {eatingProtocol === "Other" && (
                        <div className="mt-4">
                          <label className="block text-sm font-medium text-foreground mb-2">Please describe your protocol</label>
                          <input
                            value={otherEatingProtocol}
                            onChange={(event) => setOtherEatingProtocol(event.target.value)}
                            className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                            placeholder="Enter protocol details"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-sm font-medium text-foreground">Dietary restrictions</p>
                    <div className="flex flex-wrap gap-3">
                      {dietaryOptions.map((option) => {
                        const selected = dietaryRestrictions.includes(option);
                        return (
                          <button
                            key={option}
                            type="button"
                            onClick={() => toggleDietaryRestriction(option)}
                            className={cn(
                              "rounded-full border px-4 py-2 text-sm font-medium transition",
                              selected
                                ? "border-teal-600 bg-teal-600 text-white"
                                : "border-border bg-background text-foreground hover:border-teal-300"
                            )}
                          >
                            {option}
                          </button>
                        );
                      })}
                    </div>
                    {dietaryRestrictions.includes("Other") && (
                      <div className="mt-4">
                        <label className="block text-sm font-medium text-foreground mb-2">Please specify other restrictions</label>
                        <input
                          value={otherDietaryRestriction}
                          onChange={(event) => setOtherDietaryRestriction(event.target.value)}
                          className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                          placeholder="Describe your other restriction"
                        />
                      </div>
                    )}
                  </div>

                  <div className="grid gap-8 lg:grid-cols-2">
                    <div>
                      <p className="mb-4 text-sm font-medium text-foreground">Organic preference</p>
                      <div className="flex flex-wrap gap-3">
                        {organicOptions.map((option) => {
                          const selected = organicPreference === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setOrganicPreference(option)}
                              className={cn(
                                "rounded-full border px-4 py-2 text-sm font-medium transition",
                                selected
                                  ? "border-teal-600 bg-teal-600 text-white"
                                  : "border-border bg-background text-foreground hover:border-teal-300"
                              )}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div>
                      <p className="mb-4 text-sm font-medium text-foreground">Days of meals per week</p>
                      <div className="flex flex-wrap gap-3">
                        {daysOptions.map((option) => {
                          const selected = daysPerWeek === option;
                          return (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setDaysPerWeek(option)}
                              className={cn(
                                "rounded-full border px-4 py-2 text-sm font-medium transition",
                                selected
                                  ? "border-teal-600 bg-teal-600 text-white"
                                  : "border-border bg-background text-foreground hover:border-teal-300"
                              )}
                            >
                              {option} days
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-6 lg:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Current weight</label>
                      <input
                        value={weight}
                        onChange={(event) => setWeight(event.target.value)}
                        className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                        placeholder="e.g. 68 kg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Current height</label>
                      <input
                        value={height}
                        onChange={(event) => setHeight(event.target.value)}
                        className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                        placeholder="e.g. 170 cm"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="mb-4 text-sm font-medium text-foreground">Activity level</p>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {activityOptions.map(({ value, label, Icon, subtitle }) => {
                        const selected = activityLevel === value;
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => setActivityLevel(value)}
                            className={cn(
                              "flex items-start gap-4 rounded-[1.5rem] border p-5 text-left transition-all duration-200",
                              selected
                                ? "border-teal-600 bg-teal-50 shadow-sm"
                                : "border-border bg-background hover:border-teal-300"
                            )}
                          >
                            <div className={cn("mt-1 inline-flex h-12 w-12 items-center justify-center rounded-3xl", selected ? "bg-teal-600 text-white" : "bg-slate-100 text-slate-700")}> 
                              <Icon className="h-6 w-6" />
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{label}</p>
                              <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Foods to exclude</label>
                    <textarea
                      value={excludeFoods}
                      onChange={(event) => setExcludeFoods(event.target.value)}
                      className="min-h-[120px] w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                      placeholder="e.g. no onions, no spicy sauces"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Favourite foods</label>
                    <textarea
                      value={favoriteFoods}
                      onChange={(event) => setFavoriteFoods(event.target.value)}
                      className="min-h-[120px] w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                      placeholder="Tell us the foods you love most"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Delivery area in Nairobi</label>
                    <input
                      value={deliveryArea}
                      onChange={(event) => setDeliveryArea(event.target.value)}
                      className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                      placeholder="Example: Kilimani, Westlands, Langata"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Additional notes</label>
                    <textarea
                      value={additionalNotes}
                      onChange={(event) => setAdditionalNotes(event.target.value)}
                      className="min-h-[120px] w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                      placeholder="Any extra details we should know"
                    />
                  </div>
                </div>

                <div className="mt-auto">
                  <Button
                    type="submit"
                    className={cn(
                      "w-full justify-center gap-3 py-4 text-base font-semibold",
                      isFormValid
                        ? "bg-emerald-500 text-white hover:bg-emerald-600"
                        : "bg-slate-300 text-slate-600 cursor-not-allowed"
                    )}
                    disabled={!isFormValid}
                  >
                    Send to Reah's Foods on WhatsApp
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default MealPlans;
