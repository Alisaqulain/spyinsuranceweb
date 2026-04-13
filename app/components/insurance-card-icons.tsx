import type { InsuranceIconKey } from "../lib/insurance-products";

export function CardIcon({
  icon,
  className,
}: {
  icon: InsuranceIconKey;
  className?: string;
}) {
  switch (icon) {
    case "car":
      return <CarIcon className={className} />;
    case "bike":
      return <BikeIcon className={className} />;
    case "truck":
      return <TruckIcon className={className} />;
    case "passenger":
      return <PassengerIcon className={className} />;
    case "home":
      return <HomeIcon className={className} />;
    case "briefcase":
      return <BriefcaseIcon className={className} />;
    case "anchor":
      return <AnchorIcon className={className} />;
    case "user":
      return <UserIcon className={className} />;
    case "shield":
    default:
      return <ShieldIcon className={className} />;
  }
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 2.5 19 6v7.2c0 4.6-3 8-7 9.8-4-1.8-7-5.2-7-9.8V6l7-3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.2 12.3l1.9 1.9 3.8-4.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.7 10.2 8.3 6.8c.3-.7 1-1.1 1.8-1.1h3.8c.8 0 1.5.4 1.8 1.1l1.6 3.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5.4 10.3h13.2c.9 0 1.6.7 1.6 1.6v3.1c0 .9-.7 1.6-1.6 1.6H5.4c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7.4 16.6v1.2M16.6 16.6v1.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8.2" cy="13.2" r="1.1" fill="#22c55e" />
      <circle cx="15.8" cy="13.2" r="1.1" fill="#22c55e" />
    </svg>
  );
}

function BikeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="7.2" cy="16.6" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="16.6" r="2.6" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M10.2 7.2h3.1l1.2 2.5h-3.1L10.2 7.2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M8.8 13.2 11 9.7h3.5l2.1 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="17.2" cy="16.6" r="1.1" fill="#22c55e" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M3.6 8.2h10.6v8H3.6v-8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14.2 10.2h3.6l2.6 2.7v3.3h-6.2v-6Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="7.4" cy="17.2" r="1.2" fill="#22c55e" />
      <circle cx="17.2" cy="17.2" r="1.2" fill="#22c55e" />
    </svg>
  );
}

function PassengerIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 7.5h8.8c1 0 1.8.8 1.8 1.8v6.3H6V7.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M14.8 10.2h2.3c.6 0 1.1.2 1.5.6l1.4 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M8 9.6h2.4M8 12h2.4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8.3" cy="16.9" r="1.2" fill="#22c55e" />
      <circle cx="16.6" cy="16.9" r="1.2" fill="#22c55e" />
    </svg>
  );
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M4.5 11.2 12 5.2l7.5 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M7 10.8V19h10v-8.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M11 19v-4.2h2V19"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="18.2" cy="8.1" r="1.1" fill="#22c55e" />
    </svg>
  );
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M8.2 7.8V6.6c0-.8.6-1.4 1.4-1.4h4.8c.8 0 1.4.6 1.4 1.4v1.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M5.4 8.6h13.2c.8 0 1.4.6 1.4 1.4v7.1c0 .8-.6 1.4-1.4 1.4H5.4c-.8 0-1.4-.6-1.4-1.4V10c0-.8.6-1.4 1.4-1.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="17.8" cy="10.6" r="1.1" fill="#22c55e" />
    </svg>
  );
}

function AnchorIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3.8a2 2 0 0 0 0 4 2 2 0 0 0 0-4Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M12 7.8v10.1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M7.2 11.2H5.4c0 4.4 2.7 7 6.6 7s6.6-2.6 6.6-7h-1.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="18.1" cy="11.2" r="1.1" fill="#22c55e" />
    </svg>
  );
}

function UserIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 12.2a3.5 3.5 0 1 0-3.5-3.5 3.5 3.5 0 0 0 3.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M5.8 19.3c1.5-2.6 3.7-4 6.2-4s4.7 1.4 6.2 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="16.9" cy="6.8" r="1.1" fill="#22c55e" />
    </svg>
  );
}
