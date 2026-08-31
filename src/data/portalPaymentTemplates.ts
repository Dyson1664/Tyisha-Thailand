export type PaymentStatus =
  | "paid"
  | "upcoming"
  | "due_now"
  | "pending_confirmation"
  | "overdue";

export type PaymentType =
  | "deposit"
  | "balance_1"
  | "balance_2"
  | "balance_3"
  | "balance_4"
  | "other";

export type PaymentCurrency = "USD" | "EUR";

export type PaymentInstallmentTemplate = {
  payment_label: string;
  payment_type: PaymentType;
  base_amount: number;
  upgrade_portion: number;
  discount_amount: number;
  total_amount: number;
  currency: PaymentCurrency;
  due_date: string | null;
  status: PaymentStatus;
};

export type PortalPackageTemplate = {
  package_type: string;
  package_name: string;
  total_trip_price: number;
  deposit_amount: number;
  balance_remaining: number;
  room_upgrade_enabled?: boolean;
  room_upgrade_name?: string;
  room_upgrade_total?: number;
  installments: PaymentInstallmentTemplate[];
};

const depositInstallment: PaymentInstallmentTemplate = {
  payment_label: "Deposit",
  payment_type: "deposit",
  base_amount: 400,
  upgrade_portion: 0,
  discount_amount: 0,
  total_amount: 400,
  currency: "USD",
  due_date: null,
  status: "paid",
};

const balanceDueDates = ["2026-11-05", "2027-01-15", "2027-02-15"] as const;

const balances = (
  amounts: number[],
  firstUpgradePortion = 0,
): PaymentInstallmentTemplate[] =>
  amounts.map((amount, index) => ({
    payment_label: `Balance Payment ${index + 1}`,
    payment_type: `balance_${index + 1}` as PaymentType,
    base_amount: amount,
    upgrade_portion: index === 0 ? firstUpgradePortion : 0,
    discount_amount: 0,
    total_amount: amount + (index === 0 ? firstUpgradePortion : 0),
    currency: "USD",
    due_date: balanceDueDates[index] ?? null,
    status: "upcoming",
  }));

export const PORTAL_PACKAGE_TEMPLATES: PortalPackageTemplate[] = [
  {
    package_type: "early_bird",
    package_name: "Min Best Of Thailand – Early Bird",
    total_trip_price: 2399,
    deposit_amount: 400,
    balance_remaining: 1999,
    installments: [depositInstallment, ...balances([650, 650, 699])],
  },
  {
    package_type: "early_bird_single_room",
    package_name: "Min Best Of Thailand – Early Bird + Single Room",
    total_trip_price: 2949,
    deposit_amount: 400,
    balance_remaining: 2549,
    room_upgrade_enabled: true,
    room_upgrade_name: "Single Room Supplement",
    room_upgrade_total: 550,
    installments: [depositInstallment, ...balances([650, 650, 699], 550)],
  },
  {
    package_type: "standard",
    package_name: "Min Best Of Thailand – Standard",
    total_trip_price: 2499,
    deposit_amount: 400,
    balance_remaining: 2099,
    installments: [depositInstallment, ...balances([700, 700, 699])],
  },
  {
    package_type: "standard_single_room",
    package_name: "Min Best Of Thailand – Standard + Single Room",
    total_trip_price: 3049,
    deposit_amount: 400,
    balance_remaining: 2649,
    room_upgrade_enabled: true,
    room_upgrade_name: "Single Room Supplement",
    room_upgrade_total: 550,
    installments: [depositInstallment, ...balances([700, 700, 699], 550)],
  },
];

export const getPortalPackageTemplate = (packageType: string) =>
  PORTAL_PACKAGE_TEMPLATES.find((template) => template.package_type === packageType);
