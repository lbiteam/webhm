import { useState, useEffect } from "react";

const models: Record<
  string,
  { investment: number; revenue: number; opex: number }
> = {
  cart: { investment: 320000, revenue: 300000, opex: 80000 },
  parlour: { investment: 1200000, revenue: 600000, opex: 130000 },
  cafe: { investment: 2800000, revenue: 1200000, opex: 300000 },
};

interface FinancialPlanningSectionProps {
  inModal?: boolean;
}

const FinancialPlanningSection = ({ inModal }: FinancialPlanningSectionProps) => {
  const [selectedModel, setSelectedModel] = useState<"cart" | "parlour" | "cafe">("parlour");
  const [totalInv, setTotalInv] = useState(1200000);
  const [fundingPct, setFundingPct] = useState(30);
  const [interestRate, setInterestRate] = useState(12);
  const [tenureYears, setTenureYears] = useState(5);

  const data = models[selectedModel];
  const currentRevenue = data.revenue;
  const currentOpex = data.opex;

  const equity = totalInv * (fundingPct / 100);
  const loanAmt = totalInv - equity;
  const r = loanAmt > 0 ? (interestRate / 100) / 12 : 0;
  const n = tenureYears * 12;
  const emi =
    loanAmt > 0 && r > 0
      ? (loanAmt * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
      : 0;
  const grossProfit = currentRevenue * 0.45;
  const netProfit = grossProfit - currentOpex - emi;
  const annualProfit = netProfit * 12;
  const roi = totalInv > 0 ? (annualProfit / totalInv) * 100 : 0;
  const paybackMonths = netProfit > 0 ? totalInv / netProfit : 0;
  const profit5Year = netProfit > 0 ? (annualProfit * 5) / 100000 : 0;

  useEffect(() => {
    setTotalInv(data.investment);
  }, [selectedModel, data.investment]);

  const Wrapper = inModal ? "div" : "section";
  const wrapperClassName = inModal
    ? "py-6 bg-orange-50/30 rounded-b-2xl"
    : "py-20 bg-orange-50/50";
  const wrapperProps = inModal ? {} : { id: "profit-simulator" };

  return (
    <Wrapper className={wrapperClassName} {...wrapperProps}>
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-10">
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider border border-amber-200">
            Financial Planning
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-6 tracking-tight">
            What Will You Earn?
          </h2>
          <p className="text-gray-600 mt-4 text-lg mb-4">
            Pick your model, set your funding preference — see exact monthly profit instantly.
          </p>
          <div className="flex justify-center mt-4">
            <span className="bg-amber-100 text-amber-800 text-sm px-4 py-1.5 rounded-full tracking-wider border border-amber-200 inline-block">
              Our dedicated Franchise Support Team offers comprehensive loan assistance. <br />While Honeyman does not provide direct in-house loans or financing.
            </span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-bold text-amber-600 uppercase mb-4 tracking-wider flex items-center">
            <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center mr-2 text-xs">
              1
            </span>{" "}
            Choose Your Model
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(["cart", "parlour", "cafe"] as const).map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedModel(type)}
                className={`text-left p-6 rounded-2xl border-2 transition shadow-sm relative ${
                  selectedModel === type
                    ? "border-amber-500 bg-amber-50/30 scale-105 shadow-md"
                    : "border-transparent bg-white hover:border-amber-200"
                }`}
              >
                {type === "parlour" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md tracking-wider">
                    MOST POPULAR
                  </div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <div
                    className={`p-3 rounded-xl border ${
                      selectedModel === type ? "bg-amber-100 border-amber-200" : "bg-amber-50 border-amber-100"
                    }`}
                  >
                    <i
                      className={`fas ${
                        type === "cart"
                          ? "fa-shopping-cart"
                          : type === "parlour"
                          ? "fa-store"
                          : "fa-coffee"
                      } text-2xl text-amber-500`}
                    />
                  </div>
                  <span
                    className={`px-2 py-1 rounded font-bold text-sm ${
                      type === "parlour" ? "bg-amber-200 text-amber-900" : "bg-amber-100 text-amber-800"
                    }`}
                  >
                    {type === "cart" ? "₹3-5L" : type === "parlour" ? "₹10-15L" : "₹20-30L"}
                  </span>
                </div>
                <h3 className="font-bold text-xl text-gray-900">
                  {type === "cart" ? "Ice Cream Cart" : type === "parlour" ? "Ice Cream Parlour" : "Cafe Store"}
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  {type === "cart" ? "30" : type === "parlour" ? "150" : "400+"} sq ft space
                </p>
                <div className="text-sm text-gray-700 font-medium">
                  Rev: {type === "cart" ? "₹2.5-3.5L" : type === "parlour" ? "₹5-8L" : "₹10-15L"}/mo
                </div>
                <div className="text-xs text-amber-600 mt-1 font-bold">
                  Payback: {type === "cart" ? "10-12" : type === "parlour" ? "12-14" : "18-24"} mo
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-amber-100 p-8 md:p-10 mb-8">
          <p className="text-sm font-bold text-amber-600 uppercase mb-8 tracking-wider flex items-center">
            <span className="w-6 h-6 rounded-full bg-amber-200 text-amber-800 flex items-center justify-center mr-2 text-xs">
              2
            </span>{" "}
            Customize Your Investment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex justify-between mb-3">
                <label className="font-bold text-gray-700">Total Investment</label>
                <span className="font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-100">
                  ₹{(totalInv / 100000).toFixed(1)}L
                </span>
              </div>
              <input
                type="range"
                min={300000}
                max={3500000}
                step={50000}
                value={totalInv}
                onChange={(e) => setTotalInv(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>₹3L</span>
                <span>₹35L</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-3">
                <label className="font-bold text-gray-700">Self-Funding</label>
                <span className="font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-100">
                  {fundingPct}%
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                step={5}
                value={fundingPct}
                onChange={(e) => setFundingPct(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>0% (Full Loan)</span>
                <span>100% (Cash)</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-3">
                <label className="font-bold text-gray-700">Loan Interest Rate</label>
                <span className="font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-100">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min={8}
                max={18}
                step={0.5}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>8%</span>
                <span>18%</span>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-3">
                <label className="font-bold text-gray-700">Loan Tenure</label>
                <span className="font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-lg border border-amber-100">
                  {tenureYears} Yrs
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={7}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2 font-medium">
                <span>1 Year</span>
                <span>7 Years</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-3xl shadow-sm border border-amber-100 p-8 relative overflow-hidden">
            <h4 className="font-extrabold text-xl text-gray-900 mb-6 flex items-center">
              <i className="fas fa-wallet text-amber-500 mr-3 text-2xl" /> Investment Breakdown
            </h4>
            <div className="space-y-5">
              <div className="flex justify-between text-base border-b border-gray-100 pb-3">
                <span className="text-gray-600">Total Project Cost</span>
                <span className="font-bold text-gray-900">
                  ₹{totalInv.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-base border-b border-gray-100 pb-3">
                <span className="text-gray-600">Your Contribution</span>
                <span className="font-bold text-green-600">
                  ₹{Math.round(equity).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-base border-b border-gray-100 pb-3">
                <span className="text-gray-600">Loan Amount</span>
                <span className="font-bold text-red-500">
                  ₹{Math.round(loanAmt).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-lg bg-amber-50 p-4 rounded-xl border border-amber-100 mt-2">
                <span className="text-amber-900 font-bold">Monthly EMI</span>
                <span className="font-extrabold text-amber-600">
                  ₹{Math.round(emi).toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl shadow-md border-t-8 border-amber-500 p-8 relative overflow-hidden">
            <h4 className="font-extrabold text-xl text-gray-900 mb-6 flex items-center">
              <i className="fas fa-chart-line text-amber-500 mr-3 text-2xl" /> Monthly Profitability
            </h4>
            <div className="space-y-5">
              <div className="flex justify-between text-base border-b border-gray-100 pb-3">
                <span className="text-gray-600">Est. Average Revenue</span>
                <span className="font-bold text-gray-900">
                  ₹{currentRevenue.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-base border-b border-gray-100 pb-3">
                <span className="text-gray-600">Gross Profit (45%)</span>
                <span className="font-bold text-green-600">
                  ₹{Math.round(grossProfit).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-base border-b border-gray-100 pb-3">
                <span className="text-gray-600">Operating Costs</span>
                <span className="font-bold text-red-400">
                  - ₹{currentOpex.toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-base border-b border-gray-100 pb-3">
                <span className="text-gray-600">EMI Deduction</span>
                <span className="font-bold text-red-400">
                  - ₹{Math.round(emi).toLocaleString("en-IN")}
                </span>
              </div>
              <div className="flex justify-between text-xl bg-green-50 p-4 rounded-xl border border-green-200 items-center mt-2 shadow-inner">
                <span className="text-green-900 font-extrabold">Net Monthly Profit</span>
                <span className="font-black text-green-600 text-3xl">
                  ₹{Math.round(netProfit).toLocaleString("en-IN")}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 text-center border border-amber-100 shadow-sm">
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">
              Est. Payback Period
            </p>
            <p className="text-3xl font-black text-amber-600">
              {netProfit > 0 ? Math.round(paybackMonths) + " Months" : "N/A"}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-amber-100 shadow-sm">
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">
              Annual ROI
            </p>
            <p className="text-3xl font-black text-amber-600">
              {netProfit > 0 ? Math.round(roi) + "%" : "0%"}
            </p>
          </div>
          <div className="bg-white rounded-2xl p-6 text-center border border-amber-100 shadow-sm">
            <p className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-2">
              5-Year Net Profit
            </p>
            <p className="text-3xl font-black text-amber-600">
              {netProfit > 0 ? "₹" + profit5Year.toFixed(1) + " Lakhs" : "₹0"}
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default FinancialPlanningSection;
