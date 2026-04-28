import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, CalendarDays, Plus, Minus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { breakfastMenu, lunchMenu, dinnerMenu, formatPrice, type MenuCategory, type MenuItem } from "@/data/menuData";
import { cn } from "@/lib/utils";

const dayOptions = [5, 6, 7];
const whatsappNumber = "254710883315";

const mealMaps = {
  breakfast: { name: "Breakfast", menu: breakfastMenu },
  lunch: { name: "Lunch", menu: lunchMenu },
  dinner: { name: "Dinner", menu: dinnerMenu },
} as const;

type MealKey = keyof typeof mealMaps;
type MealType = "Breakfast" | "Lunch" | "Dinner";

type SelectedMenuItem = {
  key: string;
  mealType: MealType;
  category: string;
  item: MenuItem;
  quantity: number;
};

const getNextMonday = () => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilNextMonday = ((8 - dayOfWeek) % 7) || 7;
  const nextMonday = new Date(today);
  nextMonday.setDate(today.getDate() + daysUntilNextMonday);
  return nextMonday.toISOString().slice(0, 10);
};

const getItemKey = (mealType: MealType, category: string, itemName: string) => `${mealType}:${category}:${itemName}`;

const MenuCategorySection = ({
  category,
  mealType,
  quantities,
  onIncrement,
  onDecrement,
}: {
  category: MenuCategory;
  mealType: MealType;
  quantities: Record<string, number>;
  onIncrement: (item: MenuItem, category: string) => void;
  onDecrement: (item: MenuItem, category: string) => void;
}) => {
  return (
    <div className="mb-12">
      <h3 className="font-heading text-xl font-semibold mb-6 flex items-center gap-3">
        <span className="text-2xl">{category.emoji || "??"}</span>
        {category.name}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.items.map((item, index) => {
          const key = getItemKey(mealType, category.name, item.name);
          const quantity = quantities[key] ?? 0;

          return (
            <div key={`${item.name}-${index}`} className="p-5 rounded-3xl bg-card shadow-soft border border-border/80 flex flex-col justify-between gap-4">
              <div>
                <div className="flex justify-between items-start gap-3 mb-3">
                  <div>
                    <h4 className="font-heading font-semibold text-lg leading-tight">{item.name}</h4>
                    {item.origin && <p className="text-sm text-primary">{item.origin}</p>}
                  </div>
                  <span className="text-lg font-semibold text-foreground">{formatPrice(item.price)}</span>
                </div>
                {item.description && <p className="text-sm text-muted-foreground line-clamp-3 mb-3">{item.description}</p>}
                {item.tags?.length ? (
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/50">
                <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-2 py-2">
                  <button
                    type="button"
                    onClick={() => onDecrement(item, category.name)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-slate-50 text-slate-700 transition hover:bg-slate-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="min-w-[2rem] text-center font-semibold text-foreground">{quantity}</span>
                  <button
                    type="button"
                    onClick={() => onIncrement(item, category.name)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-slate-50 text-slate-700 transition hover:bg-slate-100"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <p>Per day</p>
                  <p className="font-semibold text-foreground">{formatPrice(item.price)}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Menu = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState<MealKey>((searchParams.get("tab") as MealKey) || "breakfast");
  const [selectedItems, setSelectedItems] = useState<Record<string, SelectedMenuItem>>({});
  const [serviceDays, setServiceDays] = useState(5);
  const [startDate, setStartDate] = useState(() => getNextMonday());
  const earliestStartDate = getNextMonday();

  useEffect(() => {
    const tab = searchParams.get("tab") as MealKey | null;
    if (tab && ["breakfast", "lunch", "dinner"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleTabChange = (value: string) => {
    setActiveTab(value as MealKey);
    setSearchParams({ tab: value });
  };

  const handleItemChange = (mealType: MealType, category: string, item: MenuItem, delta: number) => {
    const key = getItemKey(mealType, category, item.name);
    setSelectedItems((current) => {
      const existing = current[key];
      const nextQuantity = (existing?.quantity ?? 0) + delta;
      if (nextQuantity <= 0) {
        const { [key]: _, ...rest } = current;
        return rest;
      }
      return {
        ...current,
        [key]: {
          key,
          mealType,
          category,
          item,
          quantity: nextQuantity,
        },
      };
    });
  };

  const filterCategories = (categories: MenuCategory[]) => {
    if (!searchTerm.trim()) return categories;

    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.origin?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(searchTerm.toLowerCase())
        ),
      }))
      .filter((category) => category.items.length > 0);
  };

  const quantities = useMemo(() => {
    return Object.fromEntries(Object.values(selectedItems).map((selected) => [selected.key, selected.quantity]));
  }, [selectedItems]);

  const selectedItemList = useMemo(() => Object.values(selectedItems), [selectedItems]);
  const dailyTotal = useMemo(
    () => selectedItemList.reduce((sum, selected) => sum + selected.item.price * selected.quantity, 0),
    [selectedItemList]
  );
  const orderTotal = dailyTotal * serviceDays;
  const selectedMealTypes = Array.from(new Set(selectedItemList.map((item) => item.mealType)));
  const hasSelection = selectedItemList.length > 0;

  const whatsappText = useMemo(() => {
    const lines: string[] = [
      "*New Menu Request - Reah's Foods*",
      "",
      `*Start date:* ${startDate}`,
      `*Days of service:* ${serviceDays}`,
      `*Meal types:* ${selectedMealTypes.join(", ") || "None"}`,
      "",
      "*Selected items:*",
    ];

    if (selectedItemList.length === 0) {
      lines.push("None");
    } else {
      selectedItemList.forEach((selected) => {
        lines.push(
          `*${selected.mealType} - ${selected.item.name}:* ${selected.quantity} x ${formatPrice(selected.item.price)} = ${formatPrice(
            selected.item.price * selected.quantity
          )}`
        );
      });
    }

    lines.push("", `*Daily total:* ${formatPrice(dailyTotal)}`);
    lines.push(`*Total for ${serviceDays} days:* ${formatPrice(orderTotal)}`);
    lines.push("", "_Sent via Reah's Foods Menu page_");
    return lines.join("\n");
  }, [startDate, serviceDays, selectedMealTypes, selectedItemList, dailyTotal, orderTotal]);

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText)}`;

  const currentMenu = mealMaps[activeTab].menu;
  const filteredCategories = filterCategories(currentMenu.categories);

  return (
    <main className="pt-24 pb-16">
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Select breakfast, lunch, and dinner items, choose your start date, and set how many days you want service.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="rounded-3xl border border-border bg-card p-6 shadow-soft sticky top-24 h-fit">
            <div className="flex items-center gap-3 text-foreground mb-6">
              <CalendarDays className="h-5 w-5 text-teal-600" />
              <div>
                <p className="text-sm uppercase tracking-[0.35em] font-semibold text-primary">Order details</p>
                <p className="text-sm text-muted-foreground">Service days and start date</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Start date</label>
                <input
                  type="date"
                  value={startDate}
                  min={earliestStartDate}
                  onChange={(event) => setStartDate(event.target.value)}
                  className="w-full rounded-3xl border border-border bg-background px-4 py-3 text-base text-foreground focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-100"
                />
                <p className="text-xs text-muted-foreground mt-2">Earliest available start date is next week&apos;s Monday to allow ingredient preparation over the weekend.</p>
              </div>

              <div>
                <p className="text-sm font-medium text-foreground mb-3">Number of service days</p>
                <div className="flex flex-wrap gap-3">
                  {dayOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setServiceDays(option)}
                      className={cn(
                        "rounded-full border px-4 py-2 text-sm font-medium transition",
                        serviceDays === option
                          ? "border-teal-600 bg-teal-600 text-white"
                          : "border-border bg-background text-foreground hover:border-teal-300"
                      )}
                    >
                      {option} days
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">Minimum 5 days: Monday to Friday service.</p>
              </div>
            </div>

            <div className="mt-8 rounded-3xl border border-border bg-background p-5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground">Selected meal types</p>
                  <p className="font-semibold text-foreground">{selectedMealTypes.join(", ") || "None yet"}</p>
                </div>
                <span className="text-sm text-muted-foreground">{selectedItemList.length} item(s)</span>
              </div>

              <div className="space-y-3">
                {selectedItemList.length === 0 ? (
                  <p className="text-sm text-muted-foreground">Add items from breakfast, lunch, or dinner to your order.</p>
                ) : (
                  selectedItemList.map((selected) => (
                    <div key={selected.key} className="flex items-center justify-between gap-3 rounded-2xl bg-slate-50 p-3">
                      <div>
                        <p className="text-sm font-semibold text-foreground">{selected.item.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {selected.mealType} · {selected.quantity} serving(s)
                        </p>
                      </div>
                      <div className="text-right text-sm font-semibold text-foreground">
                        {formatPrice(selected.item.price * selected.quantity)}
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="mt-6 border-t border-border pt-4 space-y-3">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>Daily total</span>
                  <span>{formatPrice(dailyTotal)}</span>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{serviceDays} days total</span>
                  <span>{formatPrice(orderTotal)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  if (!hasSelection || !startDate) return;
                  window.open(whatsappLink, "_blank");
                }}
                disabled={!hasSelection || !startDate}
                className={cn(
                  "mt-6 w-full rounded-3xl px-5 py-4 text-base font-semibold transition",
                  hasSelection && startDate
                    ? "bg-emerald-500 text-white hover:bg-emerald-600"
                    : "bg-slate-300 text-slate-600 cursor-not-allowed"
                )}
              >
                Checkout on WhatsApp
              </button>
            </div>
          </aside>

          <div className="space-y-8">
            <div className="grid gap-4 xl:grid-cols-[2fr_1fr] items-end">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search menu items..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-11"
                />
              </div>
              <div className="rounded-3xl border border-border bg-card p-4">
                <p className="text-sm text-muted-foreground mb-3">Quick order details</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-border/80 bg-background p-4 text-sm">
                    <p className="text-muted-foreground">Meals selected</p>
                    <p className="font-semibold text-foreground">{selectedMealTypes.length || 0}</p>
                  </div>
                  <div className="rounded-3xl border border-border/80 bg-background p-4 text-sm">
                    <p className="text-muted-foreground">Total servings</p>
                    <p className="font-semibold text-foreground">{selectedItemList.reduce((sum, selected) => sum + selected.quantity, 0)}</p>
                  </div>
                </div>
              </div>
            </div>

            <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
              <TabsList className="mb-8 w-full grid grid-cols-3 h-auto rounded-3xl border border-border bg-card p-1">
                {Object.entries(mealMaps).map(([key, value]) => (
                  <TabsTrigger key={key} value={key} className="rounded-3xl py-3 text-sm md:text-base">
                    {value.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(mealMaps).map(([key, value]) => (
                <TabsContent key={key} value={key} className="space-y-10">
                  <div className="mb-6">
                    <h2 className="font-heading text-2xl font-bold mb-2">{value.menu.title}</h2>
                    <p className="text-muted-foreground">{value.menu.description}</p>
                  </div>
                  {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                      <MenuCategorySection
                        key={category.name}
                        category={category}
                        mealType={value.name}
                        quantities={quantities}
                        onIncrement={(item, categoryName) => handleItemChange(value.name, categoryName, item, 1)}
                        onDecrement={(item, categoryName) => handleItemChange(value.name, categoryName, item, -1)}
                      />
                    ))
                  ) : (
                    <div className="text-center py-12 rounded-3xl border border-border bg-card">
                      <p className="text-muted-foreground">No menu items match your search.</p>
                    </div>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Menu;
